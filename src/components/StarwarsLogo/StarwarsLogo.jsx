import React from 'react';

import { Logo } from './StarwarsLogo.styled';
import logo from '../../assests/images/StarwarsLogo.png';

function StarwarsLogo(props) {
  return <Logo src={logo} {...props} />;
}

export default StarwarsLogo;
