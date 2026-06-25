import Image from "next/image";
import Separator from "../Separator";
import Link from "next/link";

export default function Contributions() {
  return (
    <div>
      <Separator title="CONTRIBUTIONS" />
      <div className="flex flex-col gap-5">
        <ContributionsItem
          image="https://avatars.githubusercontent.com/u/25682207?s=128&v=4"
          repository="toss/suspensive"
          repositoryHref="https://github.com/toss/suspensive"
          title="docs(suspensive.org): add punctuation marks to a document #1168"
          href="https://github.com/toss/suspensive/pull/1168"
          date="2024-08-01"
        />
        <ContributionsItem
          image="https://avatars.githubusercontent.com/u/25682207?s=128&v=4"
          repository="toss/suspensive"
          repositoryHref="https://github.com/toss/suspensive"
          title="docs(suspensive.org): modify punctuation marks and spaces in the document #1179"
          href="https://github.com/toss/suspensive/pull/1179"
          date="2024-08-03"
        />
        <ContributionsItem
          image="https://avatars.githubusercontent.com/u/3676859?s=128&v=4"
          repository="shuding/nextra"
          repositoryHref="https://github.com/shuding/nextra"
          title="docs: fix meta tag theme color #3214"
          href="https://github.com/shuding/nextra/pull/3214"
          date="2024-09-09"
        />
      </div>
    </div>
  );
}

function ContributionsItem({
  image,
  repository,
  repositoryHref,
  title,
  href,
  date,
}: {
  image: string;
  repository: string;
  repositoryHref: string;
  title: string;
  href: string;
  date: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <Link href={repositoryHref} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-1.5">
            <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
              <Image
                src={image}
                alt={`${repository} owner`}
                width={64}
                height={64}
              />
            </div>
            <p className="font-jetbrains-mono text-accent">{repository}</p>
          </div>
        </Link>
        <p className="font-jetbrains-mono text-muted text-sm whitespace-nowrap">
          {date}
        </p>
      </div>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <p className="font-jetbrains-mono">{title}</p>
      </Link>
    </div>
  );
}
