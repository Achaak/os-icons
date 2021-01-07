import { OS } from "../types";
import React from "react";
import Windows_10 from "./Windows_10";

const svg = {
  windows: Windows_10,
}

type getBrowser = {
  os: OS,
  className?: string,
  style?: React.CSSProperties,
  size: number | string
}
export const getBrowserIcon = ({ os, className, style, size }: getBrowser) => {
  const Component = svg[os]

  return (
    <Component
      className={className}
      style={{
        ...style,
        minWidth: size,
        minHeight: size
      }}
      height={size}
      width={size}
    />
  );
}