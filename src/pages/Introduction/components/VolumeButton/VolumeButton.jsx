import { useRef, useState, useEffect } from "react";

import VolumeMuteIcon from "../../../../components/Icons/VolumeMuteIcon";
import VolumeUpIcon from "../../../../components/Icons/VolumeUpIcon";
import audio from "../../../../assests/audio/starwars.ogg";

import { VolumeWrapper } from "./VolumeButton.styled";

function Volume() {
  const [volume, setVolume] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <>
      <VolumeWrapper
        onClick={() => {
          if (!volume) {
            audioRef.current.muted = false;
          } else {
            audioRef.current.muted = true;
          }
          setVolume(!volume);
        }}
      >
        {volume ? <VolumeUpIcon /> : <VolumeMuteIcon />}
      </VolumeWrapper>
      <video
        style={{ display: "none" }}
        loop
        ref={audioRef}
        autoPlay
        muted
        src={audio}
      ></video>
    </>
  );
}

export default Volume;
