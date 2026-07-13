import { ShieldCheck, Calculator, Clock, Users, FileCheck, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Calculator,
    title: "Accurate Cost Estimates",
    description:
      "Detailed, reliable cost plans and bills of quantities that keep your project financially sound from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Accredited",
    description:
      "Fully licensed and registered quantity surveying practice, giving you complete confidence in every valuation and certificate.",
  },
  {
    icon: Clock,
    title: "Timely Reporting",
    description:
      "Prompt cost reports, valuations, and payment certificates so your project's finances never fall behind schedule.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "A team of qualified quantity surveyors with hands-on experience across residential, commercial, and public sector projects.",
  },
  {
    icon: FileCheck,
    title: "Rigorous Contract Oversight",
    description:
      "Meticulous contract administration that protects your interests and ensures compliance at every stage.",
  },
  {
    icon: ThumbsUp,
    title: "Client-Focused Service",
    description:
      "Transparent communication and dedicated support from feasibility through final account.",
  },
];

const stats = [
  { value: "50+", label: "Projects Costed" },
  { value: "10+", label: "Years in Business" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "KES 1B+", label: "Value Managed" },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F7F9FC] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block h-1 w-12 bg-[#4FA9FF] mb-4 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-4">
            Why Choose Us
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
            We combine technical expertise, precision, and transparency to
            help clients plan, cost, and deliver construction projects with
            confidence.
          </p>
        </div>

        {/* Icon grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F2D52] flex items-center justify-center mb-4 group-hover:bg-[#4FA9FF] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#4FA9FF] group-hover:text-[#0F2D52] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F2D52] mb-2">
                  {reason.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="bg-[#0F2D52] rounded-2xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-[#4FA9FF] mb-1">
                {stat.value}
              </div>
              <div className="text-sky-100 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}