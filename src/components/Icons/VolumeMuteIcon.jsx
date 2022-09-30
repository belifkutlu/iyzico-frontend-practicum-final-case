import * as React from 'react';

const VolumeMuteIcon = (props) => (
  <svg width={76} height={76} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#a)">
      <circle cx={38} cy={38} r={26} fill="#F7C25D" />
    </g>
    <g filter="url(#b)" fill="#fff">
      <path d="m47.733 36.619 4.268 4.267-1.707 1.707-4.267-4.268-4.268 4.268-1.706-1.707 4.267-4.267-4.267-4.268 1.706-1.706 4.268 4.267 4.267-4.267 1.707 1.706-4.268 4.268ZM36.664 28.705v18.328a1.31 1.31 0 0 1-2.128 1.023l-6.187-4.95h-2.158a3.932 3.932 0 0 1-3.928-3.928V36.56a3.932 3.932 0 0 1 3.928-3.928h2.159l6.186-4.95a1.31 1.31 0 0 1 2.127 1.023h.001Z" />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={76}
        height={76}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={4}
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_99_755"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.841667 0 0 0 0 0.841667 0 0 0 0 0.841667 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_99_755" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_99_755" result="shape" />
      </filter>
      <filter
        id="b"
        x={18.263}
        y={27.395}
        width={37.737}
        height={28.948}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_99_755" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_99_755" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default VolumeMuteIcon;
