import React from "react";

interface CustomProps {
  className?: string,
  height?: number | string,
  width?: number | string,
  style?: React.CSSProperties,
}

export default ({ ...props }: CustomProps) => {
  return (
    <svg {...props}>
      
    </svg>
  );
}