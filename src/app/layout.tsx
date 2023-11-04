import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "@/ui/NavBar";
import Drawer from "@/components/ui/Drawer";
import Link from "next/link";
import HamburgerBtn from "@/components/ui/HamburgerBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search Cocktails",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <link rel="icon" href="/icon.svg" sizes="any" />
      <body className={inter.className} data-theme="synthwave">
        <Providers>
          {/* <NavBar /> */}

          {/* NAVBAR */}
          <div className="navbar bg-base-100 fixed z-40">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost normal-case text-xl">The Cocktails DB</Link>
            </div>
            <div className="flex-none">
              <div className="md:hidden"><HamburgerBtn /></div>

              <ul className="menu menu-horizontal px-1 hidden md:flex">
                <li>
                  <Link href="/search">Search Cocktails</Link>
                </li>
                <li>
                  <details>
                    <summary>About...</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>...Me</a>
                      </li>
                      <li>
                        <a>...the Page</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/feedback">Feedback</Link>
                </li>
              </ul>

            </div>
          </div>

          {/* PAGE */}
          <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral mx-auto px-4">
            {children}
          </main>

          {/* DRAWER */}
          <Drawer>
            <div className="grid mt-10 gap-8 text-center">
              <Link href={"/search"} className="">Search Cocktails</Link>
              <details>
                <summary className="w-full">About</summary>
                <div className="grid mt-2 gap-6 text-center bg-base-200 p-4 rounded-lg">
                  <Link href={""}>...Me</Link>
                  <Link href={""}>...the Page</Link>
                </div>
              </details>
              <Link href={"/feedback"} className="">Feedback</Link>
            </div>
          </Drawer>
        </Providers>
      </body>
    </html >
  );
}
