type Props = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: Props) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b6a3e]">
        Ordination Study
      </div>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#1f2a3a] md:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 max-w-4xl text-base leading-7 text-[#5d6570] md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}