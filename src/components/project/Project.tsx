"use client";

import Link from "next/link";
import { ProjectType } from "@/types/project.interface";

export default function Project({ project }: { project: ProjectType }) {
  return <Link href={project.slug}></Link>;
}
