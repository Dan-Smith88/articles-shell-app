export type ProgressResult = "correct" | "incorrect";

export type StoredProgressMap = Record<string, ProgressResult>;

function getStorageKey(mode: string) {
  return `study-progress-${mode}`;
}

export function getStoredProgress(mode: string): StoredProgressMap {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(getStorageKey(mode));
    if (!raw) return {};
    const parsed = JSON.parse(raw) as StoredProgressMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveStoredProgress(mode: string, progress: StoredProgressMap) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(getStorageKey(mode), JSON.stringify(progress));
}

export function markProgress(
  mode: string,
  itemId: string,
  result: ProgressResult
): StoredProgressMap {
  const current = getStoredProgress(mode);
  const updated = {
    ...current,
    [itemId]: result,
  };
  saveStoredProgress(mode, updated);
  return updated;
}