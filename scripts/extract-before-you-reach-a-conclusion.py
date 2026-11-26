"""Import production v4, with line-based paragraphs and HTML appendix tables."""

from bisect import bisect_right
from collections import Counter
import json
from pathlib import Path
import re
import runpy
from shutil import copyfile

import fitz


ROOT = Path(__file__).resolve().parents[1]
SLUG = "before-you-reach-a-conclusion"
PDF = "Before_You_Reach_a_Conclusion_Production_v4.pdf"
ASSETS = ROOT / "public" / "books" / SLUG
HELPERS = runpy.run_path(str(ROOT / "scripts" / "extract-think-beyond-ai.py"))
INLINE = HELPERS["inline_runs"]


def position(line):
    return line["spans"][0]["origin"][1], line["bbox"][0]


def size(line):
    return round(line["spans"][0]["size"], 1)


def text(line):
    return "".join(span["text"] for span in line["spans"]).strip()


def page_lines(page):
    return sorted((line for block in HELPERS["text_blocks"](page) for line in block["lines"]
                   if text(line)), key=lambda line: (round(position(line)[0], 2), position(line)[1]))


def reflow(lines):
    prepared = []
    for line in lines:
        spans = [dict(span) for span in line["spans"]]
        spans[-1]["text"] = spans[-1]["text"].rstrip()
        prepared.append({**line, "spans": spans})
    return INLINE({"lines": prepared}, [])


def join(lines):
    return "".join(run["text"] for run in reflow(lines))


def table_group(document, pages, columns):
    rows = []
    beginning = True
    for number in pages:
        lines = [line for line in page_lines(document[number - 1]) if size(line) == 8.5]
        if not beginning:
            header_baseline = position(lines[0])[0]
            lines = [line for line in lines if position(line)[0] - header_baseline > 1]
        for line in lines:
            _, x = position(line)
            col = bisect_right(columns, x)
            if col == 0 and x > 70:
                rows.append([[] for _ in range(len(columns) + 1)])
            rows[-1][col].append(line)
        beginning = False
    return {"type": "table", "rows": [[join(cell) for cell in row] for row in rows]}


def route(label):
    chapter = re.match(r"^(\d+)\. (.+)$", label)
    if chapter:
        number, title = chapter.groups()
        return f"chapter-{number}", f"Chapter {number}", title
    if " — " in label:
        prefix, title = label.split(" — ", 1)
        return prefix.lower().replace(" ", "-"), prefix, title
    return "references", "", label


def plain(block):
    return "".join(run["text"] for run in block["runs"])


def content(document, start, stop, references=False, copyright_page=False):
    output = []
    current = []
    kind = "p"
    previous = None
    reference_number = 0
    marker = chr(8226)

    def flush():
        nonlocal current, kind, reference_number
        if current:
            runs = reflow(current)
            block = {"type": kind, "runs": runs}
            if kind == "ul" and references:
                reference_number += 1
                block["id"] = f"source-{reference_number}"
            if kind == "h2" and references and re.fullmatch(r"Introduction|Chapter \d+", plain(block)):
                block["id"] = plain(block).lower().replace(" ", "-")
            output.append(block)
        current = []
        kind = "p"

    for number in range(start, stop):
        page = document[number - 1]
        lines = [line for line in page_lines(page) if size(line) >= 8.5]
        if not copyright_page:
            lines = [line for line in lines if size(line) != 17]
        bullet = False
        for index, line in enumerate(lines):
            y, x = position(line)
            value = text(line)
            line_size = size(line)
            if number in (174, 175, 182, 183) and line_size == 8.5:
                if number in (174, 182) and (not output or output[-1]["type"] != "table"):
                    flush()
                    output.append(table_group(document, (number, number + 1), [155, 265] if number == 174 else [210]))
                previous = None
                continue
            if value == marker:
                flush()
                kind = "ul"
                bullet = True
                previous = None
                continue
            if line_size in (11.5, 12):
                flush()
                kind = "h2"
                current = [line]
                flush()
                previous = None
                continue
            first_of_page = index == 0
            if current and not bullet:
                py, px = position(previous)
                if first_of_page:
                    # The layout omits a first-line indent when a paragraph continues onto a new page.
                    if kind == "p" and (x > 67 or (py < 570 and re.search(r'[.!?][”’")\]]*$', join(current)))):
                        flush()
                elif y - py > (15 if line_size == 8.5 else 19) or line_size != size(previous):
                    flush()
            current.append(line)
            bullet = False
            previous = line
    flush()
    return output


def check_characters(document, start, stop, blocks, copyright_page=False):
    def count(text):
        return Counter(ch for ch in text if not ch.isspace())

    expected = Counter()
    for number in range(start, stop):
        lines = [line for line in page_lines(document[number - 1]) if size(line) >= 8.5 and (copyright_page or size(line) != 17)]
        if number in (175, 183):
            lines = [line for line in lines if not (size(line) == 8.5 and position(line)[0] < 71)]
        expected.update(count("".join(text(line) for line in lines)))
    actual = Counter()
    for block in blocks:
        if block["type"] == "table":
            actual.update(count("".join(cell for row in block["rows"] for cell in row)))
        else:
            actual.update(count((chr(8226) if block["type"] == "ul" else "") + plain(block)))
    if expected != actual:
        raise ValueError(f"Content mismatch on pages {start}–{stop - 1}: missing {expected - actual}, extra {actual - expected}")


def main():
    ASSETS.mkdir(parents=True, exist_ok=True)
    with fitz.open(ROOT / PDF) as document:
        cover = document[0].get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        cover.save(ASSETS / "cover.png")
        outline = document.get_toc()
        sections = []
        for (_, label, start), (_, _, stop) in zip(outline, outline[1:] + [(0, "", len(document))]):
            slug, prefix, title = route(label)
            blocks = content(document, start, stop, references=slug == "references")
            check_characters(document, start, stop, blocks)
            sections.append({"slug": slug, "prefix": prefix, "title": title, "label": label, "blocks": blocks})
        copyright_blocks = content(document, 3, 4, copyright_page=True)
        check_characters(document, 3, 4, copyright_blocks, copyright_page=True)
        sections.append({"slug": "copyright", "prefix": "", "title": "Copyright", "label": "Copyright", "blocks": copyright_blocks})
        title, subtitle = document.metadata["title"].split(": ", 1)
        blurb = [
            "We make judgments every day—about people, information, opportunities and ourselves. Yet familiarity can feel like evidence, confidence can disguise uncertainty, and a convincing explanation can still be wrong.",
            "Before You Reach a Conclusion explores how beliefs take shape, how evidence can mislead, and how to think more carefully without becoming trapped in endless doubt.",
            "At its heart is the deliberate interval: knowing when to open a conclusion for examination, how to test it, and when to close the inquiry and act.",
        ]
        book = {
            "slug": SLUG, "title": title, "subtitle": subtitle, "author": document.metadata["author"],
            "series": "Think Sriram / Book 02", "description": blurb[1], "blurb": blurb,
            "backCoverTitle": "What if your first conclusion is not your best one?",
            "backCoverCredit": [document.metadata["author"], "thinksriram.com"],
            "pdf": PDF, "cover": {"width": cover.width, "height": cover.height}, "sections": sections,
        }
    copyfile(ROOT / PDF, ASSETS / PDF)
    (ROOT / "content" / "books" / f"{SLUG}.json").write_text(json.dumps(book, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
