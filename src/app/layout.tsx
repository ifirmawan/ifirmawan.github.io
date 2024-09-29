import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Iwan Firmawan",
  description: "Iwan firmawan | Full-stack Web Developer who lives in Purbalingga, Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} w-full h-screen px-6 md:px-12 lg:px-24`}>
        <main className="flex flex-col items-center justify-between pt-24">
          {children}
        </main>
        <footer className="flex flex-col items-center justify-between">
          <div className="w-full max-w-6xl flex justify-between items-center text-grey-200 text-xs italic py-6">
            <div className="w-full md:w-9/12">&copy; 2024</div>
            <div className="w-full md:w-3/12 text-left">
              <i>inspired by</i>{" "}
              <a
                href="https://dribbble.com/shots/13490584-Webflow?utm_source=Clipboard_Shot&utm_campaign=moynihan&utm_content=Webflow&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=moynihan&utm_content=Webflow&utm_medium=Social_Share"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                Shaun Moynihan
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
