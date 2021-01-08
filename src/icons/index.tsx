import React from "react";
import Windows from "./components/Windows";
import Android from "./components/Android";
import Fedora from "./components/Fedora";
import Debian from "./components/Debian";
import Linux from "./components/Linux";
import Mac_OS from "./components/Mac OS";
import Nintendo from "./components/Nintendo";
import PlayStation from "./components/PlayStation";
import BlackBerry from "./components/BlackBerry";
import Ubuntu from "./components/Ubuntu";
import Unix from "./components/Unix";
import Arch from "./components/Arch";
import iOS from "./components/iOS";

const lastVersion = {
  "Windows": Windows,
  "Android": Android,
  "Fedora": Fedora,
  "Debian": Debian,
  "Linux": Linux,
  "Mac OS": Mac_OS,
  "Nintendo": Nintendo,
  "PlayStation": PlayStation,
  "BlackBerry": BlackBerry,
  "Ubuntu": Ubuntu,
  "Unix": Unix,
  "Arch": Arch,
  "iOS": iOS,
}

export const OSList = ["Windows", "Android", "Fedora", "Debian", "Linux", "Mac OS", "Nintendo", "PlayStation", "BlackBerry", "Ubuntu", "Unix", "Arch", "iOS"]
export type OS = keyof typeof lastVersion

type getBrowser = {
  os: OS,
  className?: string,
  style?: React.CSSProperties,
  size: number | string
}
export const getOSIcon = ({ os, className, style, size }: getBrowser) => {
  const Component = lastVersion[os]

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