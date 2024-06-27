import Image from "next/image";
import Link from "next/link";
import X from "@/../public/images/x.svg";
import advocate from "@/../public/images/advocate.png";
import logo from "@/../public/images/logo.png";
import team from "@/../public/images/team.svg";
import date from "@/../public/images/date.svg";
import source from "@/../public/images/source.svg";

export default function Detail() {
  return (
    <div className="overflow-scroll fixed inset-0 bg-black bg-opacity-50 flex justify-center pt-[60px] px-[28px] md:px-[60px]">
      <div className="h-fit bg-background-color w-[100%] rounded-[60px] mb-[60px] pb-[44px]">
        <div className="flex justify-end m-[44px]">
          <Link href={"/"}>
            <Image src={X} alt="X" />
          </Link>
        </div>
        <article className="flex flex-col mx-[40px] md:mx-[100px]">
          <Image
            className="w-[100%] border border-border-color rounded-[20px]"
            src={advocate}
            alt="project-image"
          />
          <div className="flex w-[100%] px-[20px] py-[16px] border border-border-color bg-primary-color rounded-[16px] mt-[28px] mb-[20px]">
            <Image
              className="border border-border-color rounded-[12px] mr-[16px]"
              src={logo}
              alt="project-logo"
              width={60}
              height={60}
            />
            <div>
              <p className="text-[24px] font-normal">advocate</p>
              <p className="text-[12px] font-medium">
                특수교육의 새로운 패러다임을 열다.
              </p>
            </div>
          </div>
          <div className="ml-[20px]">
            <Property image={team} property="Team" content="DOTE" />
            <Property image={date} property="Date" content="2024" />
            <Source content="https://github.com" />
          </div>
          <hr className="mb-[20px]" />
          <p>테스트</p>
        </article>
      </div>
    </div>
  );
}

function Property({
  image,
  property,
  content,
}: {
  image: any;
  property: string;
  content: string;
}) {
  return (
    <div className="flex mb-[8px]">
      <Image className="mr-[6px]" src={image} alt="property-icon" />
      <p className="text-subtitle-color font-normal">{property}</p>
      <p className="ml-[8px]">{content}</p>
    </div>
  );
}

function Source({ content }: { content: string }) {
  return (
    <div className="flex mb-[20px]">
      <Image className="mr-[6px]" src={source} alt="property-icon" />
      <p className="text-subtitle-color font-normal">Source</p>
      <Link className="ml-[8px]" href={content}>
        {content}
      </Link>
    </div>
  );
}
