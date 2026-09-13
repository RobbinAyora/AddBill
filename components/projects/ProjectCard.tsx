import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects-data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-br-[4rem] bg-[#0F2D52]">

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">

          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              25vw
            "
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#0F2D52]/40 to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#0F2D52]/0 transition-colors duration-500 group-hover:bg-[#0F2D52]/20" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A9E4F5]">
              {project.categoryLabel}
            </p>

            <h3 className="max-w-[90%] font-serif text-xl leading-[1.1] text-white sm:text-2xl">
              {project.name}
            </h3>

            <p className="mt-2 text-xs text-white/65">
              {project.location}
            </p>

            {/* Arrow */}
            <div className="mt-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 text-lg text-white transition-all duration-500 group-hover:border-[#4FA9FF] group-hover:bg-[#4FA9FF]">
                <span className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
            </div>

          </div>
        </div>
      </article>
    </Link>
  );
}