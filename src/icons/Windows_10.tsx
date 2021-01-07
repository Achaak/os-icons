import React from "react";

interface CustomProps {
  className?: string,
  height?: number | string,
  width?: number | string,
  style?: React.CSSProperties,
}

export default ({ ...props }: CustomProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 87.6" {...props}>
      <path
        d="M0 12.5l35.7-4.9v34.5H0M40 6.9L87.3 0v41.8H40M0 45.74h35.7v34.6l-35.7-5M40 46.2h47.3v41.4L40 80.9"
        fill="#0078d6"
        data-name="Calque 1"
      />
    </svg>
  );
}