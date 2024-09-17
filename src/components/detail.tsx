import Image from "next/image";
import Link from "next/link";
import team_icon from "@/../public/icons/team.svg";
import date_icon from "@/../public/icons/date.svg";
import source_icon from "@/../public/icons/source.svg";
import { MDXRemote } from "next-mdx-remote/rsc";
import Button from "./button";

export default function Detail({
  image,
  logo,
  title,
  description,
  team,
  date,
  source,
  content,
}: {
  image: string;
  logo: string;
  title: string;
  description: string;
  team: string;
  date: string;
  source: string;
  content: string;
}) {
  return (
    <div className="overflow-y-scroll fixed inset-0 bg-primary-color sm:bg-neutral-800/50 flex justify-center sm:pt-[60px] px-[0px] sm:px-[16px] md:px-[60px]">
      <div className="h-fit bg-primary-color w-[100%] rounded-[32px] md:rounded-[32px] mb-[60px] pb-[44px] max-w-[800px]">
        <div className="flex justify-end m-[28px] mt-[40px] sm:m-[44px]">
          <Button />
        </div>
        <article className="flex flex-col mx-[28px] sm:mx-[40px] md:mx-[auto] max-w-[600px]">
          <Image
            width={1920}
            height={1080}
            className="w-[100%] border border-border-color rounded-[20px]"
            src={image}
            alt="project-image"
          />
          <div className="flex w-[100%] px-[20px] py-[16px] border border-border-color bg-background-color rounded-[16px] mt-[28px] mb-[20px]">
            <Image
              className="border border-border-color rounded-[12px] mr-[16px] w-[60px] h-[60px]"
              src={logo}
              alt="project-logo"
              width={60}
              height={60}
            />
            <div className="flex flex-col justify-center">
              <p className="text-[20px] sm:text-[22px] text-font-color">
                {title}
              </p>
              <p className="text-[12px] sm:text-[14px] text-font-color">
                {description}
              </p>
            </div>
          </div>
          <div className="ml-[20px]">
            <Property image={team_icon} property="Team" content={team} />
            <Property image={date_icon} property="Date" content={date} />
            <Source content={source} />
          </div>
          <hr className="mb-[20px]" />
          <div className="text-font-color">
            <MDXRemote source={content} />
          </div>
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
    <div className="flex mb-[8px] w-[100%] h-[24px] overflow-scroll scrollbar-hide">
      <Image className="mr-[6px]" src={image} alt="property-icon" />
      <p className="text-subtitle-color font-normal">{property}</p>
      <p className="ml-[8px] text-font-color">{content}</p>
    </div>
  );
}

function Source({ content }: { content: string }) {
  return (
    <div className="flex mb-[20px] w-[100%] h-[24px] overflow-scroll scrollbar-hide">
      <Image className="mr-[6px]" src={source_icon} alt="property-icon" />
      <p className="text-subtitle-color font-normal">Source</p>
      <Link className="ml-[8px] text-font-color" href={content}>
        {content}
      </Link>
    </div>
  );
}
