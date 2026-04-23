import Link from "next/link";

type Props = {
  showBack?: boolean;
  backHref?: string;
  backLabel?: string;
};

export default function PageTopActions({
  showBack = false,
  backHref = "/articles",
  backLabel = "Back",
}: Props) {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <Link
        href="/"
        className="inline-flex rounded-xl bg-[#16253a] px-4 py-2.5 text-sm font-semibold text-[#f7f1e7] transition hover:opacity-95"
      >
        Home
      </Link>

      {showBack ? (
        <Link
          href={backHref}
          className="inline-flex rounded-xl border border-[#cfc3b2] bg-[#efe8de] px-4 py-2.5 text-sm font-semibold text-[#223248] transition hover:bg-[#e9e0d3]"
        >
          {backLabel}
        </Link>
      ) : null}
    </div>
  );
}