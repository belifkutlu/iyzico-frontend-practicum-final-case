import React from "react";

import { StyledBackBtn } from "./Button.styled";

function Button({ onClick, children }) {
  return <StyledBackBtn onClick={onClick}>{children}</StyledBackBtn>;
}

export default Button;
