"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const inView = {
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" as const },
}

type CtaBannerProps = {
  title?: string
  description?: string
  buttonLabel?: string
  href?: string
}

export default function CtaBanner({
  title = "Need this service for your project?",
  description = "Tell us about your build and we'll put together a clear, cost-controlled plan to deliver it with confidence.",
  buttonLabel = "Get a Free Quote",
  href = "/contact",
}: CtaBannerProps) {
  return (
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
          {title}
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="inline-block"
        >
          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-[#4FA9FF] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:bg-[#3D8FE0] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] focus:ring-offset-2 focus:ring-offset-[#0F2D52] transition-all duration-300"
          >
            {buttonLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
