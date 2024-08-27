import React from "react";
import { iconList, IconProps } from "@/static/config";

const Icons: React.FC<IconProps> = ({ name }) => {
  return iconList?.[name] ? iconList[name]() : null;
};

export default Icons;
