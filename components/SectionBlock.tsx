type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SectionBlock({ title, children }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-semibold text-[#1f2a3a]">{title}</h2>
      </div>
      {children}
    </div>
  );
}