import Image from "next/image";
import Link from "next/link";
import { use } from "react";

interface Project {
  id: string;
  public_url: string;
  url: string;
  icon: { file: { url: string } };
  cover: { file: { url: string } };
  properties: {
    Name: { title: { plain_text: string }[] };
    Description: { rich_text: { plain_text: string }[] };
    Date: { rich_text: { plain_text: string }[] };
    Number: { number: number };
  };
}

async function fetchProjects() {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${process.env.PROJECTS_DATABASE_ID}/query`,
    {
      method: "POST",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Notion-Version": "2022-02-22",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      },
    }
  );

  return await response.json();
}

export default function Project() {
  const data = use(fetchProjects());
  const results = data.results.sort(
    (a: Project, b: Project) =>
      b.properties.Number.number - a.properties.Number.number
  );
  return (
    <div className="flex flex-wrap flex-col lg:flex-row justify-between">
      {results.map((project: Project, index: number) => (
        <Link key={index} className="lg:w-[48%] mb-[40px]" href={project.url}>
          <div className="rounded-[16px] border-[1px] border-border-color overflow-hidden">
            <Image
              className="aspect-video"
              src={project.cover.file.url}
              alt="project image"
              width={1920}
              height={1080}
            />
            <div className="flex h-[92px] items-center">
              <Image
                className="w-[52px] h-[52px] rounded-[10px] border-[1px] border-border-color ml-[20px]"
                src={project.icon.file.url}
                alt="project logo image"
                width={256}
                height={256}
              />
              <div className="ml-[12px]">
                <p className="text-[18px]">
                  {project.properties.Name?.title[0].plain_text}
                </p>
                <p className="text-[14px]">
                  {project.properties.Description?.rich_text[0].plain_text}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
