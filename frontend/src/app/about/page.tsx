import { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Revathy Mind Care",
  description:
    "Learn about Revathy Mind Care, our vision, mission, and founder Mr. Praveen Ravi.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#e8f4fd] to-[#f0f9f4] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#A8D5BA] font-bold text-sm uppercase tracking-widest">
            👩‍⚕️ About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mt-3 mb-6">
            Who We Are
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Revathy Mind Care is a professional online mental health counselling
            service committed to promoting emotional wellbeing and psychological
            resilience.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-5 mb-16">
          <p>
            Our platform connects individuals with qualified psychologists who
            provide guidance and therapeutic support in a{" "}
            <strong>confidential and compassionate environment</strong>.
          </p>
          <p>
            We understand that life challenges such as stress, anxiety,
            relationship issues, academic pressure, and personal struggles can
            affect mental health. Our counselling approach focuses on helping
            individuals gain clarity, develop coping strategies, and improve
            emotional well-being.
          </p>
          <p>
            We believe that mental health care should be{" "}
            <strong>accessible, supportive, and stigma-free</strong>. Our goal
            is to help individuals understand their emotions, overcome
            challenges, and build healthier and more balanced lives.
          </p>
        </div>

        {/* Vision / Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Eye className="w-7 h-7 text-[#4A90E2]" />,
              title: "Our Vision",
              text: "To create a society where mental health support is accessible, accepted, and valued.",
              color: "from-[#e8f4fd] to-[#dbeafe]",
            },
            {
              icon: <Target className="w-7 h-7 text-[#A8D5BA]" />,
              title: "Our Mission",
              text: "To provide professional, ethical, and compassionate online psychological counselling that empowers individuals to lead balanced and fulfilling lives.",
              color: "from-[#f0fdf4] to-[#dcfce7]",
            },
            {
              icon: <Heart className="w-7 h-7 text-[#F4C430]" />,
              title: "Our Commitment",
              text: "Privacy, confidentiality, and dignity of every client is at the heart of everything we do.",
              color: "from-[#fefce8] to-[#fef9c3]",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-7 border border-gray-100 shadow-sm`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-[#1e293b] text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Founder */}
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#2563eb] rounded-3xl p-10 text-white">
          <h2 className="text-2xl font-extrabold mb-6 text-center">
            Our Founder
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-4 border-[#F4C430] relative">
              <Image
                src="/doctors/praveen-ravi.jpeg"
                alt="Mr. Praveen Ravi"
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Mr. Praveen Ravi</h3>
              <p className="text-blue-100 font-medium mb-4">
                Psychologist | Founder – Revathy Mind Care
              </p>
              <p className="text-white/90 leading-relaxed text-sm">
                Revathy Mind Care was founded by Mr. Praveen Ravi, a
                psychologist committed to promoting mental health awareness and
                providing accessible psychological support. With a strong
                passion for helping individuals overcome emotional and
                psychological challenges, he established Revathy Mind Care with
                the vision of creating a safe and supportive space for mental
                wellbeing.
              </p>
              <p className="text-white/90 leading-relaxed text-sm mt-3">
                Through professional counselling services, Revathy Mind Care
                aims to help individuals improve emotional health, develop
                resilience, and lead more balanced lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f0f9f4] py-14 text-center px-4">
        <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
          Ready to Start Your Journey?
        </h2>
        <Link
          href="/booking"
          className="inline-block bg-[#4A90E2] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
        >
          📅 Book a Session Today
        </Link>
      </section>
    </div>
  );
}
