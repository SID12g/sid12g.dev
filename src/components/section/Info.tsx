import Separator from "@/components/Separator";
import Link from "next/link";
import { info, type InfoItem } from "@/data/info";

export default function Info() {
  return (
    <div>
      <Separator title="INFO" />
      <div className="flex flex-col gap-5">
        {info.map((item) => (
          <InfoItemView key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}

function InfoItemView({ item }: { item: InfoItem }) {
  return (
    <div className="flex flex-row gap-5">
      <div className="w-20 shrink-0">
        <span className="text-sm text-muted font-jetbrains-mono">
          {item.label}
        </span>
      </div>
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary font-jetbrains-mono hover:text-accent transition-colors duration-150"
      >
        {item.content}
      </Link>
    </div>
  );
}
