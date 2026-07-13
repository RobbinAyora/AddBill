"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Target,
  Eye,
  ShieldCheck,
  HardHat,
  HeartHandshake,
  Award,
  Calculator,
  ClipboardList,
  FileSignature,
  LineChart,
  Wallet,
  ArrowRight,
  CheckCircle2,
  Home,
  Plus,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StorySlideshow from "@/components/story-slideshow"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const slideLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
}

const slideRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
}

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
}

const cardFade = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const inView = {
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" as const },
}

const storySlides = [
  {
    src: "/construction-1.png",
    alt: "Addbill team reviewing construction plans on site",
  },
  {
    src: "/construction-2.png",
    alt: "Commercial construction project in progress",
  },
  {
    src: "/construction-3.png",
    alt: "Large-scale infrastructure development under construction",
  },
  {
    src: "/construction-4.png",
    alt: "Completed building showcasing quality craftsmanship",
  },
]

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We do what we say. Honest pricing, transparent reporting, and accountability on every engagement.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Accurate measurements and detailed cost planning ensure nothing is left to guesswork.",
  },
  {
    icon: HardHat,
    title: "Safety",
    description:
      "The wellbeing of our people and partners is non-negotiable across every site and process.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centered",
    description:
      "We listen first, then tailor solutions that protect your budget, timeline, and goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest professional standards in quantity surveying and delivery.",
  },
]

const expertise = [
  {
    icon: Calculator,
    title: "Cost Estimation",
    description:
      "Detailed, reliable budgets and feasibility studies built from real market data.",
    details:
      "We prepare preliminary and detailed cost estimates, elemental cost plans, and feasibility studies grounded in current market rates. This gives you a dependable financial picture before commitment, so decisions are made with confidence and no costly surprises later.",
  },
  {
    icon: ClipboardList,
    title: "Tendering & Procurement",
    description:
      "Clear tender documents and supplier selection that drive fair, competitive pricing.",
    details:
      "From preparing bills of quantities and tender documentation to evaluating bids and advising on the most suitable procurement route, we help you secure fair, competitive pricing and the right contractors for the job.",
  },
  {
    icon: FileSignature,
    title: "Contract Administration",
    description:
      "Sound contract management that keeps obligations, risks, and payments in order.",
    details:
      "We administer contracts impartially — managing variations, assessing claims, certifying payments, and keeping obligations and risks clearly documented so both parties stay protected throughout the build.",
  },
  {
    icon: LineChart,
    title: "Project Valuation",
    description:
      "Independent interim and final valuations that reflect true work completed.",
    details:
      "Our team carries out accurate interim valuations and final accounts that reflect the true value of work completed on site, ensuring payments are fair, timely, and fully substantiated.",
  },
  {
    icon: Wallet,
    title: "Cost Control",
    description:
      "Proactive monitoring and forecasting to keep your project firmly on budget.",
    details:
      "Through continuous cost monitoring, cash-flow forecasting, and clear financial reporting, we spot potential overruns early and keep your project firmly within budget from start to final account.",
  },
]

const team = [
  {
    name: "Jane Wanjiru",
    title: "Principal Quantity Surveyor",
    bio: "Leads cost strategy and major project oversight with 12+ years of industry experience.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "David Omondi",
    title: "Senior Cost Consultant",
    bio: "Specializes in tendering, procurement, and contract administration for complex builds.",
    image: "/placeholder-user.jpg",
  },
]

