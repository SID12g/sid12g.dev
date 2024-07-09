import fs from "fs";
import path from "path";
import Profile from "@/components/profile";
import Project from "@/components/project";
import Footer from "@/components/footer";
import Detail from "@/components/detail";
import matter from "gray-matter";

function getPost({ title }: { title: string }) {
  const markdownFile = fs.readFileSync(
    path.join("projects", title + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    title,
    content,
  };
}

export default function Projects({ params }: { params: { title: string } }) {
  const props = getPost(params);
  console.log(props);
  return (
    <main className="w-full flex flex-col md:flex-row fixed">
      <Detail
        image={props.frontMatter.image}
        logo={props.frontMatter.logo}
        title={props.frontMatter.title}
        description={props.frontMatter.description}
        team={props.frontMatter.team}
        date={props.frontMatter.date}
        source={props.frontMatter.source}
        content={props.content}
      />
      <Profile sticky={false} />
      <div className="md:w-[calc(100%-350px)] mt-[40px] md:mt-[60px] pl-[4%] pr-[4%]">
        <p className="mb-[20px] text-subtitle-color">propss</p>
        <div className="flex flex-wrap flex-col lg:flex-row justify-between">
          <Project />
        </div>
        <Footer />
      </div>
    </main>
  );
}
