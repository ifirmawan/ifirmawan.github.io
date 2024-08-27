import SocialLink from "@/components/SocialLink";
import { socialItems } from "@/static/config";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-6xl justify-between lg:flex">
      <div className="w-full lg:w-3/4">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            dolor delectus repudiandae impedit? Adipisci, veniam error!
            Consequuntur dignissimos rem distinctio. Fugit, provident hic in
            ipsum nisi officia at assumenda ipsa.
          </p>
        </div>
      </div>
      <aside className="w-full space-y-16 lg:w-1/4 py-16">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar"
          className="w-36 md:w-48 lg:w-3/4 img-clip-pentagon"
          width={135}
          height={115}
        />
        <div className="space-y-3">
          <h3 className="font-semibold">RECENT PROJECTS</h3>
          <ul>
            <li>
              <Link href="/">Partos</Link>
            </li>
            <li>
              <Link href="/">Eswatini</Link>
            </li>
            <li>
              <Link href="/">RTMIS</Link>
            </li>
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
}
