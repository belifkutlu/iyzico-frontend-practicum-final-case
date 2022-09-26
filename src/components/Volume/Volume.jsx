import { useRef, useState, useEffect } from "react";

import VolumeMuteIcon from "../Icons/VolumeMuteIcon";
import VolumeUpIcon from "../Icons/VolumeUpIcon";

import { VolumeWrapper } from "./Volume.styled";

function Volume() {
  const [volume, setVolume] = useState(false);
  const audioRef = useRef();

  return (
    <>
      <VolumeWrapper
        onClick={() => {
          console.log(audioRef.current);
          if (!volume) {
            audioRef.current.play();
          } else {
            audioRef.current.pause();
          }
          setVolume(!volume);
        }}
      >
        {volume ? <VolumeUpIcon /> : <VolumeMuteIcon />}
      </VolumeWrapper>
      <audio
        ref={audioRef}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/244725/MainTitle.ogg"
      ></audio>
    </>
  );
}

export default Volume;
