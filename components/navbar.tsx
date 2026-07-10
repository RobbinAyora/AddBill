"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown } from "lucide-react"

const services = [
  { href: "/services/cost-estimation", label: "Cost Estimation & Budgeting" },
  { href: "/services/tendering-procurement", label: "Tendering & Procurement" },
  { href: "/services/contract-administration", label: "Contract Administration" },
  { href: "/services/project-valuation", label: "Project Valuation" },
  { href: "/services/cost-control", label: "Cost Control & Monitoring" },
]

const projects = [
  { href: "/projects/residential", label: "Residential Projects" },
  { href: "/projects/commercial", label: "Commercial Projects" },
  { href: "/projects/institutional", label: "Institutional Projects" },
  { href: "/projects/infrastructure", label: "Infrastructure Projects" },
  { href: "/projects/renovations", label: "Renovation Projects" },
  { href: "/projects/design", label: "Design Portfolio" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
            : "bg-white/10 backdrop-blur-sm"
        )}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex-shrink-0 group" aria-label="Addbill Home">
              <span className="text-2xl lg:text-3xl font-extrabold tracking-tight">
                <span className="text-[#0F2D52] transition-colors duration-300 group-hover:text-[#4FA9FF]">
                  Add
                </span>
                <span className="text-[#4FA9FF] transition-colors duration-300 group-hover:text-[#0F2D52]">
                  bill
                </span>
              </span>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.label === "Services" ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        className="flex items-center gap-1 text-[#0F2D52] hover:text-[#4FA9FF] transition-colors duration-300 font-medium text-base focus:outline-none focus:text-[#4FA9FF]"
                        aria-haspopup="true"
                        aria-expanded={servicesDropdownOpen}
                        aria-label="Services menu"
                      >
                        Services
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-100 py-2"
                            role="menu"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="block px-4 py-2 text-[#0F2D52] hover:text-[#4FA9FF] hover:bg-gray-50 transition-colors duration-200 font-medium"
                                role="menuitem"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.label === "Projects" ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setProjectsDropdownOpen(true)}
                      onMouseLeave={() => setProjectsDropdownOpen(false)}
                    >
                      <button
                        className="flex items-center gap-1 text-[#0F2D52] hover:text-[#4FA9FF] transition-colors duration-300 font-medium text-base focus:outline-none focus:text-[#4FA9FF]"
                        aria-haspopup="true"
                        aria-expanded={projectsDropdownOpen}
                        aria-label="Projects menu"
                      >
                        Projects
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {projectsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-100 py-2"
                            role="menu"
                          >
                            {projects.map((project) => (
                              <Link
                                key={project.href}
                                href={project.href}
                                className="block px-4 py-2 text-[#0F2D52] hover:text-[#4FA9FF] hover:bg-gray-50 transition-colors duration-200 font-medium"
                                role="menuitem"
                              >
                                {project.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#0F2D52] hover:text-[#4FA9FF] transition-colors duration-300 font-medium text-base focus:outline-none focus:text-[#4FA9FF]"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-[#4FA9FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#3D8FE0] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] focus:ring-offset-2 transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>

            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#0F2D52] hover:text-[#4FA9FF] hover:bg-gray-50 focus:outline-none focus:text-[#4FA9FF]"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white/95 backdrop-blur-md shadow-2xl lg:hidden"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2 rounded-lg text-[#0F2D52] hover:text-[#4FA9FF] hover:bg-gray-50 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="flex flex-col space-y-2 mt-8">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.label === "Services" ? (
                      <div className="flex flex-col space-y-1">
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex items-center justify-between text-lg font-medium text-[#0F2D52] hover:text-[#4FA9FF] transition-colors duration-200 py-2 focus:outline-none"
                          aria-expanded={mobileServicesOpen}
                          aria-label="Toggle Services submenu"
                        >
                          <span>Services</span>
                          <motion.div
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 flex flex-col space-y-2 mt-1">
                                {services.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={toggleMobileMenu}
                                    className="text-base text-[#6B7280] hover:text-[#4FA9FF] transition-colors duration-200 py-1"
                                  >
                                    {service.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : link.label === "Projects" ? (
                      <div className="flex flex-col space-y-1">
                        <button
                          type="button"
                          onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                          className="flex items-center justify-between text-lg font-medium text-[#0F2D52] hover:text-[#4FA9FF] transition-colors duration-200 py-2 focus:outline-none"
                          aria-expanded={mobileProjectsOpen}
                          aria-label="Toggle Projects submenu"
                        >
                          <span>Projects</span>
                          <motion.div
                            animate={{ rotate: mobileProjectsOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {mobileProjectsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 flex flex-col space-y-2 mt-1">
                                {projects.map((project) => (
                                  <Link
                                    key={project.href}
                                    href={project.href}
                                    onClick={toggleMobileMenu}
                                    className="text-base text-[#6B7280] hover:text-[#4FA9FF] transition-colors duration-200 py-1"
                                  >
                                    {project.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={toggleMobileMenu}
                        className="text-lg font-medium text-[#0F2D52] hover:text-[#4FA9FF] transition-colors duration-200 py-2 focus:outline-none"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="/contact"
                    onClick={toggleMobileMenu}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#4FA9FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#3D8FE0] focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] transition-all duration-300"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}