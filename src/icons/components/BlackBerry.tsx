import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <rect width={512} height={512} rx={76.8} fill="#fff" />
      <path d="M178.24 159.11c0-13.71-8.39-31.06-43.67-31.06H80.25l-15.44 71.44h56.63c44.21 0 56.8-20.93 56.8-40.38zm146.32 0c0-13.71-8.38-31.06-43.64-31.06h-54.33l-15.43 71.43h56.6c44.24.01 56.8-20.92 56.8-40.37zM158.64 266.62c0-13.7-8.39-31.1-43.66-31.1H60.66L45.22 307h56.6c44.18 0 56.82-21 56.82-40.38zm146.36 0c0-13.7-8.4-31.1-43.65-31.1H207L191.53 307h56.63c44.23 0 56.84-21 56.84-40.38zM458 223c0-13.72-8.4-31.1-43.64-31.1h-54.28l-15.46 71.47h56.6c44.23.02 56.78-20.91 56.78-40.37zm-21.06 112c0-13.72-8.38-31.06-43.64-31.06H339l-15.44 71.44h56.6c44.2-.04 56.78-21.02 56.78-40.38zm-153.01 43.57c0-13.77-8.37-31.15-43.61-31.15H186l-15.44 71.47h56.6c44.21.01 56.77-20.89 56.77-40.32z" />
    </svg>
  );
}