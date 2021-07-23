import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import WaveSurfer from "wavesurfer.js";
import {Button} from "@app/ui/button";

const formWaveSurferOptions = (ref: any) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "OrangeRed",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true
});

interface Waveform {
  url: string;
}

export const Waveform = ({ url }: Waveform) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);

/*  useEffect(() => {
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    return () => wavesurfer.current.destroy();
  }, [url]);*/

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <Button type='outline' play onClick={handlePlayPause}>{!playing ? "Слушать" : "Пауза"}</Button>
      </div>
    </div>
  );
}
