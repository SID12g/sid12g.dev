import Separator from "@/components/Separator";
import Link from "next/link";

export default function Education() {
  return (
    <div>
      <Separator title="EDUCATION" />
      <div className="flex flex-col gap-5">
        <EducationItem
          school="서울시립대학교"
          href="https://www.uos.ac.kr"
          major="통계학과"
          period={
            <>
              2026.03 ~ <span className="text-accent">재학 중</span>
            </>
          }
        />
        <EducationItem
          school="한국디지털미디어고등학교"
          href="https://dimigo-h.goeas.kr"
          major="웹프로그래밍과"
          period="2023.03 ~ 2026.01"
        />
      </div>
    </div>
  );
}

function EducationItem({
  school,
  href,
  major,
  period,
}: {
  school: string;
  href: string;
  major: string;
  period: React.ReactNode;
}) {
  return (
    <div className="flex flex-row justify-between items-top">
      <div className="flex flex-col gap-1">
        <p className="font-medium">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {school}
          </Link>
        </p>
        <p className="font-medium text-muted">{major}</p>
      </div>
      <p className="font-jetbrains-mono text-muted text-sm whitespace-nowrap">
        {period}
      </p>
    </div>
  );
}
