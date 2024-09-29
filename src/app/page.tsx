import Image from "next/image";

import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="pt-8 space-y-14">
        <div className="font-inter">
          <h1 className="w-10/12 font-bold text-5xl">Full-stack Web Developer from Purbalingga, ID</h1>
          <h2 className="text-2xl mt-2 text-gray-600">Enabling efficient and user-friendly web solutions</h2>
        </div>
        <div className="w-full text-sm space-y-6">
          <strong className="font-extra-bold">Background</strong>
          <p className="font-mono">
            I&apos;m Iwan Firmawan, a Full-stack Web Developer with over 5 years of experience
            in the software development field. My journey began with a passion for creating
            digital solutions, which led me to specialize in full-stack development. I&apos;ve
            worked on a diverse range of projects, from E-commerce platforms to Monitoring
            Systems and ERPs. My expertise spans Python (Django & FastAPI), PHP (Laravel/Lumen,
            Yii, CI), and various databases including MySQL, PostgreSQL, MongoDB, and Redis
            for caching. I work with tools like VSCode for efficient coding, Docker for
            containerization, and Figma for UI design. Throughout my career, I&apos;ve focused on
            delivering efficient and user-friendly web solutions, always eager to learn and
            apply new technologies to create amazing digital experiences.
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
            exchange ideas, feel free to reach out to me at hi.iwan@outlook.com. Let&apos;s
            create something amazing together!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
