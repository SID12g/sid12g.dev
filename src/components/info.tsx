import Link from "next/link";

export default function Info({
  href,
  icon,
  content,
}: {
  href: string;
  icon: string;
  content: string;
}) {
  return (
    <Link className="flex items-center w-fit" href={href}>
      <p className="text-[24px] mr-[8px] font-tossFace">{icon}</p>
      <p className="text-[14px]">{content}</p>
    </Link>
  );
}
