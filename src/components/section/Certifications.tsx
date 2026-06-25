import Separator from "@/components/Separator";
import Link from "next/link";

export default function Certifications() {
  return (
    <div>
      <Separator title="STACKS" />
      <div className="flex flex-col gap-5">
        <CertificationItem
          certification="프로그래밍기능사"
          href="https://www.hrdkorea.or.kr"
          major="한국산업인력공단"
          period="2026.04"
        />
        <CertificationItem
          certification="리눅스마스터 2급"
          href="https://www.kait.or.kr"
          major="한국정보통신진흥협회"
          period="2023.10"
        />
      </div>
    </div>
  );
}

function CertificationItem({
  certification,
  href,
  major,
  period,
}: {
  certification: string;
  href: string;
  major: string;
  period: string;
}) {
  return (
    <div className="flex flex-row justify-between items-top">
      <div className="flex flex-col gap-1">
        <p className="font-medium">{certification}</p>
        <p className="font-medium text-muted">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {major}
          </Link>
        </p>
      </div>
      <p className="font-jetbrains-mono text-muted text-sm whitespace-nowrap">
        {period}
      </p>
    </div>
  );
}
