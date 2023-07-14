"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-start items-center h-[200px] bg-slate-100 px-20">
      <ul className="flex gap-10 border">
        <Link
          className={`${
            pathname.length === 1 ? "bg-red-400" : ""
          } hover:bg-red-400 p-4`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${
            pathname.startsWith("/about") ? "bg-red-400" : ""
          } hover:bg-red-400 p-4`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`${
            pathname.startsWith("/shop") ? "bg-red-400" : ""
          } hover:bg-red-400 p-4`}
          href="/shop"
        >
          Shop
        </Link>
        <Link
          className={`${
            pathname.startsWith("/blog") ? "bg-red-400" : ""
          } hover:bg-red-400 p-4`}
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className={`${
            pathname.startsWith("/contact") ? "bg-red-400" : ""
          } hover:bg-red-400 p-4`}
          href="/contact"
        >
          Contact
        </Link>
      </ul>
    </header>
  );
}
