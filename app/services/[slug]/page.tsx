import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { services, getServiceBySlug } from "@/lib/services-data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicePage from "@/components/service-page"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found — Addbill Construction Solutions Limited",
    }
  }

  return {
    title: `${service.name} — Addbill Construction Solutions Limited`,
    description: service.tagline,
  }
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!getServiceBySlug(slug)) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <ServicePage slug={slug} />
      <Footer />
    </>
  )
}
