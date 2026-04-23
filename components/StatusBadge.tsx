import { StudyStatus } from "@/data/articles";
import { getStatusLabel } from "@/lib/utils";

type Props = {
  status: StudyStatus;
};

export default function StatusBadge({ status }: Props) {
  const colorMap: Record<StudyStatus, string> = {
    not_started: "bg-[#ece6dc] text-[#6f6a63] border-[#d8cfc1]",
    in_progress: "bg-[#efe1cb] text-[#8a6431] border-[#d6bf9a]",
    reviewed: "bg-[#dde6e3] text-[#48635c] border-[#bdd0ca]",
    mastered: "bg-[#d9e2ea] text-[#415b77] border-[#b5c6d8]"
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${colorMap[status]}`}
    >
      {getStatusLabel(status)}
    </span>
  );
}