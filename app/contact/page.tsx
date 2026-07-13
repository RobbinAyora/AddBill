"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  User,
  AtSign,
  PhoneCall,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const inView = {
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" as const },
}

const projectTypes = [
  "General Inquiry",
  "Cost Estimation",
  "Tendering",
  "Contract Administration",
  "Project Valuation",
  "Cost Control",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("loading")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setStatusMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.")
        setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send")
      }
    } catch {
      setStatus("error")
      setStatusMessage("Something went wrong. Please try again later or call us directly.")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <main className="overflow-x-clip">
      <Navbar />

      {/* 1. Hero / Intro Banner */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/construction-2.png"
          alt="Addbill construction project background"
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
              Contact
            </span>
          </motion.nav>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md"
          >
            Let&apos;s discuss your next project. Reach out and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* 2. Two-column layout: Form + Info/Map */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={inView.viewport}
              variants={fadeUp}
              transition={inView.transition}
            >
              <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-8">
                Fill out the form below and our team will respond promptly.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#0F2D52] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B7280]">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`w-full pl-11 pr-4 py-3 rounded-lg border bg-[#F7F9FC] text-[#0F2D52] placeholder:text-[#6B7280]/60 focus:outline-none focus:ring-2 focus:ring-[#4FA9FF]/20 transition-all duration-200 ${
                        errors.fullName
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-[#4FA9FF]"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0F2D52] mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B7280]">
                      <AtSign className="h-5 w-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full pl-11 pr-4 py-3 rounded-lg border bg-[#F7F9FC] text-[#0F2D52] placeholder:text-[#6B7280]/60 focus:outline-none focus:ring-2 focus:ring-[#4FA9FF]/20 transition-all duration-200 ${
                        errors.email
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-[#4FA9FF]"
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0F2D52] mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B7280]">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-[#F7F9FC] text-[#0F2D52] placeholder:text-[#6B7280]/60 focus:outline-none focus:ring-2 focus:ring-[#4FA9FF]/20 focus:border-[#4FA9FF] transition-all duration-200"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                {/* Subject / Project Type */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#0F2D52] mb-1.5">
                    Subject / Project Type
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B7280]">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-11 pr-10 py-3 rounded-lg border border-gray-200 bg-[#F7F9FC] text-[#0F2D52] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF]/20 focus:border-[#4FA9FF] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#6B7280]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0F2D52] mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-lg border bg-[#F7F9FC] text-[#0F2D52] placeholder:text-[#6B7280]/60 focus:outline-none focus:ring-2 focus:ring-[#4FA9FF]/20 transition-all duration-200 resize-y ${
                      errors.message
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-[#4FA9FF]"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Messages */}
                <div aria-live="polite" aria-atomic="true">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800"
                    >
                      <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                      <p className="text-sm font-medium">{statusMessage}</p>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800"
                    >
                      <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                      <p className="text-sm font-medium">{statusMessage}</p>
                    </motion.div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#4FA9FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#3D8FE0] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={inView.viewport}
              variants={fadeUp}
              transition={{ ...inView.transition, delay: 0.15 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-2">
                  Contact Information
                </h2>
                <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-8">
                  Reach out through any of the channels below or visit our office.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      value: "Nairobi, Kenya",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+254 700 123 456",
                      href: "tel:+254700123456",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@addbill.com",
                      href: "mailto:info@addbill.com",
                    },
                    {
                      icon: Clock,
                      label: "Business Hours",
                      value: "Mon – Fri: 8:00 AM – 6:00 PM",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-[#0F2D52] flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#4FA9FF]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#6B7280] mb-0.5">{item.label}</p>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-base font-semibold text-[#0F2D52] hover:text-[#4FA9FF] transition-colors duration-300"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <p className="text-base font-semibold text-[#0F2D52]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <iframe
                    title="Addbill Construction Solutions Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.098888888!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTUnMjguMCJIDzM2wrAzNScyMC4wIlc!5e0!3m2!1sen!2ske!4v1234567890"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
                <div className="mt-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.google.com/maps/dir/?api=1&destination=Nairobi,Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F2D52] text-white font-semibold rounded-lg shadow-md hover:bg-[#1B3E6B] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] focus:ring-offset-2 transition-all duration-300"
                  >
                    <MapPin className="h-5 w-5" />
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CTA / Closing Section */}
      <section className="w-full bg-[#F7F9FC] py-20 md:py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={inView.viewport}
          variants={fadeUp}
          transition={inView.transition}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2D52] mb-4">
            Prefer to call us directly?
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto mb-8 leading-relaxed">
            Our team is available during business hours to discuss your project requirements, answer questions, or provide a quick consultation.
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <Link
              href="tel:+254700123456"
              className="inline-flex items-center gap-2 bg-[#4FA9FF] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:bg-[#3D8FE0] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] focus:ring-offset-2 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +254 700 123 456
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
