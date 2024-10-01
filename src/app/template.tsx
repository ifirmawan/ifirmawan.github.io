import React from "react";
import Image from "next/image";

import SocialLink from "@/components/SocialLink";
import { socialItems } from "@/static/config";
import projects from "@/json/projects.json";
import Icons from "@/components/Icons";

type Props = {
  children: React.ReactNode;
  projects: { id: number; name: string }[];
};

const DefaultTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full max-w-6xl justify-between lg:flex gap-6 lg:gap-12">
      <div className="w-full lg:w-3/4">{children}</div>
      <aside className="w-full space-y-12 lg:w-1/4 py-16">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar"
          className="w-36 md:w-48 lg:w-3/4 img-clip-pentagon"
          width={135}
          height={115}
        />
        <div className="space-y-3">
          <h3 className="font-bold">RECENT PROJECTS</h3>
          <ul className="marker:text-purple-600 space-y-2">
            {projects
              .sort((a, b) => b.id - a.id)
              .map(({ is_private: isPrivate, ...p }) => (
                <li key={p.id} className="font-mono font-medium text-sm">
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
                      <span className="hover:underline">
                        {p.name}
                      </span>
                    </a>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex gap-3">
          {socialItems.map((s, sx) => (
            <SocialLink key={sx} url={s.url} text={s.text} icon={s.icon} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default DefaultTemplate;
