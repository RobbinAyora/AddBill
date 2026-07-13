"use client";

import { motion } from "framer-motion";
import ConstructionAnimation from "./construction-animation";

const slideLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
};

const slideRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
};

export default function About() {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Description */}
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg"
        >
          <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-4">
            About Addbill Construction Solutions
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-4">
            Addbill Construction Solutions Limited is a professional quantity
            surveying firm dedicated to helping clients plan, control, and
            deliver construction projects with confidence. From accurate cost
            estimation to contract administration, we provide the technical
            expertise that keeps projects on budget and on track.
          </p>
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
            Our team combines industry experience with meticulous attention
            to detail, guiding clients through tendering, procurement, and
            project valuation with transparency at every stage. We believe
            sound cost management is the foundation of every successful
            build.
          </p>
        </motion.div>

        {/* Right: Illustrated Card */}
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md w-full aspect-[4/3] flex items-center justify-center"
        >
          <ConstructionAnimation />
        </motion.div>
      </div>
    </section>
  );
}