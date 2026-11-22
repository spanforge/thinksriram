"""Import the approved V5.0 PDF. Requires PyMuPDF 1.26.7."""

import json
import re
from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parents[1]
SLUG = "think-beyond-ai"
ASSETS = ROOT / "public" / "books" / SLUG
PDF = "Think_Beyond_AI_Commercial_Edition_V5.0.pdf"

# Physical PDF pages and top/bottom coordinates including the figure caption.
FIGURES = {
    6: [(67, 236)], 18: [(67, 246), (380, 544)], 20: [(287, 436)],
    36: [(244, 467)], 40: [(216, 420)], 47: [(222, 431)],
    57: [(349, 513)], 69: [(343, 577)],
}
# The PDF paints each table row as a filled rectangle without vertical rules.
TABLE_COLUMNS = {
    11: [[51, 134, 249, 381]], 17: [[51, 134, 249, 381]],
    46: [[51, 134, 249, 381]], 51: [[51, 134, 249, 381]],
    52: [[51, 134, 249, 381]], 71: [[51, 295, 381]],
    78: [[51, 150, 381], [51, 114, 166, 226, 381]],
    79: [[51, 114, 166, 226, 381]], 86: [[51, 134, 249, 381]],
}


def join_lines(lines):
    result = ""
    for line in lines:
        separator = "" if not result or result.endswith(("-", "/")) else " "
        result += separator + line.strip()
    return result


def text_lines(block):
    return ["".join(span["text"] for span in line["spans"]) for line in block["lines"]]


def text_blocks(page):
    return page.get_text("dict", flags=fitz.TEXTFLAGS_DICT & ~fitz.TEXT_PRESERVE_IMAGES)["blocks"]


def inline_runs(block, links):
    runs = []
    for index, line in enumerate(block["lines"]):
        if index and runs and not runs[-1]["text"].endswith(("-", "/")):
            runs[-1]["text"] += " "
        for span in line["spans"]:
            text = span["text"]
            if not text:
                continue
            style = {}
            font = span["font"]
            if "Bold" in font:
                style["bold"] = True
            if "Italic" in font:
                style["italic"] = True
            if "NotoSerif" in font and span["flags"] & 1:
                style["sup"] = True
            area = fitz.Rect(span["bbox"])
            for link in links:
                if area.get_area() and (area & link["from"]).get_area() / area.get_area() > .6:
                    style["href"] = link["uri"]
                    break
            if runs and {k: v for k, v in runs[-1].items() if k != "text"} == style:
                runs[-1]["text"] += text
            else:
                runs.append({"text": text, **style})
    return runs


def table_blocks(page, columns):
    row_groups = []
    for drawing in page.get_drawings():
        rect = drawing["rect"]
        if drawing["type"] != "f" or abs(rect.width - 330) > .1:
            continue
        if not row_groups or abs(row_groups[-1][-1].y1 - rect.y0) > .1:
            row_groups.append([])
        row_groups[-1].append(rect)
    assert len(row_groups) == len(columns), page.number + 1
    for rows, edges in zip(row_groups, columns):
        cells = []
        for row in rows:
            cells.append([
                join_lines(page.get_text(clip=fitz.Rect(left, row.y0, right, row.y1)).splitlines())
                for left, right in zip(edges, edges[1:])
            ])
        assert all(cell for cell in cells[0]), (page.number + 1, cells)
        yield rows[0].y0, rows[-1].y1, {"type": "table", "rows": cells}


