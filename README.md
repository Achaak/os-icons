# react-os-icons
Tools to get os svg.

## Install

```sh
yarn add react-os-icons
# or
npm i react-os-icons --save
```

## Change log
[https://github.com/Achaak/react-os-icons/blob/master/CHANGELOG.md](https://github.com/Achaak/react-os-icons/blob/master/CHANGELOG.md)

## Functions
### getOSIcon
Return the SVG of os.

Example:
``` js
const Component = getOSIcon({ os: "Windows", className: "class", style: { marginTop: 42 }, size: 42 })
```

## Variables
### OSList
Return the managed list of os.

Example:
``` js
console.log(OSList) // "Windows" | "Android" | "Fedora" | "Debian" | "Linux" | "Mac OS" | "Nintendo" | "PlayStation" | "BlackBerry" | "Ubuntu" | "Unix" | "Arch" | "iOS" | "Linux Mint" | "Elementary OS"
```
