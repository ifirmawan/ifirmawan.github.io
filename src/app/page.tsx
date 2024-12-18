import { profile } from "@/static/config";

import React from "react";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full font-inter">
        <h1 className="w-10/12 font-bold text-4xl xl:text-5xl">
          {profile.title}
        </h1>
        <h2 className="text-xl xl:text-2xl mt-2 text-gray-600">
          {profile.subtitle}
        </h2>
      </div>
      <div className="w-full space-y-3 xl:space-y-4 mb-8">
        <strong className="font-extra-bold">Background</strong>
        <p className="leading-7">
          Hey there! I&apos;m Iwan Firmawan, a Full-stack Web Developer
          who&apos;s been in the game for{" "}
          <strong className="px-2 py-1 bg-yellow-300">over 6 years now</strong>.
          It all started with me geeking out over creating cool digital stuff,
          which eventually led me down the full-stack rabbit hole. I&apos;ve had
          my hands in all sorts of projects - from building online shops to
          setting up fancy monitoring systems and ERPs.
        </p>

        <p>
          Currently, I&apos;m actively involved in several{" "}
          <strong className="px-2 py-1 bg-yellow-300">
            exciting projects, which you can explore
          </strong>{" "}
          on the right side of this page. The clickable projects are open-source
          and available for public viewing, while the others are private
          endeavors. I&apos;m committed to keeping this list updated to reflect
          my current focus and position in the ever-evolving world of web
          development.
        </p>

        <p>
          I&apos;m always excited about new opportunities to collaborate and
          brainstorm ideas for innovative digital products. If you&apos;d like
          to discuss a project or just exchange ideas, feel free to reach out to
          me at{" "}
          <a href="mailto:{profile.email}" className="text-blue-500">
            {profile.email}
          </a>
          . Let&apos;s create something amazing together!
        </p>
      </div>
      <div>
        <a
          href="https://calendly.com/iwanfirmawan/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-4 bg-zinc-800 text-white font-semibold"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
};

export default Home;
