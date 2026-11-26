'use client';

import { useRef, useState } from 'react';

export function ProjectAudio({ url }: { url: string }) {
  const player = useRef<HTMLAudioElement>(null);
  return <>
    <audio ref={player} controls preload="none" src={url} />
    <p><label>Playback speed <select defaultValue="1" onChange={event => {
      if (player.current) player.current.playbackRate = Number(event.target.value);
    }}>
      {[0.75, 1, 1.25, 1.5, 2].map(rate => <option key={rate} value={rate}>{rate}×</option>)}
    </select></label></p>
    <p><a href={url}>Open audio directly</a></p>
  </>;
}

export function ProjectVideoPlayer({ id, title }: { id: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  return <>
    {loaded ? <iframe className="ha-video" title={title}
      src={`https://www.youtube-nocookie.com/embed/${id}`} allowFullScreen />
      : <><p>Loading the player connects to YouTube.</p>
        <button className="brand-button" onClick={() => setLoaded(true)}>Load YouTube player</button></>}
    <p><a href={`https://www.youtube.com/watch?v=${id}`}>Watch on YouTube</a></p>
  </>;
}
