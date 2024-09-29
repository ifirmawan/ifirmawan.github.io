import Image from "next/image";

import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="light:invert"
          width={100}
          height={24}
          priority
        />
      </div>

      <div className="pt-12 space-y-6">
        <div className="font-inter">
          <h1 className="font-bold text-5xl">Full-stack Web Developer </h1>
        </div>
        <p className="font-mono">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolor
          delectus repudiandae impedit? Adipisci, veniam error! Consequuntur
          dignissimos rem distinctio. Fugit, provident hic in ipsum nisi officia
          at assumenda ipsa.
        </p>
      </div>
    </React.Fragment>
  );
}
