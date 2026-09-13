
"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import {
  projects,
  type ProjectCategory,
} from "@/lib/projects-data";

interface ProjectsPageProps {
  category?: ProjectCategory;
}

const filters: {
  value: ProjectCategory;
  label: string;
}[] = [
  {
    value: "institutional",
    label: "Education",
  },
  {
    value: "residential",
    label: "Residential",
  },
  {
    value: "commercial",
    label: "Commercial",
  },
  {
    value: "renovations",
    label: "Care Home",
  },
  {
    value: "infrastructure",
    label: "Industrial",
  },
];

const categoryTitles: Record<
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

export default function ProjectsPage({
  category,
}: ProjectsPageProps) {
  const [activeFilters, setActiveFilters] = useState<
    ProjectCategory[]
  >(category ? [category] : []);

  const filteredProjects = useMemo(() => {
    if (activeFilters.length === 0) {
      return projects;
    }

    return projects.filter((project) =>
      activeFilters.includes(project.category)
    );
  }, [activeFilters]);

  const toggleFilter = (
    filter: ProjectCategory
  ) => {
    setActiveFilters((current) => {
      if (current.includes(filter)) {
        return current.filter(
          (item) => item !== filter
        );
      }

      return [...current, filter];
    });
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const pageTitle =
    category && activeFilters.length === 1
      ? categoryTitles[category]
      : "Latest Projects";

  return (
    <main className="min-h-screen bg-[#0F2D52] pt-20 lg:pt-24">

      {/* Main white container */}
      <section className="mx-auto w-[calc(100%-1.5rem)] max-w-[1440px] overflow-hidden rounded-[1.5rem] bg-[#FFFFFF] shadow-2xl sm:w-[calc(100%-3rem)] sm:rounded-[2rem] lg:w-[calc(100%-5rem)]">

        <div className="px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-14 lg:py-16">

          {/* Heading */}
          <div className="flex items-center gap-3">
            <span className="h-7 w-1 rounded-full bg-[#4FA9FF] sm:h-8" />

            <h1 className="font-serif text-2xl font-medium tracking-tight text-[#0F2D52] sm:text-3xl lg:text-[2rem]">
              {pageTitle}
            </h1>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#0F2D52] opacity-70 sm:text-base">
            Explore selected projects delivered through
            professional quantity surveying, cost management
            and project planning.
          </p>

          {/* Filters */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">

            <button
              type="button"
              onClick={clearFilters}
              className={`inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-300 ${
                activeFilters.length === 0
                  ? "border-[#0F2D52] bg-[#0F2D52] text-[#FFFFFF]"
                  : "border-[#A9E4F5] bg-[#FFFFFF] text-[#0F2D52] hover:border-[#4FA9FF]"
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16" />
                <path d="M7 12h10" />
                <path d="M10 18h4" />
              </svg>

              Filter
            </button>

            {filters.map((filter) => {
              const active = activeFilters.includes(
                filter.value
              );

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() =>
                    toggleFilter(filter.value)
                  }
                  className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-[#0F2D52] text-[#FFFFFF] shadow-md"
                      : "bg-[#C9F0FA] text-[#0F2D52] hover:bg-[#A9E4F5]"
                  }`}
                  aria-pressed={active}
                >
                  {filter.label}

                  <span
                    className={`text-base leading-none transition-transform ${
                      active ? "rotate-45" : ""
                    }`}
                  >
                    ×
                  </span>
                </button>
              );
            })}
          </div>

          {/* Project count */}
          <div className="mt-7 flex items-center justify-between border-b border-[#C9F0FA] pb-5">

            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#0F2D52] opacity-50">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "Project"
                : "Projects"}
            </p>

            {activeFilters.length > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-medium uppercase tracking-[0.14em] text-[#4FA9FF] transition-colors hover:text-[#0F2D52]"
              >
                Clear filters
              </button>
            )}

          </div>

          {/* Projects */}
          {filteredProjects.length > 0 ? (
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ))}

            </div>
          ) : (
            <div className="flex min-h-[350px] items-center justify-center">

              <div className="text-center">

                <p className="font-serif text-2xl text-[#0F2D52]">
                  No projects found
                </p>

                <p className="mt-2 text-sm text-[#0F2D52] opacity-60">
                  There are currently no projects in this category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-full bg-[#0F2D52] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#FFFFFF] transition-colors hover:bg-[#4FA9FF]"
                >
                  View all projects
                </button>

              </div>

            </div>
          )}

        </div>
      </section>
    </main>
  );
}
