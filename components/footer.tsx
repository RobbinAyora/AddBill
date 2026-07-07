"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
    Building2,

    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
} from "lucide-react";

const footerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
};

export default function Footer() {
    return (
        <footer className="mt-24">

            {/* CTA */}

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={footerVariants}
                className="bg-[#F59E0B] py-20 px-6"
            >
                <motion.div
                    variants={itemVariants}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-5">
                        Ready to Build Your Dream Project?
                    </h2>

                    <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                        Whether you're planning a residential home, commercial building,
                        renovation, or large-scale development, Addbill is ready to turn
                        your vision into reality.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[#0F172A] px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Get a Free Quote
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </motion.section>

            {/* Wave Divider */}

            <svg
                className="-mb-1"
                viewBox="0 0 1440 120"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#0F172A"
                    d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
                />
            </svg>

            {/* Main Footer */}

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={footerVariants}
                className="bg-[#0F172A] text-white relative overflow-hidden"
            >

                {/* Background Pattern */}

                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,.08)_25px),linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:25px_25px]" />

                <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* Company */}

                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-5">

                            <Building2
                                className="text-[#F59E0B]"
                                size={34}
                            />

                            <h3 className="text-3xl font-black">
                                Add<span className="text-[#F59E0B]">bill</span>
                            </h3>
                        </div>

                        <p className="text-white/70 leading-7 mb-8">
                            Building exceptional residential, commercial and infrastructure
                            projects through innovation, quality craftsmanship and trusted
                            engineering.
                        </p>

                        <div className="flex gap-4">

                            {[FaFacebookF,
                                FaInstagram,
                                FaLinkedinIn,].map((Icon, i) => (
                                    <motion.a
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        key={i}
                                        href="#"
                                        className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F59E0B] transition"
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                ))}

                        </div>
                    </motion.div>

                    {/* Quick Links */}

                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-bold mb-6">
                            Quick Links
                        </h4>

                        <div className="space-y-4">
                            {[
                                "Home",
                                "About",
                                "Services",
                                "Projects",
                                "Blog",
                                "Contact",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    className="block text-white/70 hover:text-[#F59E0B] hover:translate-x-2 transition-all duration-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services */}

                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-bold mb-6">
                            Services
                        </h4>

                        <div className="space-y-4 text-white/70">

                            <p>Residential Construction</p>

                            <p>Commercial Construction</p>

                            <p>Renovation</p>

                            <p>Civil Engineering</p>

                            <p>Project Management</p>

                            <p>Interior Design</p>

                        </div>
                    </motion.div>

                    {/* Contact */}

                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-bold mb-6">
                            Contact
                        </h4>

                        <div className="space-y-6">

                            <div className="flex gap-3">

                                <MapPin className="text-[#F59E0B]" />

                                <span className="text-white/70">
                                    Nairobi, Kenya
                                </span>

                            </div>

                            <div className="flex gap-3">

                                <Phone className="text-[#F59E0B]" />

                                <span className="text-white/70">
                                    +254 700 123 456
                                </span>

                            </div>

                            <div className="flex gap-3">

                                <Mail className="text-[#F59E0B]" />

                                <span className="text-white/70">
                                    info@addbill.com
                                </span>

                            </div>

                            <div className="flex gap-3">

                                <Clock className="text-[#F59E0B]" />

                                <span className="text-white/70">
                                    Mon - Fri
                                    <br />
                                    8:00 AM - 6:00 PM
                                </span>

                            </div>

                        </div>
                    </motion.div>

                </div>

                {/* Bottom Bar */}

                <div className="border-t border-white/10">

                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

                        <p className="text-white/60 text-sm">
                            © {new Date().getFullYear()} Addbill Construction. All rights
                            reserved.
                        </p>

                        <div className="flex gap-8 text-sm">

                            <Link
                                href="/privacy"
                                className="hover:text-[#F59E0B] transition"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="hover:text-[#F59E0B] transition"
                            >
                                Terms of Service
                            </Link>

                        </div>

                    </div>

                </div>

            </motion.div>
        </footer>
    );
}