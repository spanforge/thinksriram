import settings from '@/content/site.json';
import shelf from '@/content/reading.json';
import { ContentItem } from './content';
export const site = settings;
export const topics = [
 {slug:'careers',label:'Careers',description:'The choices that shape a working life. I’m interested in what makes a path meaningful, beyond its milestones.'},
 {slug:'ai-and-people',label:'AI & people',description:'What changes when machines become more capable? I keep returning to the human questions: judgment, responsibility and trust.'},
 {slug:'education-and-learning',label:'Education & learning',description:'How we learn, unlearn and help others grow. Questions matter to me as much as answers.'},
 {slug:'professional-life',label:'Professional life',description:'Working with people, making decisions and finding perspective in the everyday experience of work.'},
 {slug:'other-reflections',label:'Other reflections',description:'Books, philosophy and the questions beyond work that don’t fit neatly on a shelf.'}
];
export function topicFor(item:ContentItem) { return topics.find(t=>t.slug===item.topic) || topics.find(t=>t.slug===(item.themes.includes('ai')?'ai-and-people':item.slug.includes('socrates')?'education-and-learning':item.slug.includes('judgment')?'professional-life':'other-reflections'))!; }
export type ReadingItem={id:string;title:string;creator:string;type:string;source_url:string;personal_note:string;status:string;current?:boolean};
export const reading=(shelf.items as ReadingItem[]).filter(i=>i.status==='published' && i.personal_note.trim() && /^https?:\/\//.test(i.source_url));
export const base='https://thinksriram.com';
