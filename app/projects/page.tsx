import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectsPage from "@/components/projects/ProjectsPage";

export const metadata: Metadata = {
  title:
    "Projects — Addbill Construction Solutions Limited",
  description:
    "Explore Addbill Construction Solutions Limited's construction, quantity surveying and project managemnet portfolio.",
};

export default function ProjectsIndexPage() {
  return (
    <>
      <Navbar />

      <ProjectsPage />

      <Footer />
    </>
  );
}