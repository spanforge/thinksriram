import { bookPath, books } from '@/lib/books';
import { contentHref, type ContentItem } from '@/lib/content';

type Recommendation = { essay: string; reason: string } | { chapter: string; reason: string };
type ReadingPick = { slug: string; lead: string; next: Recommendation[] };

export const readingPath: ReadingPick[] = [
  {
    slug: 'why-talented-teams-underperform',
    lead: 'Follow the work between roles to see how communication, incentives, and judgment can make a team of capable people underperform.',
    next: [
      { essay: 'socrates-and-the-art-of-the-right-question', reason: 'Practise asking the question a team may have skipped.' },
      { chapter: 'chapter-6', reason: 'Use feedback loops and incentives to explain why a problem keeps returning.' },
    ],
  },
  {
    slug: 'socrates-and-the-art-of-the-right-question',
    lead: 'Try three questions that help you decide whether a convincing AI answer deserves your trust.',
    next: [
      { essay: 'aristotle-and-the-judgment-that-cannot-be-automated', reason: 'Consider what it takes to act well once you have asked the right question.' },
      { chapter: 'chapter-3', reason: 'Develop and test your own view before asking AI for help.' },
    ],
  },
  {
    slug: 'aristotle-and-the-judgment-that-cannot-be-automated',
    lead: 'Use Aristotle’s idea of practical wisdom to think through decisions where the data and the human context point in different directions.',
    next: [
      { essay: 'reverse-regret-test', reason: 'Try a short exercise for a decision whose outcome you cannot predict.' },
      { chapter: 'chapter-8', reason: 'See how practical judgment works when reasonable objectives conflict.' },
    ],
  },
  {
    slug: 'reverse-regret-test',
    lead: 'When you cannot know how a choice will turn out, ask which decision you would still respect if it went badly.',
    next: [
      { essay: 'the-slower-answer', reason: 'Give a difficult question enough time to become clearer.' },
      { chapter: 'chapter-7', reason: 'Compare scenarios and design a decision you can revise as you learn.' },
    ],
  },
  {
    slug: 'the-slower-answer',
    lead: 'A short reflection on giving a question your full attention before you reach for the quickest answer.',
    next: [
      { chapter: 'chapter-10', reason: 'Make reflection and deliberate learning a regular part of your week.' },
    ],
  },
];

export function readNext(pick: ReadingPick, articles: ContentItem[]) {
  return pick.next.flatMap(recommendation => {
    if ('essay' in recommendation) {
      const article = articles.find(item => item.slug === recommendation.essay);
      return article ? [{ title: article.title, href: contentHref(article), reason: recommendation.reason }] : [];
    }
    const book = books[0];
    const chapter = book?.sections.find(section => section.slug === recommendation.chapter);
    return chapter ? [{
      title: `${book.title}: ${chapter.title}`, href: bookPath(book, chapter.slug), reason: recommendation.reason,
    }] : [];
  });
}
