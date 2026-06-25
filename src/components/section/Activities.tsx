import Separator from "@/components/Separator";
import { activities, type ActivityItem } from "@/data/activities";
import Link from "next/link";

export default function Activities() {
  return (
    <div>
      <Separator title="ACTIVITIES" />
      <div className="flex flex-col gap-5">
        {activities.map((item) => (
          <ActivityItemView key={item.organization} item={item} />
        ))}
      </div>
    </div>
  );
}

function ActivityItemView({ item }: { item: ActivityItem }) {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col gap-1">
        <span className="font-medium">{item.role}</span>
        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-muted hover:text-accent transition-colors duration-150"
        >
          {item.organization}
        </Link>
      </div>
      <span className="font-jetbrains-mono text-muted text-sm whitespace-nowrap">
        {item.period}
        {item.current && (
          <span className="text-accent"> 재학 중</span>
        )}
      </span>
    </div>
  );
}
