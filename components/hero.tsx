"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/construction-1.png",
    heading: "Building Dreams Into Reality",
    subheading: "We create exceptional residential spaces designed to stand the test of time.",
    button: "Get a Quote",
    buttonLink: "/contact",
  },
  {
    image: "/construction-2.png",
    heading: "Commercial Construction Excellence",
    subheading: "Delivering world-class commercial projects with precision and efficiency.",
    button: "View Projects",
    buttonLink: "/projects",
  },
  {
    image: "/construction-3.png",
    heading: "Engineering The Future",
    subheading: "From infrastructure to large-scale developments, we build with confidence.",
    button: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/construction-4.png",
    heading: "Trusted Construction Partner",
    subheading: "Quality craftsmanship, innovative solutions, and reliable project delivery.",
    button: "Contact Us",
    buttonLink: "/contact",
  },
]

const particleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0, 0.5, 0],
    scale: [0, 1, 0],
    y: [0, -100, -200],
    x: [0, 20, 40],
  },
}

const headingVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
}

const subheadingVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
}

const buttonVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
}

const slideVariants = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 1 } },
}

const kenBurnsVariants = {
  initial: { scale: 1 },
  animate: { scale: 1.1, transition: { duration: 7, ease: "linear" } },
}

type Particle = {
  left: number
  width: number
  height: number
  duration: number
  delay: number
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  // Generate particle positions/timings only on the client, after mount,
  // to avoid server/client hydration mismatches from Math.random().
  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      width: 2 + Math.random() * 3,
      height: 2 + Math.random() * 3,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    }))
    setParticles(generated)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <link
          key={index}
          rel="preload"
          as="image"
          href={slide.image}
        />
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <motion.div
            variants={kenBurnsVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].heading}
              fill
              sizes="100vw"
              className="object-cover"
              priority={currentSlide === 0}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D52]/80 via-[#0F2D52]/40 to-transparent" />

      <div className="relative h-full flex items-center justify-end lg:justify-between">
        <div className="hidden lg:block lg:w-1/2" />

        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              className="lg:pr-8 lg:text-right lg:mx-auto lg:max-w-lg"
            >
              <motion.h1
                variants={headingVariants}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg lg:max-w-md lg:ml-auto"
              >
                {slides[currentSlide].heading}
              </motion.h1>

              <motion.p
                variants={subheadingVariants}
                className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 drop-shadow-md lg:max-w-md lg:ml-auto"
              >
                {slides[currentSlide].subheading}
              </motion.p>

              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={slides[currentSlide].buttonLink}
                  className="inline-block px-6 py-2.5 md:px-8 md:py-3 bg-[#4FA9FF] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3D8FE0] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FA9FF] focus:ring-offset-2"
                >
                  {slides[currentSlide].button}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-1-${i}`}
            custom={i}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="absolute top-full w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
            }}
          />
        ))}
      </div>
    </section>
  )
}