def page_content(page, ignore_heading=False):
    number = page.number + 1
    special = list(table_blocks(page, TABLE_COLUMNS[number])) if number in TABLE_COLUMNS else []
    raw_blocks = text_blocks(page)
    for index, (top, bottom) in enumerate(FIGURES.get(number, []), 1):
        source = f"diagram-{number}-{index}.png"
        figure_blocks = [block for block in raw_blocks if top <= block["bbox"][1] < bottom]
        caption_top = figure_blocks[-1]["bbox"][1]
        clip = fitz.Rect(48, top, page.rect.width - 48, caption_top - 2)
        picture = page.get_pixmap(matrix=fitz.Matrix(3, 3), clip=clip, alpha=False)
        picture.save(ASSETS / source)
        transcript = [join_lines(text_lines(block)) for block in figure_blocks]
        special.append((top, bottom, {
            "type": "figure", "src": source, "width": picture.width,
            "height": picture.height, "caption": transcript[-1],
            "description": transcript[:-1],
        }))

    links = [link for link in page.get_links() if link.get("uri", "").startswith(("https://", "http://"))]
    positioned = [(top, block) for top, _, block in special]
    for raw in raw_blocks:
        _, top, _, bottom = raw["bbox"]
        if top < 33 or bottom > 612 or any(start <= top < end for start, end, _ in special):
            continue
        first = raw["lines"][0]["spans"][0]
        size = round(first["size"])
        font = first["font"]
        if ignore_heading and (size == 24 or (size == 10 and font == "Lato-Bold")):
            continue
        text = join_lines(text_lines(raw))
        runs = inline_runs(raw, links)
        block_type = "p"
        if font == "Lato-Bold" and size >= 12:
            block_type = "h3" if re.match(r"DAY \d+ /", text) else "h2"
        elif text.startswith("•"):
            block_type = "ul"
        elif re.match(r"\d+\.\s", text):
            block_type = "ol"
        elif text.startswith("Reflection:") and number not in range(72, 78):
            block_type = "quote"
        block = {"type": block_type, "runs": runs}
        if block_type in ("ol", "ul"):
            marker = re.match(r"^(•|\d+\.)\s*", runs[0]["text"])
            if marker:
                runs[0]["text"] = runs[0]["text"][marker.end():]
                if block_type == "ol":
                    block["number"] = int(marker[1][:-1])
        positioned.append((top, block))
    return [block for _, block in sorted(positioned, key=lambda item: item[0])]


def plain(block):
    return "".join(run["text"] for run in block.get("runs", []))


def section_content(document, start, end, join_pages=True):
    blocks = []
    for index in range(start - 1, end - 1):
        current = page_content(document[index], index == start - 1)
        if join_pages and blocks and current and current[0]["type"] == "p" and blocks[-1]["type"] in ("p", "ul", "ol"):
            before, after = plain(blocks[-1]), plain(current[0])
            if before and after and not re.search(r'[.!?:…][”"’\')\]]*\s*$', before):
                if not before.endswith("-"):
                    blocks[-1]["runs"][-1]["text"] += " "
                blocks[-1]["runs"].extend(current.pop(0)["runs"])
        blocks.extend(current)
    return blocks


def route(label):
    match = re.match(r"^(Chapter \d+|Part [IV]+|Introduction|Conclusion) — (.+)$", label)
    if match:
        prefix, title = match.groups()
        return prefix.lower().replace(" ", "-"), prefix, title
    slugs = {
        "The 30-Day Human Advantage Challenge": "30-day-challenge",
        "References and further reading": "references",
        "About the author": "about-the-author",
    }
    return slugs[label], "", label


def main():
    ASSETS.mkdir(parents=True, exist_ok=True)
    document = fitz.open(ROOT / PDF)
    cover = document[0].get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    cover.save(ASSETS / "cover.png")
    outline = [(name, page) for _, name, page in document.get_toc()]
    sections = []
    for (label, start), (_, end) in zip(outline, outline[1:] + [("", 88)]):
        slug, prefix, title = route(label)
        blocks = [] if slug.startswith("part-") else section_content(
            document, start, end, join_pages=slug != "references",
        )
        if slug in ("chapter-8", "30-day-challenge"):
            for index in range(len(blocks) - 1, 0, -1):
                previous, current = blocks[index - 1:index + 1]
                if previous["type"] == current["type"] == "table" and previous["rows"][0] == current["rows"][0]:
                    previous["rows"].extend(current["rows"][1:])
                    blocks.pop(index)
        sections.append({"slug": slug, "label": label, "prefix": prefix, "title": title, "blocks": blocks})
    sections.append({
        "slug": "copyright", "label": "Copyright", "prefix": "", "title": "Copyright",
        "blocks": page_content(document[2])[1:],
    })
    references = next(section for section in sections if section["slug"] == "references")
    bibliography = False
    for block in references["blocks"]:
        if block["type"] == "h2":
            bibliography = plain(block) == "Bibliography"
        elif bibliography and block["type"] == "p":
            block["id"] = f"source-{references['blocks'].index(block)}"
    back_cover = page_content(document[87])
    blurb = [" ".join(plain(block) for block in back_cover[start:end])
             for start, end in [(2, 4), (4, 10), (10, 12)]]
    book = {
        "slug": SLUG, "title": "Think Beyond AI", "subtitle": "Developing Your Human Advantage",
        "author": "Sriram Srinivasan", "series": "Think Sriram Short Reads / Book 01",
        "description": blurb[1], "blurb": blurb,
        "backCoverTitle": plain(back_cover[1]), "backCoverCredit": [plain(block) for block in back_cover[12:]],
        "pdf": PDF, "cover": {"width": cover.width, "height": cover.height},
        "sections": sections,
    }
    target = ROOT / "content" / "books" / f"{SLUG}.json"
    target.write_text(json.dumps(book, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
