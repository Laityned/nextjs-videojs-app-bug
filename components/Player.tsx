'use client'

import 'video.js/dist/video-js.css';
import videojs from "video.js";
import { useEffect, useRef } from "react";


interface PlayerProps {
  muted: boolean;
  autoplay: boolean;
  controls: boolean;
  sources: {
    src: string;
    type: string;
  }[];
}

/**
 * A simple video player component for displaying videos from external websites.
 * @returns A Video.js video player element.
 */
export default function Player(props: PlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const player = videojs(ref.current, props);

    return () => {
      player.dispose();
    };
  }, [props, ref]);

  return (
    <>
      <h1>The implementation below is using react functions</h1>
      <div data-vjs-player>
        <video ref={ref} className="video-js" playsInline />
      </div>
    </>
  );
};
