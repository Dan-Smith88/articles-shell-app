import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  countLabel?: string;
};

export default function ModeLaunchCard({
  title,
  description,
  href,
  countLabel,
}: Props) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-[#d8cfc1] bg-[#f5efe6] p-5 transition hover:-translate-y-0.5 hover:border-[#bca98c] hover:bg-[#f1e8dc]"
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-[#1f2a3a]">{title}</h3>
        <span className="rounded-full border border-[#d8cfc1] bg-[#ebe3d7] px-3 py-1 text-xs font-semibold text-[#6b6258]">
          Open
        </span>
      </div>

      <p className="mb-4 text-sm leading-6 text-[#4e5864]">{description}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#7b6953]">
          {countLabel || "Ready"}
        </span>
        <span className="text-sm font-semibold text-[#8b6a3e] group-hover:translate-x-0.5 transition">
          Launch →
        </span>
      </div>
    </Link>
  );
}