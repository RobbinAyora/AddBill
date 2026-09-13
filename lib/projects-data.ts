export type ProjectCategory =
  | "residential"
  | "commercial"
  | "institutional"
  | "infrastructure"
  | "renovations"
  | "design";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "bronllwyn-care-home",
    name: "Bronllwyn Care Home",
    category: "institutional",
    categoryLabel: "Institutional",
    location: "Nairobi, Kenya",
    image: "/images/hero/projects/commerial-1.jfif",
    description:
      "A contemporary institutional development planned with a focus on functionality, quality and long-term value.",
  },

  {
    slug: "cascade-tower",
    name: "Cascade Tower",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "Nairobi, Kenya",
    image: "/images/hero/projects/commercial-2.jfif",
    description:
      "A modern commercial development combining efficient planning, contemporary architecture and carefully managed construction costs.",
  },

  {
    slug: "melrose-care-home",
    name: "Melrose Care Home",
    category: "institutional",
    categoryLabel: "Institutional",
    location: "Kiambu, Kenya",
    image: "/images/hero/projects/institutional-1.jfif",
    description:
      "A purpose-designed care facility developed around comfort, accessibility and efficient use of space.",
  },

  {
    slug: "meadow-lane",
    name: "Meadow Lane",
    category: "residential",
    categoryLabel: "Residential",
    location: "Nairobi, Kenya",
    image: "/images/hero/projects/residential-1.jfif",
    description:
      "A residential development combining modern living spaces with considered planning and construction management.",
  },

  {
    slug: "modern-education-centre",
    name: "Modern Education Centre",
    category: "institutional",
    categoryLabel: "Institutional",
    location: "Nairobi, Kenya",
    image: "/images/hero/projects/institutional-2.jfif",
    description:
      "An education facility designed around functionality, durability and an effective learning environment.",
  },

  {
    slug: "industrial-development",
    name: "Industrial Development",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    location: "Athi River, Kenya",
    image: "/images/hero/projects/industrial-1.jfif",
    description:
      "A large-scale development requiring careful cost management, planning and project coordination.",
  },

  {
    slug: "contemporary-commercial-space",
    name: "Contemporary Commercial Space",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "Nairobi, Kenya",
    image: "/images/hero/projects/commercial-2.jfif",
    description:
      "A contemporary commercial project focused on efficient space planning and controlled project delivery.",
  },

  {
    slug: "residential-development",
    name: "Residential Development",
    category: "residential",
    categoryLabel: "Residential",
    location: "Nairobi, Kenya",
    image: "/images/hero/projects/residential-2.jfif",
    description:
      "A carefully planned residential development combining modern design with practical construction solutions.",
  },

  {
    slug: "institutional-development",
    name: "Institutional Development",
    category: "institutional",
    categoryLabel: "Institutional",
    location: "Nairobi, Kenya",
    image: "/images/hero/projects/institutional-3.jfif",
    description:
      "An institutional project supported through professional planning, cost management and project coordination.",
  },

  {
    slug: "infrastructure-development",
    name: "Infrastructure Development",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    location: "Kenya",
    image: "/images/hero/projects/industrial-1.jfif",
    description:
      "Infrastructure works requiring detailed planning, cost control and coordinated project delivery.",
  },

  {
    slug: "property-renovation",
    name: "Property Renovation",
    category: "renovations",
    categoryLabel: "Renovations",
    location: "Nairobi, Kenya",
    image: "/images/hero/projects/renovation-1.jfif",
    description:
      "A renovation project focused on improving an existing property while maintaining effective control of construction costs.",
  },

  {
    slug: "design-portfolio",
    name: "Design Portfolio",
    category: "renovations",
    categoryLabel: "Design",
    location: "Kenya",
    image: "/images/hero/projects/renovation-2.jfif",
    description:
      "A selection of design-focused projects demonstrating contemporary architectural thinking and project planning.",
  },
];

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug
  );
}

export function getProjectsByCategory(
  category: ProjectCategory
): Project[] {
  return projects.filter(
    (project) => project.category === category
  );
}