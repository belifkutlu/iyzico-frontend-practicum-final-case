import * as React from "react";

const VolumeUpIcon = (props) => (
  <svg
    width={76}
    height={76}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={38} cy={38} r={26} fill="#F7C25D" />
    </g>
    <g filter="url(#b)">
      <path
        d="M37.029 28.242V47.09c0 .254-.07.503-.2.718a1.32 1.32 0 0 1-.54.497 1.27 1.27 0 0 1-1.382-.162l-6.17-5.092h-2.153a3.862 3.862 0 0 1-2.769-1.184 4.109 4.109 0 0 1-1.148-2.855V36.32a4.109 4.109 0 0 1 1.148-2.855 3.862 3.862 0 0 1 2.769-1.184h2.153l6.17-5.091a1.272 1.272 0 0 1 1.381-.162c.222.109.409.281.54.496.13.215.2.463.2.717Zm3.311 5.723c-.126.12-.228.264-.3.424a1.38 1.38 0 0 0 .227 1.478c.436.492.678 1.133.678 1.799 0 .666-.242 1.307-.678 1.799a1.385 1.385 0 0 0-.228 1.478c.072.16.174.305.3.425a1.3 1.3 0 0 0 .938.358c.17-.007.34-.048.495-.122.156-.074.296-.18.413-.31a5.45 5.45 0 0 0 1.371-3.626c0-1.344-.49-2.638-1.371-3.627a1.29 1.29 0 0 0-.907-.432 1.283 1.283 0 0 0-.938.355Zm5.522-3.754a1.287 1.287 0 0 0-.915-.414 1.284 1.284 0 0 0-.931.375c-.25.247-.394.586-.401.943-.008.357.123.702.363.96a8.188 8.188 0 0 1 2.189 5.591c0 2.086-.785 4.09-2.189 5.592a1.354 1.354 0 0 0-.363.96 1.38 1.38 0 0 0 .4.943c.125.123.27.219.43.283a1.27 1.27 0 0 0 1.417-.322c1.87-2.002 2.916-4.675 2.916-7.456 0-2.78-1.045-5.453-2.916-7.455Zm3.694-3.825a1.286 1.286 0 0 0-.913-.386c-.342 0-.67.137-.914.383-.245.245-.386.58-.394.932-.008.352.118.694.351.951 2.375 2.517 3.703 5.89 3.703 9.4 0 3.512-1.328 6.885-3.703 9.401-.233.258-.36.599-.351.95.008.353.15.688.394.934.244.246.572.383.914.382.341 0 .67-.139.913-.386C52.406 45.927 54 41.88 54 37.667c0-4.214-1.594-8.261-4.444-11.28Z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={76}
        height={76}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
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
          result="effect1_dropShadow_99_754"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.841667 0 0 0 0 0.841667 0 0 0 0 0.841667 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_99_754" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_99_754"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        x={18.667}
        y={26}
        width={39.333}
        height={31.333}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_99_754" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_99_754"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default VolumeUpIcon;
