import Separator from "@/components/Separator";
import { certifications, type CertificationItem } from "@/data/certifications";
import Link from "next/link";

export default function Certifications() {
  return (
    <div>
      <Separator title="CERTIFICATIONS" />
      <div className="flex flex-col gap-5">
        {certifications.map((item) => (
          <CertificationItemView key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function CertificationItemView({ item }: { item: CertificationItem }) {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col gap-1">
        <span className="font-medium">{item.name}</span>
        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-muted hover:text-accent transition-colors duration-150"
        >
          {item.issuer}
        </Link>
      </div>
      <span className="font-jetbrains-mono text-muted text-sm whitespace-nowrap">
        {item.date}
      </span>
    </div>
  );
}
