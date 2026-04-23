import { StudyStatus } from "@/data/articles";
import { getStatusLabel } from "@/lib/utils";

type Props = {
  status: StudyStatus;
};

export default function StatusBadge({ status }: Props) {
  const colorMap: Record<StudyStatus, string> = {
    not_started: "bg-slate-700/60 text-slate-200 border-slate-500/30",
    in_progress: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    reviewed: "bg-sky-500/15 text-sky-300 border-sky-400/30",
    mastered: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30"
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${colorMap[status]}`}
    >
      {getStatusLabel(status)}
    </span>
  );
}