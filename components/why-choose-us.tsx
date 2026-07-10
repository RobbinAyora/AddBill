import { ShieldCheck, Clock, Users, Award, Wrench, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Experience",
    description:
      "Years of hands-on expertise delivering residential and commercial projects across the region.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured — giving you complete peace of mind on every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We plan meticulously and execute efficiently to keep every project on schedule.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description:
      "A team of trained, experienced professionals committed to craftsmanship and safety.",
  },
  {
    icon: Wrench,
    title: "Quality Materials",
    description:
      "We use durable, industry-standard materials to ensure every build stands the test of time.",
  },
  {
    icon: ThumbsUp,
    title: "Client Satisfaction",
    description:
      "Transparent communication and dedicated support from consultation through project handover.",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "10+", label: "Years in Business" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Site Support" },
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
            We combine experience, reliability, and craftsmanship to deliver
            construction solutions you can trust from start to finish.
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