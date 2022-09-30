import React from 'react';

import { ContainerWrapper } from './Container.styled';

function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

export default Container;
