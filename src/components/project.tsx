import Image from "next/image";
import Link from "next/link";

export default function Project({
  href,
  image,
  logo,
  name,
  description,
}: {
  href: string;
  image: any;
  logo: any;
  name: string;
  description: string;
}) {
  return (
    <Link className="w-[90%] lg:w-[46%] mb-[40px] ml-auto mr-auto" href={href}>
      <div className="rounded-[16px] border-[1px] border-border-color overflow-hidden">
        <Image className="aspect-video" src={image} alt="project image" />
        <div className="flex h-[92px] items-center">
          <Image
            className="w-[52px] h-[52px] rounded-[10px] border-[1px] border-border-color ml-[20px]"
            src={logo}
            alt="project logo image"
          />
          <div className="ml-[12px]">
            <p className="text-[18px]">{name}</p>
            <p className="text-[14px]">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
