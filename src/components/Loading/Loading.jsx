import React from "react";

import gif from "../../assests/2-unscreen.gif";

import { LoadingGif, LoadWrapper } from "./Loading.styled";

const Loading = () => {
  return (
    <LoadWrapper>
      <LoadingGif src={gif} />
    </LoadWrapper>
  );
};

export default Loading;
