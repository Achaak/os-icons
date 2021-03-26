import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={87.583}
          y1={157.269}
          x2={87.583}
          y2={331.338}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0339f1" />
          <stop offset={1} stopColor="#01ade5" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={-376.44}
          y1={764.54}
          x2={-375.01}
          y2={762.95}
          gradientTransform="matrix(72.81 0 0 -84.09 27544.03 64462.55)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0756ee" />
          <stop offset={0.37} stopColor="#00a3f5" />
          <stop offset={0.72} stopColor="#18b5b6" />
          <stop offset={1} stopColor="#80df43" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1={-373.05}
          y1={764.67}
          x2={-371.28}
          y2={762.55}
          gradientTransform="matrix(57.92 0 0 -84.08 21915.75 64457.24)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#20bba6" />
          <stop offset={0.5} stopColor="#9bec23" />
          <stop offset={1} stopColor="#d9ef35" />
        </linearGradient>
      </defs>
      <rect width={512} height={512} rx={76.8} fill="#fff" />
      <g fillRule="evenodd">
        <path
          d="M92.48 354.37h-11V207.54h11zm-5.65-182.82a8.39 8.39 0 118.56-8.31 8.38 8.38 0 01-8.56 8.31z"
          fill="url(#prefix__a)"
        />
        <path
          d="M199.2 357.23c-53.73 0-87.67-39.12-87.67-101.31 0-61.88 34.1-101.15 87.67-101.15s87.64 39.28 87.64 101.15c0 62.19-33.94 101.31-87.64 101.31zm0-192.36c-46.77 0-76.62 35.31-76.62 91s30 91.22 76.62 91.22 76.61-35.44 76.61-91.22-29.85-91-76.61-91z"
          fill="url(#prefix__b)"
        />
        <path
          d="M365.08 357.23c-40.33 0-69.25-22.78-70.89-55.35H305c1.64 26.71 26.73 45.4 60.94 45.4 33.39 0 56.7-19 56.7-44.58 0-20.6-13.91-32.45-46.89-40.76l-23.3-5.73c-36.38-9.28-52.9-24-52.9-48.66 0-30.67 28.64-52.76 64.49-52.76 37.07 0 64.75 21.81 66 50.71h-10.83c-1.5-23.58-24.53-40.76-55.48-40.76-29.6 0-53.18 17.73-53.18 42.54 0 19.65 14.45 30.95 46.06 38.84l22 5.6c38 9.4 55.07 24 55.07 50.16 0 32.57-27.39 55.35-68.56 55.35z"
          fill="url(#prefix__c)"
        />
      </g>
    </svg>
  );
}