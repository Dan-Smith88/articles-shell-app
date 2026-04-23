import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/articles", label: "Articles" },
  { href: "/quiz", label: "Quiz" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/oral-drill", label: "Oral Drill" },
  { href: "/notes", label: "Notes" }
];

export default function Sidebar() {
  return (
    <aside className="w-full rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur md:w-72">
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          Study Platform
        </div>
        <div className="mt-2 text-2xl font-bold text-white">Study Shell</div>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Local prototype for article-based study, review, and oral drill prep.
        </p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-blue-500/15 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}