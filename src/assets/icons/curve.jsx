import * as React from "react";

const CurveIcon = (props) => {
  return (
    <svg
      width={411}
      height={288}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M-420 71c114.7-78.667 210.283-78.667 286.75 0 76.467 78.667 172.05 78.667 286.75 0C268.2-7.667 363.783-7.667 440.25 71c76.467 78.667 172.05 78.667 286.75 0"
          stroke="#32AEB6"
          strokeWidth={300}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={-508.84}
          y={-138}
          width={1324.68}
          height={426}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>

    //   <svg
    //   width={411}
    //   height={288}
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <g filter="url(#prefix__filter0_ddd)">
    //     <path
    //       d="M-420 71c114.7-78.667 210.283-78.667 286.75 0 76.467 78.667 172.05 78.667 286.75 0C268.2-7.667 363.783-7.667 440.25 71c76.467 78.667 172.05 78.667 286.75 0"
    //       stroke="#32AEB6"
    //       strokeWidth={300}
    //     />
    //   </g>
    //   <defs>
    //     <filter
    //       id="prefix__filter0_ddd"
    //       x={-508.84}
    //       y={-138}
    //       width={1324.68}
    //       height={426}
    //       filterUnits="userSpaceOnUse"
    //       colorInterpolationFilters="sRGB"
    //     >
    //       <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset dy={4} />
    //       <feGaussianBlur stdDeviation={2} />
    //       <feComposite in2="hardAlpha" operator="out" />
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
    //       <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset dy={4} />
    //       <feGaussianBlur stdDeviation={2} />
    //       <feComposite in2="hardAlpha" operator="out" />
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
    //       <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset dy={4} />
    //       <feGaussianBlur stdDeviation={2} />
    //       <feComposite in2="hardAlpha" operator="out" />
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
    //       <feBlend in2="effect2_dropShadow" result="effect3_dropShadow" />
    //       <feBlend in="SourceGraphic" in2="effect3_dropShadow" result="shape" />
    //     </filter>
    //   </defs>
    // </svg>
  );
};

export default CurveIcon;
