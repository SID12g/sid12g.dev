import Section from "./section";

function CertificationItem({
  href,
  title,
  date,
  issuer,
}: {
  href: string;
  title: string;
  date: string;
  issuer: string;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
        <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {title}
        </span>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {date}
        </span>
      </div>
      <p className="mt-1 text-base text-neutral-600 dark:text-neutral-400">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded px-1 -mx-1 transition hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          {issuer}
        </a>
      </p>
    </div>
  );
}

export default function Certifications() {
  return (
    <Section title="Certifications">
      <div className="flex flex-col gap-6">
        <CertificationItem
          href="https://www.hrdkorea.or.kr/"
          title="프로그래밍기능사"
          date="2026.04"
          issuer="한국산업인력공단"
        />
        <div className="w-full h-[1px] bg-neutral-100 dark:bg-neutral-800" />
        <CertificationItem
          href="https://www.kait.or.kr/"
          title="리눅스마스터 2급"
          date="2023.10"
          issuer="한국정보통신진흥협회"
        />
      </div>
    </Section>
  );
}
