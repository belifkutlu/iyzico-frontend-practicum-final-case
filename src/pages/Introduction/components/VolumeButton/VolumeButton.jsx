import { useRef, useState } from "react";

import VolumeMuteIcon from "../../../../components/Icons/VolumeMuteIcon";
import VolumeUpIcon from "../../../../components/Icons/VolumeUpIcon";

import { VolumeWrapper } from "./VolumeButton.styled";

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
        autoPlay
        ref={audioRef}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/244725/MainTitle.ogg"
      ></audio>
    </>
  );
}

export default Volume;
