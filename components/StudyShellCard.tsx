type Props = {
  title: string;
  children: React.ReactNode;
};

export default function StudyShellCard({ title, children }: Props) {
  return (
    <section className="rounded-[28px] border border-[#d0c6b8] bg-[#f3ede3] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
      <h2 className="mb-5 text-2xl font-semibold text-[#1f2a3a]">{title}</h2>
      <div className="space-y-3 text-sm leading-7 text-[#4b5563]">{children}</div>
    </section>
  );
}