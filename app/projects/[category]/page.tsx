import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectsPage from "@/components/projects/ProjectsPage";

import type { ProjectCategory } from "@/lib/projects-data";

const categories: ProjectCategory[] = [
  "residential",
  "commercial",
  "institutional",
  "infrastructure",
  "renovations",
  "design",
];

const categoryNames: Record<
  ProjectCategory,
  string
> = {
  residential: "Residential Projects",

  commercial: "Commercial Projects",

  institutional: "Institutional Projects",

  infrastructure: "Infrastructure Projects",

  renovations: "Renovation Projects",

  design: "Design Portfolio",
};

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  if (
    !categories.includes(
      category as ProjectCategory
    )
  ) {
    return {
      title:
        "Project Category Not Found — Addbill Construction Solutions Limited",
    };
  }

  const categoryName =
    categoryNames[category as ProjectCategory];

  return {
    title: `${categoryName} — Addbill Construction Solutions Limited`,

    description: `Explore Addbill Construction Solutions Limited's ${categoryName.toLowerCase()} portfolio.`,
  };
}

export default async function ProjectCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (
    !categories.includes(
      category as ProjectCategory
    )
  ) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <ProjectsPage
        category={category as ProjectCategory}
      />

      <Footer />
    </>
  );
}