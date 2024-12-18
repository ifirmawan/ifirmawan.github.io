import React from "react";
import Image from "next/image";

import SocialLink from "@/components/SocialLink";
import { socialItems } from "@/static/config";
import projects from "@/json/projects.json";
import Icons from "@/components/Icons";
import Link from "next/link";
import { ubuntu } from "@/fonts";

type Props = {
  children: React.ReactNode;
  projects: { id: number; name: string }[];
};

const DefaultTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-auto md:h-screen max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative overflow-y-hidden">
      <div className="w-full md:w-3/4 p-8 overflow-y-scroll">{children}</div>
      <aside
        className={`${ubuntu.className} w-full h-auto xl:h-screen space-y-12 md:w-1/4 pt-16 px-8 md:px-4 lg:px-6 border-l border-l-zinc-300 relative`}
      >
        <Link href={"/"}>
          <Image
            src="/images/avatar.jpg"
            alt="Avatar"
            className="w-36 md:w-48 lg:w-3/4 img-clip-pentagon"
            width={135}
            height={115}
          />
        </Link>
        <div className="space-y-3">
          <h3 className="font-bold">RECENT PROJECTS</h3>
          <ul className="marker:text-purple-600 space-y-2">
            {projects
              .sort((a, b) => Number(b.id) - Number(a.id))
              .map(({ is_private: isPrivate, ...p }) => (
                <li key={p.id} className="font-medium text-sm">
                  {isPrivate ? (
                    <div className="flex gap-2 items-center">
                      <Icons name="lock" />
                      <span>{p.name}</span>
                    </div>
                  ) : (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center text-purple-600"
                    >
                      <Icons name="globe-alt" />
                      <span className="hover:underline">{p.name}</span>
                    </a>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold">GET IN TOUCH</h3>
          <div className="flex gap-3">
            {socialItems.map((s, sx) => (
              <SocialLink key={sx} url={s.url} text={s.text} icon={s.icon} />
            ))}
          </div>
        </div>
        <div className="w-full pb-4 flex gap-1 text-xs opacity-35 relative xl:absolute xl:bottom-0 xl:left-8">
          <i>inspired by</i>
          <a
            href="https://dribbble.com/shots/13490584-Webflow?utm_source=Clipboard_Shot&utm_campaign=moynihan&utm_content=Webflow&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=moynihan&utm_content=Webflow&utm_medium=Social_Share"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Shaun Moynihan
          </a>
        </div>
      </aside>
    </div>
  );
};

export default DefaultTemplate;
