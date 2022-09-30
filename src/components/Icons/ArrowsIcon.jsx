import * as React from 'react';

const ArrowsIcon = (props) => (
  <svg
    width={22}
    height={13}
    fill="none"
    style={{ marginLeft: '10px' }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m13.65 1 7.15 5.5-7.15 5.5M1 1l7.15 5.5L1 12"
      stroke="#D6B055"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowsIcon;
