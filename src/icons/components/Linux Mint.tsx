import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Linux Mint"
      viewBox="0 0 512 512"
      {...props}
    >
      <filter id="prefix__b">
        <feGaussianBlur stdDeviation={3} />
      </filter>
      <linearGradient id="prefix__c">
        <stop stopColor="#c7f994" offset={0} />
        <stop stopColor="#87cf3e" offset={1} />
      </linearGradient>
      <use href="#prefix__a" filter="url(#prefix__b)" opacity={0.5} />
      <g fill="#fff">
        <path
          id="prefix__a"
          d="M59.6 97.5v100h40v101a121 121 0 00120 120h198v-201a121 121 0 00-120-120z"
        />
      </g>
      <path
        fill="url(#prefix__c)"
        d="M83.6 122.2v51.3h13.3a25 25 0 0124 24v94.9c-.3 55.9 46.7 101.4 101.5 101.5H365c13.9-.1 25-11.4 25-25V224c.3-56-46.7-101.5-101.6-101.7H83.6z"
      />
      <path
        d="M83.6 122.2v51.3h13.3a25 25 0 0124 24v94.9c-.3 55.9 46.7 101.4 101.5 101.5H365c13.9-.1 25-11.4 25-25V224c.3-56-46.7-101.5-101.6-101.7H83.6z"
        opacity={0.1}
        filter="url(#prefix__b)"
      />
      <g fill="none" stroke="#fff" strokeWidth={32}>
        <path d="M160 144v160a48 48 0 0048 48h32m112-48v-80a32 32 0 00-64 0v80m0-80a32 32 0 00-64 0v80" />
        <path d="M240 352h64a48 48 0 0048-48" opacity={0.5} />
      </g>
    </svg>
  );
}