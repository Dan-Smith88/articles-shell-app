type Props = {
  title: string;
  children: React.ReactNode;
};

export default function StudyShellCard({ title, children }: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-xl backdrop-blur">
      <h2 className="mb-5 text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-sm leading-6 text-slate-300">{children}</div>
    </section>
  );
}