import Section from "./section";

function EducationItem({
  href,
  title,
  date,
  status,
  highlight,
}: {
  href: string;
  title: string;
  date: string;
  status: string;
  highlight?: string;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-lg font-medium text-neutral-900 dark:text-neutral-100 rounded px-1 -mx-1 transition hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          {title}
        </a>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {date}
          {highlight && (
            <span className="ml-1 text-blue-500 font-medium">{highlight}</span>
          )}
        </span>
      </div>
      <p className="mt-1 text-base text-neutral-600 dark:text-neutral-400">
        {status}
      </p>
    </div>
  );
}

export default function Education() {
  return (
    <Section title="Education">
      <div className="flex flex-col gap-6">
        <EducationItem
          href="https://uos.ac.kr"
          title="서울시립대학교"
          date="2026.03 ~"
          highlight="재학 중"
          status="통계학과"
        />
        <div className="w-full h-[1px] bg-neutral-100 dark:bg-neutral-800" />
        <EducationItem
          href="https://dimigo.hs.kr/"
          title="한국디지털미디어고등학교"
          date="2023.03 ~ 2026.01"
          status="웹프로그래밍과"
        />
      </div>
    </Section>
  );
}
