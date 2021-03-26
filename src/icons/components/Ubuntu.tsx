import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ubuntu"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#e65e17" />
      <circle
        cx={265}
        cy={256}
        r={124}
        fill="none"
        stroke="#fff"
        strokeWidth={51}
      />
      <g fill="#fff" stroke="#e65e17" strokeWidth={10}>
        <circle cx={90} cy={257} r={41} />
        <circle cx={353} cy={409} r={41} />
        <circle cx={353} cy={104} r={41} />
        <path strokeWidth={19} d="M185 118l82 138m0 0h155-155l-84 140" />
      </g>
    </svg>
  );
}