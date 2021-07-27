import { useEffect, useRef, useState } from "react";
import { ButtonAnimationPause, ButtonAnimationPlay } from '@app/ui/button_animation';

import style from './audiowave.module.scss'

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#0178FF",
  cursorColor: "transparent",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true
});

interface AudioWaveProps {
  url?: string;
}

export const AudioWave = ({ url }: AudioWaveProps) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
      <div>
        <div id="waveform" ref={waveformRef} />
        <div className={style.button}>
          {!playing ?
              <ButtonAnimationPause onClick={handlePlayPause}>Слушать</ButtonAnimationPause> :
              <ButtonAnimationPlay onClick={handlePlayPause}>Пауза</ButtonAnimationPlay>
          }
        </div>
      </div>
  );
}
