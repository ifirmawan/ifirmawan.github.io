import { profile } from "@/static/config";
import Image from "next/image";

import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="pt-8 space-y-14">
        <div className="font-inter">
          <h1 className="w-10/12 font-bold text-5xl">{profile.title}</h1>
          <h2 className="text-2xl mt-2 text-gray-600">{profile.subtitle}</h2>
        </div>
        <div className="w-full text-sm space-y-6">
          <strong className="font-extra-bold">Background</strong>
          <p className="font-mono">
            Hey there! I&apos;m Iwan Firmawan, a Full-stack Web Developer who&apos;s been in the game for
            over 5 years now. It all started with me geeking out over creating cool digital stuff,
            which eventually led me down the full-stack rabbit hole. I&apos;ve had my hands in all sorts
            of projects - from building online shops to setting up fancy monitoring systems and ERPs.
            My tech toolbox? It&apos;s pretty packed: Python (Django & FastAPI), PHP (Laravel/Lumen, Yii, CI),
            and I&apos;m no stranger to databases like MySQL, PostgreSQL, MongoDB, and Redis for when things
            need to go fast. VSCode is my coding buddy, Docker keeps my containers ship-shape, and Figma
            helps me make things look pretty. Throughout my career, I&apos;ve been all about crafting web
            solutions that are both slick and user-friendly. And you know what? I&apos;m always pumped to
            learn new tech tricks and use them to whip up some digital magic!
          </p>

          <p className="font-mono">
            Currently, I&apos;m actively involved in several exciting projects, which you can
            explore on the right side of this page. The clickable projects are open-source
            and available for public viewing, while the others are private endeavors. I&apos;m
            committed to keeping this list updated to reflect my current focus and position
            in the ever-evolving world of web development.
          </p>

          <p className="font-mono">
            I&apos;m always excited about new opportunities to collaborate and brainstorm ideas
            for innovative digital products. If you&apos;d like to discuss a project or just
            exchange ideas, feel free to reach out to me at <a href="mailto:{profile.email}" className="text-blue-500">{profile.email}</a>. Let&apos;s
            create something amazing together!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
