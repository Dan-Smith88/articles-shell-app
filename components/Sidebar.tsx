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
    <aside className="w-full self-start rounded-[30px] border border-[#5e625f]/15 bg-[#4f5666] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.10)] md:w-64">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7a56a]">
          Study Workspace
        </div>
        <div className="mt-2 text-2xl font-semibold text-[#f7f3ec]">
          Study Shell
        </div>
        <p className="mt-3 text-sm leading-7 text-[#d9d4cb]">
          Structured review for article-based study and ordination prep.
        </p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#f1ede5] transition hover:bg-white/8"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}