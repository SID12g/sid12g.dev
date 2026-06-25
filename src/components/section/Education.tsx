import Separator from "@/components/Separator";
import { education, type EducationItem } from "@/data/education";
import Link from "next/link";

export default function Education() {
  return (
    <div>
      <Separator title="EDUCATION" />
      <div className="flex flex-col gap-5">
        {education.map((item) => (
          <EducationItemView key={item.school} item={item} />
        ))}
      </div>
    </div>
  );
}

function EducationItemView({ item }: { item: EducationItem }) {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col gap-1">
        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-accent transition-colors duration-150"
        >
          {item.school}
        </Link>
        <span className="font-medium text-muted">{item.major}</span>
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
