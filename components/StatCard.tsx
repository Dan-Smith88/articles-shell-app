type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
};

export default function StatCard({ title, value, subtitle }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-xl backdrop-blur">
      <div className="text-sm font-medium uppercase tracking-wide text-slate-400">
        {title}
      </div>
      <div className="mt-3 text-4xl font-bold text-white">{value}</div>
      {subtitle ? <div className="mt-3 text-sm text-slate-400">{subtitle}</div> : null}
    </div>
  );
}