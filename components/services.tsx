"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ServicesAnimation from "./services-animations";
import { Building2, Shovel, Hammer, Home } from "lucide-react";

const slideLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
};

const slideRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
};

const services = [
  {
    icon: Building2,
    title: "General Contracting",
    description:
      "End-to-end project management from planning to completion, ensuring quality, safety, and timelines are met at every stage.",
  },
  {
    icon: Shovel,
    title: "Excavation",
    description:
      "Precise site preparation and earthmoving services using modern equipment to lay the groundwork for any project.",
  },
  {
    icon: Hammer,
    title: "Foundation",
    description:
      "Solid, code-compliant foundations built to support structures of any scale, from residential to commercial developments.",
  },
  {
    icon: Home,
    title: "Roofing",
    description:
      "Durable, weather-resistant roofing solutions installed with precision to protect your investment for years to come.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 md:py-24">
      {/* Keep your existing background class/style on this <section> tag */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Slideshow animation */}
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
            <ServicesAnimation activeIndex={activeIndex} />
          </div>
          {/* Dot indicators */}
          <div className="flex gap-2 mt-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Show ${services[i].title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-[#FFC72C]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Services list */}
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <span className="inline-block h-1 w-12 bg-[#FFC72C] mb-4 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffff] mb-8">
            Our Services
          </h2>

          <div className="flex flex-col gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(i)}
                  className={`group flex items-start gap-4 p-5 rounded-xl border text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#FFC72C] bg-white shadow-md -translate-y-0.5"
                      : "border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "bg-[#FFC72C]" : "bg-[#2C2C2C] group-hover:bg-[#FFC72C]"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        isActive ? "text-[#2C2C2C]" : "text-[#FFC72C] group-hover:text-[#2C2C2C]"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}