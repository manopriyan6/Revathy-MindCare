"use client";

import { motion } from "framer-motion";
import MoodOrb from "./MoodOrb";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  "Individual Counselling",
  "Student Counselling",
  "Stress Management",
  "Anxiety Counselling",
  "Relationship Counselling",
  "Career Counselling",
  "Adolescent Counselling",
  "Parenting Guidance",
  "Pre-Marital Counselling",
  "Psychological Assessments",
  "Life Skills Coaching",
  "Group Counselling",
  "Mental Health Awareness Programs",
  "Online Therapy Sessions",
];

const whyChoose = [
  "Qualified and experienced psychologists",
  "Confidential and secure online sessions",
  "Flexible appointment scheduling",
  "Supportive and non-judgmental environment",
  "Evidence-based counselling approaches",
];

export default function LotusPondHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#e8f4fd] via-[#f0f9f4] to-[#fefbe8]">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4A90E2]/20 to-[#A8D5BA]/20 blur-[120px]"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#A8D5BA]/20 to-[#F4C430]/10 blur-[140px]"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 py-20">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-left max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#A8D5BA] shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-semibold text-gray-700">
                Available for Online Sessions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1e293b] leading-[1.1] mb-4">
              🧠 Welcome to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#A8D5BA]">
                Revathy Mind Care
              </span>
            </h1>

            <p className="text-xl text-[#4A90E2] font-semibold mb-4 italic">
              &quot;Your Safe Space for Mental Wellness&quot;
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              At Revathy Mind Care, we offer professional online counselling
              services designed to support individuals facing emotional,
              psychological, and life challenges. Our experienced psychologists
              provide a <strong>safe and confidential space</strong> where
              clients can openly discuss their concerns and work towards
              personal growth and healing.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Mental health is an essential part of overall wellbeing. Through
              compassionate care and evidence-based psychological practices, we
              aim to empower individuals to develop healthier coping strategies
              and improve their quality of life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="flex items-center justify-center gap-2 bg-[#4A90E2] hover:bg-[#2563eb] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
              >
                📅 Book Your Appointment <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full font-semibold shadow-sm border border-gray-200 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right – AI Mood Orb */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <MoodOrb />
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[#A8D5BA] font-bold text-sm uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="text-4xl font-extrabold text-[#1e293b] mt-2">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#f0f9ff] to-[#f0fdf4] border border-blue-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-[#4A90E2]/10 flex items-center justify-center mb-3 group-hover:bg-[#4A90E2]/20 transition-colors">
                  <span className="text-[#4A90E2] text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#4A90E2] transition-colors">
                  {service}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#4A90E2] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#2563eb] transition-all shadow-md"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full bg-gradient-to-r from-[#4A90E2] to-[#2563eb] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Why Choose Revathy Mind Care?
          </h2>
          <p className="text-blue-100 mb-10 text-base">
            We believe mental health care should be accessible, supportive, and
            stigma-free.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((reason, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle2
                  className="text-[#A8D5BA] shrink-0 mt-0.5"
                  size={20}
                />
                <p className="text-white font-medium text-sm">{reason}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/booking"
              className="bg-[#F4C430] hover:bg-yellow-400 text-[#1e293b] font-bold px-10 py-4 rounded-full shadow-xl transition-all hover:scale-105 inline-block"
            >
              📅 Book Your Online Appointment Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
