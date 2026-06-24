import Separator from "@/components/Separator";
import Link from "next/link";

export default function Info() {
  return (
    <div>
      <Separator title="INFO" />
      <div className="flex flex-col gap-5">
        <InfoItem
          title="BLOG"
          content="blog.sid12g.dev"
          href="https://blog.sid12g.dev"
        />
        <InfoItem
          title="EMAIL"
          content="i@sid12g.dev"
          href="mailto:i@sid12g.dev"
        />
        <InfoItem
          title="GITHUB"
          content="@SID12g"
          href="https://github.com/SID12g"
        />
        <InfoItem
          title="LINKEDIN"
          content="linkedin.com/in/sid12g"
          href="https://linkedin.com/in/sid12g"
        />
        <InfoItem
          title="ROCKET"
          content="rocketpunch.com/@sid12g"
          href="https://rocketpunch.com/@sid12g"
        />
      </div>
    </div>
  );
}

function InfoItem({
  title,
  content,
  href,
}: {
  title: string;
  content: string;
  href: string;
}) {
  return (
    <div className="flex flex-row gap-5">
      <div className="w-20">
        <p className="text-base text-muted font-jetbrains-mono">{title}</p>
      </div>
      <p className="text-base text-primary font-jetbrains-mono">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </Link>
      </p>
    </div>
  );
}
