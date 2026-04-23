type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
};

export default function StatCard({ title, value, subtitle }: Props) {
  return (
    <div className="rounded-[28px] border border-[#cfc5b7] bg-[#f7f3ec] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a746c]">
        {title}
      </div>
      <div className="mt-3 text-4xl font-semibold text-[#1f2a3a]">{value}</div>
      {subtitle ? <div className="mt-3 text-sm text-[#6b7280]">{subtitle}</div> : null}
    </div>
  );
}