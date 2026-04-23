type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SectionBlock({ title, children }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}