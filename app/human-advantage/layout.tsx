import { HumanAdvantageNavigation } from '@/components/HumanAdvantageNavigation';
import { humanAdvantagePath, projectLibraryPath } from '@/lib/human-advantage';
import { episodes, videos } from '@/lib/human-advantage-media';
import './project.css';

export default function HumanAdvantageLayout({ children }: { children: React.ReactNode }) {
  const destinations: [string, string][] = [
    ['Overview', humanAdvantagePath], ['Books', projectLibraryPath], ['Resources', humanAdvantagePath + '/resources'],
    ['Capabilities', humanAdvantagePath + '/capabilities'],
  ];
  if (episodes().length) destinations.push(['Podcasts', humanAdvantagePath + '/podcasts']);
  if (videos().length) destinations.push(['Videos', humanAdvantagePath + '/videos']);
  return <div className="shell ha-project">
    <HumanAdvantageNavigation destinations={destinations} />
    {children}
  </div>;
}
