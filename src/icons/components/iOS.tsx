import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg viewBox="0 0 196 196" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="50%" y2="100%">
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#E9E5E5" offset={1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y2="87.052%">
          <stop stopColor="#0339F1" offset={0} />
          <stop stopColor="#01ADE5" offset={1} />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1="14.011%"
          x2="73.603%"
          y1="9.535%"
          y2="75.34%"
        >
          <stop stopColor="#0756EE" offset={0} />
          <stop stopColor="#00A3F5" offset={0.374} />
          <stop stopColor="#18B5B6" offset={0.717} />
          <stop stopColor="#80DF43" offset={1} />
        </linearGradient>
        <linearGradient
          id="prefix__d"
          x1="13.017%"
          x2="86.649%"
          y1="3.073%"
          y2="90.776%"
        >
          <stop stopColor="#20BBA6" offset={0} />
          <stop stopColor="#9BEC23" offset={0.499} />
          <stop stopColor="#D9EF35" offset={1} />
        </linearGradient>
      </defs>
      <g fillRule="evenodd">
        <rect
          x={1}
          y={1}
          width={194}
          height={194}
          rx={45}
          fill="url(#prefix__a)"
          stroke="#D9D9D9"
        />
        <path
          d="M32.882 137.54h-4.563V76.561h4.563v60.979zm-2.347-75.927c-1.924 0-3.515-1.527-3.515-3.45a3.497 3.497 0 013.515-3.517c1.982 0 3.557 1.527 3.557 3.516 0 1.924-1.575 3.451-3.557 3.451z"
          fill="url(#prefix__b)"
        />
        <path
          d="M77.205 138.73c-22.313 0-36.409-16.248-36.409-42.076 0-25.699 14.161-42.011 36.409-42.011s36.401 16.313 36.401 42.011c0 25.829-14.096 42.076-36.401 42.076zm0-79.89c-19.422 0-31.821 14.664-31.821 37.813 0 23.166 12.456 37.887 31.821 37.887 19.422 0 31.821-14.721 31.821-37.887 0-23.157-12.399-37.813-31.821-37.813z"
          fill="url(#prefix__c)"
        />
        <path
          d="M146.1 138.73c-16.751 0-28.76-9.46-29.442-22.987h4.474c.682 11.092 11.1 18.854 25.309 18.854 13.868 0 23.547-7.876 23.547-18.513 0-8.558-5.773-13.479-19.471-16.93l-9.679-2.38c-15.11-3.856-21.972-9.97-21.972-20.21 0-12.74 11.895-21.914 26.787-21.914 15.395 0 26.892 9.061 27.404 21.063h-4.474c-.625-9.793-10.19-16.93-23.044-16.93-12.293 0-22.086 7.364-22.086 17.668 0 8.16 6 12.854 19.13 16.134l9.119 2.322c15.793 3.906 22.873 9.971 22.873 20.835 0 13.527-11.376 22.987-28.476 22.987z"
          fill="url(#prefix__d)"
        />
      </g>
    </svg>
  );
}