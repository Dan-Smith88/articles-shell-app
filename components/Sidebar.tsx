"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  match?: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    match: (pathname) => pathname === "/dashboard" || pathname === "/",
  },
  {
    href: "/articles",
    label: "Articles",
    match: (pathname) => pathname.startsWith("/articles"),
  },
  {
    href: "/schedule",
    label: "Study Plan",
    match: (pathname) => pathname.startsWith("/schedule"),
  },
  {
    href: "/practice",
    label: "Practice",
    match: (pathname) =>
      pathname === "/practice" ||
      pathname.startsWith("/quiz") ||
      pathname.startsWith("/flashcards") ||
      pathname.startsWith("/oral-drill") ||
      pathname.startsWith("/fill-in-blank"),
  },
  {
    href: "/notes",
    label: "Notes",
    match: (pathname) => pathname.startsWith("/notes"),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[196px] shrink-0 lg:block">
      <div className="sticky top-5 ml-5 mt-5 rounded-2xl border border-[#cfc3b2] bg-[#ddd3c4] px-4 py-5">
        <div className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8b6a3e]">
            Study Workspace
          </p>

          <h2 className="mt-1 text-[1.55rem] font-bold leading-tight text-[#16253a]">
            Study Shell
          </h2>
        </div>

        <div className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7d6a52]">
            Main
          </p>
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = item.match ? item.match(pathname) : pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "block rounded-xl px-3 py-2.5 text-[15px] font-semibold leading-5 transition",
                  isActive
                    ? "bg-[#16253a] text-[#f7f1e7] shadow-sm"
                    : "text-[#223248] hover:bg-[#ece2d4] hover:text-[#16253a]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}