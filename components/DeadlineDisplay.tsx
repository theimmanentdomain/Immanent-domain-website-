import type { Deadline } from "@/lib/content";
export default function DeadlineDisplay({ deadline }: { deadline: Deadline }) { return <dl className="deadline"><div><dt>{deadline.label}</dt><dd>{deadline.displayDate}</dd></div><div><dt>Status</dt><dd>{deadline.status}</dd></div></dl>; }
