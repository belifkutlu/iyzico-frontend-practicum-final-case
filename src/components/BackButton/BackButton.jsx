import React from "react";
import BackIcon from "../../components/Icons/BackIcon";

import { StyledBackBtn } from "./BackButton.styled";

function BackButton({ onClick }) {
  return (
    <StyledBackBtn onClick={onClick}>
      <BackIcon />
    </StyledBackBtn>
  );
}

export default BackButton;
