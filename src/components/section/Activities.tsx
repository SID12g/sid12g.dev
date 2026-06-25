import Separator from "@/components/Separator";
import Link from "next/link";

export default function Activities() {
  return (
    <div>
      <Separator title="ACTIVITIES" />
      <div className="flex flex-col gap-5">
        <ActivitiesItem
          activity="Frontend Developer"
          href="https://fingoo.vercel.app"
          organization="Fingoo"
          period={
            <>
              2026.05 ~ <span className="text-accent">재학 중</span>
            </>
          }
        />
        <ActivitiesItem
          activity="Supporter"
          href="https://bigdatahub.ac.kr"
          organization="서울시립대학교 빅데이터혁신융합대학사업단"
          period={
            <>
              2026.04 ~ <span className="text-accent">재학 중</span>
            </>
          }
        />
      </div>
    </div>
  );
}

function ActivitiesItem({
  activity,
  href,
  organization,
  period,
}: {
  activity: string;
  href: string;
  organization: string;
  period: React.ReactNode;
}) {
  return (
    <div className="flex flex-row justify-between items-top">
      <div className="flex flex-col gap-1">
        <p className="font-medium">{activity}</p>
        <p className="font-medium text-muted">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {organization}
          </Link>
        </p>
      </div>
      <p className="font-jetbrains-mono text-muted text-sm whitespace-nowrap">
        {period}
      </p>
    </div>
  );
}
