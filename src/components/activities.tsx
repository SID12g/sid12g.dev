import Section from "./section";

function ActivityItem({
  href,
  role,
  organization,
  date,
  highlight,
}: {
  href: string;
  role: string;
  organization: string;
  date: string;
  highlight?: string;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
        <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100 px-1 -mx-1">
          {role}
        </span>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {date}
          {highlight && (
            <span className="ml-1 text-blue-500 font-medium">{highlight}</span>
          )}
        </span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 w-fit text-base text-neutral-600 dark:text-neutral-400 rounded px-1 -mx-1 transition hover:bg-neutral-100 dark:hover:bg-neutral-900"
      >
        {organization}
      </a>
    </div>
  );
}

export default function Activities() {
  return (
    <Section title="Activities">
      <div className="flex flex-col gap-6">
        <ActivityItem
          href="https://fingoo.vercel.app"
          role="Frontend Developer"
          organization="Fingoo"
          date="2026.05 ~"
          highlight="활동 중"
        />
        <div className="w-full h-[1px] bg-neutral-100 dark:bg-neutral-800" />
        <ActivityItem
          href="https://bigdatahub.ac.kr/"
          role="빅데이터 서포터즈"
          organization="서울시립대학교 빅데이터혁신융합대학사업단"
          date="2026.04 ~"
          highlight="활동 중"
        />
      </div>
    </Section>
  );
}