export default function AboutPage() {
  const [openExpertise, setOpenExpertise] = useState<number | null>(0)

  return (
    <main className="overflow-x-clip">
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden">
        <Image
          src="/construction-2.png"
          alt="Addbill construction site showing a project in progress"
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
            <span className="text-white" aria-current="page">
              About
            </span>
          </motion.nav>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg"
          >
            About Us
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md"
          >
            Building confidence through precise quantity surveying — helping
            projects stay on budget, on time, and built to last.
          </motion.p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            transition={inView.transition}
            className="max-w-lg"
          >
            <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-4">
              Our Story
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-4">
              Addbill Construction Solutions Limited was founded on a simple
              belief: great buildings begin with great numbers. We started as a
              small quantity surveying practice driven by the conviction that
              careful cost planning protects both clients and the quality of the
              work itself.
            </p>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-4">
              Over the years we have grown into a trusted partner for
              residential, commercial, and infrastructure projects across the
              region — combining hands-on site experience with modern
              construction practices and rigorous financial control.
            </p>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
              Our mission remains unchanged: to deliver clarity, confidence, and
              measurable value at every stage of a project, from first estimate
              to final account.
            </p>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            transition={inView.transition}
            className="w-full"
          >
            <StorySlideshow slides={storySlides} />
          </motion.div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
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
              Mission &amp; Vision
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
              The principles that guide how we plan, measure, and deliver value
              for every client we serve.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={cardFade}
              transition={inView.transition}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0F2D52] flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-[#4FA9FF]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F2D52] mb-3">
                Our Mission
              </h3>
              <p className="text-[#6B7280] text-base leading-relaxed">
                To provide accurate, transparent, and dependable quantity
                surveying services that empower our clients to make confident
                decisions — keeping projects financially sound from concept to
                completion.
              </p>
            </motion.div>

            <motion.div
              variants={cardFade}
              transition={inView.transition}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0F2D52] flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-[#4FA9FF]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F2D52] mb-3">
                Our Vision
              </h3>
              <p className="text-[#6B7280] text-base leading-relaxed">
                To be the region&apos;s most trusted name in construction cost
                management — recognized for precision, integrity, and the
                measurable value we bring to every build we touch.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="w-full bg-white py-20 md:py-24">
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
              Core Values
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
              The standards we hold ourselves to on every project, every day.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-5xl mx-auto border-t border-[#0F2D52]/15"
          >
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={cardFade}
                  transition={inView.transition}
                  className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-8 md:py-10 border-b border-[#0F2D52]/15"
                >
                  {/* Left: big number + name */}
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className="text-4xl md:text-6xl font-extrabold text-[#4FA9FF]/40 tabular-nums leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-[#0F2D52] leading-tight">
                      {value.title}
                    </h3>
                  </div>

                  {/* Right: icon + description */}
                  <div className="flex items-start gap-4 md:pl-6">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#0F2D52] flex items-center justify-center group-hover:bg-[#4FA9FF] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#4FA9FF] group-hover:text-[#0F2D52] transition-colors duration-300" />
                    </div>
                    <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Our Expertise */}
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
              Our Expertise
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
              End-to-end quantity surveying services that keep your project
              financially in control.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {expertise.map((item, index) => {
              const Icon = item.icon
              const isOpen = openExpertise === index
              const panelId = `expertise-panel-${index}`
              const buttonId = `expertise-button-${index}`
              return (
                <motion.div
                  key={item.title}
                  variants={cardFade}
                  transition={inView.transition}
                  className={`rounded-xl border bg-white overflow-hidden transition-colors duration-300 border-l-4 ${
                    isOpen
                      ? "border-gray-200 border-l-[#0F2D52] bg-[#F2F7FF] shadow-md"
                      : "border-gray-200 border-l-transparent shadow-sm hover:shadow-md"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenExpertise(isOpen ? null : index)}
                      className="w-full flex items-center gap-4 text-left px-5 sm:px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FA9FF] focus-visible:ring-inset"
                    >
                      <span
                        className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          isOpen ? "bg-[#4FA9FF]" : "bg-[#0F2D52]"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isOpen ? "text-[#0F2D52]" : "text-[#4FA9FF]"
                          }`}
                        />
                      </span>

                      <span className="flex-1 min-w-0">
                        <span className="block text-lg font-semibold text-[#0F2D52]">
                          {item.title}
                        </span>
                        <span className="block text-sm text-[#6B7280] leading-relaxed truncate">
                          {item.description}
                        </span>
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                          isOpen ? "text-[#0F2D52]" : "text-[#4FA9FF]"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="w-5 h-5" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 pl-[3.75rem] sm:pl-[4.25rem] text-[#6B7280] text-base leading-relaxed">
                          {item.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            variants={fadeUp}
            transition={inView.transition}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#4FA9FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#3D8FE0] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] focus:ring-offset-2 transition-all duration-300"
              >
                View all services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Meet the Team */}
      <section className="w-full bg-white py-20 md:py-24">
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
              Meet the Team
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
              The experienced professionals behind every estimate, valuation,
              and account we deliver.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={inView.viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={cardFade}
                transition={inView.transition}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-square bg-[#F7F9FC]">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F2D52] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#4FA9FF] font-medium text-sm mb-3">
                    {member.title}
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="w-full bg-[#0F2D52] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,.08)_25px),linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:25px_25px]" />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={inView.viewport}
          variants={fadeUp}
          transition={inView.transition}
          className="relative max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let&apos;s talk about your goals and build a clear, cost-controlled
            plan to bring them to life.
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#4FA9FF] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:bg-[#3D8FE0] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] focus:ring-offset-2 focus:ring-offset-[#0F2D52] transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
