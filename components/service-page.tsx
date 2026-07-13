"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { services, getServiceBySlug } from "@/lib/services-data"
import CtaBanner from "@/components/cta-banner"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const inView = {
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" as const },
}

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
}

const cardFade = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function ServicePage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug)

  if (!service) {
    return null
  }

  const Icon = service.icon
  const related = services.filter((s) => s.slug !== service.slug)

  return (
    <main className="overflow-x-clip">
      {/* a. Hero */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden">
        <Image
          src="/construction-2.png"
          alt={`Addbill quantity surveying: ${service.name}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D52]/30 via-[#0F2D52]/70 to-[#0F2D52]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D52]/60 via-transparent to-[#4FA9FF]/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
          <motion.nav
            aria-label="Breadcrumb"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 text-sm text-white/80 mb-6"
          >
            <Link href="/" className="hover:text-[#4FA9FF] transition-colors duration-300">
              Home
            </Link>
            <span aria-hidden="true" className="text-white/40">
              /
            </span>
            <Link href="/services" className="hover:text-[#4FA9FF] transition-colors duration-300">
              Services
            </Link>
            <span aria-hidden="true" className="text-white/40">
              /
            </span>
            <span className="text-white" aria-current="page">
              {service.name}
            </span>
          </motion.nav>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mb-5"
          >
            <span className="inline-flex w-12 h-12 rounded-xl bg-[#4FA9FF] items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-[#0F2D52]" />
            </span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg max-w-4xl"
          >
            {service.name}
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md"
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* b. Overview */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            variants={fadeUp}
            transition={inView.transition}
          >
            <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-6">
              Overview
            </h2>
            <div className="space-y-4">
              {service.overview.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#6B7280] text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* c. What's Included */}
      <section className="w-full bg-[#F7F9FC] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            variants={fadeUp}
            transition={inView.transition}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-4">
              What&apos;s Included
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
              The specific tasks and deliverables Addbill provides under{" "}
              {service.name}.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.included.map((item) => (
              <motion.div
                key={item.title}
                variants={cardFade}
                transition={inView.transition}
                className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F2D52] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#4FA9FF]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F2D52] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* d. Our Process */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            variants={fadeUp}
            transition={inView.transition}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-4">
              Our Process
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
              How Addbill delivers {service.name} with clarity and consistency.
            </p>
          </motion.div>

          <motion.ol
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            className="space-y-4"
          >
            {service.process.map((step, index) => (
              <motion.li
                key={step.title}
                variants={cardFade}
                transition={inView.transition}
                className="flex items-start gap-5 bg-[#F7F9FC] border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="shrink-0 w-12 h-12 rounded-full bg-[#0F2D52] text-[#4FA9FF] font-extrabold text-lg flex items-center justify-center tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F2D52] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* e. Related Services */}
      <section className="w-full bg-[#F7F9FC] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            variants={fadeUp}
            transition={inView.transition}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-4">
              Related Services
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
              Explore the other ways Addbill keeps your project financially in
              control.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {related.map((item) => {
              const RelatedIcon = item.icon
              return (
                <motion.div
                  key={item.slug}
                  variants={cardFade}
                  transition={inView.transition}
                >
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#4FA9FF] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="w-12 h-12 rounded-lg bg-[#0F2D52] flex items-center justify-center mb-4 group-hover:bg-[#4FA9FF] transition-colors duration-300">
                      <RelatedIcon className="w-6 h-6 text-[#4FA9FF] group-hover:text-[#0F2D52] transition-colors duration-300" />
                    </span>
                    <h3 className="text-base font-semibold text-[#0F2D52] mb-2 leading-snug">
                      {item.name}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#4FA9FF]">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* f. CTA Banner */}
      <CtaBanner />
    </main>
  )
}
