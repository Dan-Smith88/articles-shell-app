type Props = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
        Ordination Study Prototype
      </div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}