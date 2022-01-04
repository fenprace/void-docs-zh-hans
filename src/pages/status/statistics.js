import summary from "./summary.json";

export const chapters = 5;
export const sections = summary.length;
export const tbd = summary.reduce(
  (count, page) => (page.status === 0 ? count + 1 : count),
  0
);
export const inProgress = summary.reduce(
  (count, page) => (page.status === 1 ? count + 1 : count),
  0
);
export const done = sections - tbd - inProgress;
