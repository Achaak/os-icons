import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Android"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#fff" />
      <g stroke="#a4c639" strokeLinecap="round">
        <path
          strokeWidth={58}
          d="M107 212v106m299-106v106m-107 66v56m-85-56v56"
        />
        <path strokeWidth={8} d="M203 88l-17-32m123 32l18-32" />
      </g>
      <path
        fill="#a4c639"
        d="M257 76c-76 0-115 60-115 105h229c0-47-42-104-114-105zM142 191v164c0 16 13 29 28 29h172c16 0 29-13 29-29V191z"
      />
      <g fill="#fff">
        <circle cx={204} cy={130} r={9} />
        <circle cx={309} cy={130} r={9} />
      </g>
    </svg>
  );
}