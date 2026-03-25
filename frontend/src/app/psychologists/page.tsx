import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Psychologists | Revathy Mind Care",
  description:
    "Meet our qualified team of counselling psychologists at Revathy Mind Care.",
};

const psychologists = [
  {
    id: 1,
    name: "Mr. Praveen Ravi",
    qualification: "M.A., B.Lib., M.Lib.ISc., M.SC",
    role: "Founder & Psychologist",
    languages: ["English", "Tamil"],
    badge: "Founder",
    badgeColor: "bg-[#4A90E2]",
    photo: "/doctors/praveen-ravi.jpeg",
    slug: "praveen-ravi",
    specialties: [
      "Individual Counselling",
      "Mental Health Awareness",
      "Psychological Assessment",
    ],
    timings: "Mon–Sun: 5:00 PM – 10:00 PM",
    gradient: "from-[#4A90E2]/10 to-[#A8D5BA]/10",
    accentColor: "#4A90E2",
  },
  {
    id: 2,
    name: "Dr. Pavithra S",
    qualification: "MBBS",
    role: "General Physician",
    languages: ["English", "Tamil"],
    badge: "Physician",
    badgeColor: "bg-[#22c55e]",
    photo: "/doctors/pavithra.jpeg",
    slug: "pavithra",
    specialties: ["Medical Support", "Health Assessment", "Wellness Guidance"],
    timings: "Mon–Sat: 5:00 PM – 10:00 PM",
    gradient: "from-[#A8D5BA]/10 to-[#4A90E2]/10",
    accentColor: "#22c55e",
  },
  {
    id: 3,
    name: "Ms. Nivetha S",
    qualification: "M.SC",
    role: "Counselling Psychologist",
    languages: ["English", "Tamil"],
    badge: "Counsellor",
    badgeColor: "bg-[#f59e0b]",
    photo: "/doctors/nivetha.jpeg",
    slug: "nivetha",
    specialties: [
      "Anxiety Counselling",
      "Student Counselling",
      "Stress Management",
    ],
    timings: "Mon–Sat: 5:00 PM – 10:00 PM",
    gradient: "from-[#F4C430]/10 to-[#A8D5BA]/10",
    accentColor: "#f59e0b",
  },
  {
    id: 4,
    name: "Ms. M. Yalini",
    qualification: "M.SC",
    role: "Psychologist",
    languages: ["English", "Tamil", "Hindi"],
    badge: "Multilingual",
    badgeColor: "bg-[#7c3aed]",
    photo: "/doctors/yalini.jpeg",
    slug: "yalini",
    specialties: [
      "Relationship Counselling",
      "Adolescent Counselling",
      "Career Counselling",
    ],
    timings: "Mon–Sun: 5:00 PM – 10:00 PM",
    gradient: "from-[#a78bfa]/10 to-[#4A90E2]/10",
    accentColor: "#7c3aed",
  },
  {
    id: 5,
    name: "Ms. Krupa Elza Abraham",
    qualification: "MSW",
    role: "Social Worker & Counsellor",
    languages: ["English", "Malayalam"],
    badge: "Social Work",
    badgeColor: "bg-[#e11d48]",
    photo: "/doctors/krupa.jpeg",
    slug: "krupa",
    specialties: ["Social Support", "Parenting Guidance", "Group Counselling"],
    timings: "Mon–Sat: 5:00 PM – 10:00 PM",
    gradient: "from-[#fb7185]/10 to-[#f59e0b]/10",
    accentColor: "#e11d48",
  },
];

export default function PsychologistsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#e8f4fd] via-[#f0f9f4] to-[#fefbe8] py-20 px-4 text-center">
        <span className="text-[#A8D5BA] font-bold text-sm uppercase tracking-widest">
          🧑‍⚕️ Our Team
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mt-3 mb-4">
          Our Psychologists
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Meet our qualified team of mental health professionals dedicated to
          supporting your well-being with compassion, expertise, and
          confidentiality.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {psychologists.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Photo Area – Circular */}
              <div
                className={`relative bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center pt-8 pb-4`}
              >
                <div className="relative w-36 h-36 rounded-full border-4 border-white shadow-lg overflow-hidden" style={{ boxShadow: `0 0 0 4px ${p.accentColor}33, 0 10px 15px -3px rgba(0,0,0,0.1)` }}>
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      sizes="160px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl bg-gray-100">👩‍⚕️</div>
                  )}
                </div>
                {/* Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className={`${p.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}
                  >
                    {p.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e293b] mb-0.5">
                  {p.name}
                </h3>
                <p
                  className="text-xs font-semibold mb-1"
                  style={{ color: p.accentColor }}
                >
                  {p.qualification}
                </p>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  {p.role}
                </p>

                {/* Languages */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Globe size={13} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Languages
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-xs bg-[#f0f9ff] border border-[#4A90E2]/20 text-[#4A90E2] px-2.5 py-1 rounded-full font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Star size={13} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Specialties
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {p.specialties.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A8D5BA] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timings */}
                <p className="text-xs text-gray-400 mb-5">⏰ {p.timings}</p>

                <div className="flex gap-2">
                  <Link
                    href={`/psychologists/${p.slug}`}
                    className="flex-1 text-center border border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-semibold py-2.5 rounded-xl transition-all text-sm"
                  >
                    View Profile
                  </Link>
                  <Link
                    href={`/booking?doctor=${p.id}`}
                    className="flex-1 flex items-center justify-center gap-1 bg-[#4A90E2] hover:bg-[#2563eb] text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    Book <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#f0f9f4] to-[#e8f4fd] py-14 text-center px-4">
        <h2 className="text-2xl font-bold text-[#1e293b] mb-3">
          Not sure who to book with?
        </h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Our team will match you with the right psychologist based on your
          concern, language preference, and availability.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-[#4A90E2] hover:bg-[#2563eb] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
        >
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
