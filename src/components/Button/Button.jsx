import React from 'react';

import { StyledBackBtn } from './Button.styled';

function Button({ onClick, children, ...props }) {
  return (
    <StyledBackBtn onClick={onClick} {...props}>
      {children}
    </StyledBackBtn>
  );
}

export default Button;
