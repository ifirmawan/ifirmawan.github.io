import React from "react";
import Icons from "./Icons";
import { IconKey } from "@/static/config";

const SocialLink: React.FC<{
  url: string;
  text: string;
  icon: IconKey;
}> = ({ url, text, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-500"
    >
      <span className="sr-only">{text}</span>
      <Icons name={icon} />
    </a>
  );
};

export default SocialLink;
