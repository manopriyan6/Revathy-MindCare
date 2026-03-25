"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, Clock, Globe, Star, Phone, Calendar } from "lucide-react";

const doctors = [
  {
    id: 1,
    slug: "praveen-ravi",
    name: "Mr. Praveen Ravi",
    qualification: "M.A., B.Lib., M.Lib.ISc., M.SC",
    role: "Founder & Counselling Psychologist",
    languages: ["English", "Tamil"],
    badge: "Founder",
    photo: "/doctors/praveen-ravi.jpeg",
    description:
      "Mr. Praveen Ravi is the founder of Revathy Mind Care, committed to promoting mental health awareness and providing accessible psychological support. With a strong passion for helping individuals overcome emotional and psychological challenges, he established Revathy Mind Care with the vision of creating a safe and supportive space for mental wellbeing. Through professional counselling services, Revathy Mind Care aims to help individuals improve emotional health, develop resilience, and lead more balanced lives.",
    specialties: [
      "Individual Counselling",
      "Mental Health Awareness",
      "Psychological Assessment",
      "Life Skills Coaching",
      "Group Counselling",
    ],
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    timings: "5:00 PM – 10:00 PM",
    sundayTimings: "10:00 AM – 10:00 PM",
    color: "#4A90E2",
  },
  {
    id: 2,
    slug: "pavithra",
    name: "Dr. Pavithra S",
    qualification: "MBBS",
    role: "General Physician",
    languages: ["English", "Tamil"],
    badge: "Physician",
    photo: "/doctors/pavithra.jpeg",
    description:
      "Dr. Pavithra S is a qualified General Physician providing medical support and wellness guidance at Revathy Mind Care. She brings a holistic medical perspective to the counselling team, ensuring clients receive comprehensive health and mental wellness support.",
    specialties: ["Medical Support", "Health Assessment", "Wellness Guidance"],
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    timings: "5:00 PM – 10:00 PM",
    color: "#22c55e",
  },
  {
    id: 3,
    slug: "nivetha",
    name: "Ms. Nivetha S",
    qualification: "M.SC",
    role: "Counselling Psychologist",
    languages: ["English", "Tamil"],
    badge: "Counsellor",
    photo: "/doctors/nivetha.jpeg",
    description:
      "Ms. Nivetha S is a dedicated Counselling Psychologist specializing in anxiety management, student counselling, and stress management. She provides evidence-based therapeutic support in a compassionate and non-judgmental environment, helping clients build resilience and develop effective coping strategies.",
    specialties: [
      "Anxiety Counselling",
      "Student Counselling",
      "Stress Management",
      "Adolescent Counselling",
      "Emotional Wellbeing",
    ],
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    timings: "5:00 PM – 10:00 PM",
    color: "#f59e0b",
  },
  {
    id: 4,
    slug: "yalini",
    name: "Ms. M. Yalini",
    qualification: "M.SC",
    role: "Psychologist",
    languages: ["English", "Tamil", "Hindi"],
    badge: "Multilingual",
    photo: "/doctors/yalini.jpeg",
    description:
      "Ms. M. Yalini is a multilingual Psychologist fluent in English, Tamil, and Hindi. She specializes in relationship counselling, adolescent mental health, and career guidance, making her services accessible to a diverse range of clients across India. Her warm and empathetic approach creates a safe space for clients to explore their challenges.",
    specialties: [
      "Relationship Counselling",
      "Adolescent Counselling",
      "Career Counselling",
      "Pre-Marital Counselling",
      "Parenting Guidance",
    ],
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    timings: "5:00 PM – 10:00 PM",
    sundayTimings: "10:00 AM – 10:00 PM",
    color: "#7c3aed",
  },
  {
    id: 5,
    slug: "krupa",
    name: "Ms. Krupa Elsa Abraham",
    qualification: "MSW",
    role: "Social Worker & Counsellor",
    languages: ["English", "Malayalam"],
    badge: "Social Work",
    photo: "/doctors/krupa.jpeg",
    description:
      "Ms. Krupa Elsa Abraham is a qualified Social Worker and Counsellor bringing a unique social work perspective to mental health support. She specializes in social welfare, parenting guidance, and group counselling, with fluency in English and Malayalam. Her community-oriented approach helps clients navigate both personal and systemic challenges.",
    specialties: [
      "Social Support",
      "Parenting Guidance",
      "Group Counselling",
      "Community Support",
      "Emotional Wellbeing",
    ],
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    timings: "5:00 PM – 10:00 PM",
    color: "#e11d48",
  },
];

export default function DoctorProfilePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link
          href="/psychologists"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#4A90E2] transition-colors font-medium"
        >
          <ArrowLeft size={16} /> Back to Our Team
        </Link>
      </div>

      {/* Profile Hero */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-br from-[#f0f9ff] to-[#f0fdf4] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="relative w-full md:w-72 h-72 md:h-auto shrink-0">
              {doctor.photo ? (
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 288px"
                  priority
                />
              ) : (
                <div
                  className="w-full h-72 flex items-center justify-center text-8xl"
                  style={{ background: `${doctor.color}15` }}
                >
                  👩‍⚕️
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 p-8">
              <span
                className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: doctor.color }}
              >
                {doctor.badge}
              </span>
              <h1 className="text-3xl font-extrabold text-[#1e293b] mb-1">
                {doctor.name}
              </h1>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: doctor.color }}
              >
                {doctor.qualification}
              </p>
              <p className="text-gray-500 mb-6 font-medium">{doctor.role}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe size={16} style={{ color: doctor.color }} />
                  <span>{doctor.languages.join(" | ")}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={16} style={{ color: doctor.color }} />
                  <span>{doctor.timings}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={16} style={{ color: doctor.color }} />
                  <a href="tel:+919159715236" className="hover:underline">
                    +91 9159715236
                  </a>
                </div>
              </div>

              <Link
                href={`/booking?doctor=${doctor.id}`}
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: doctor.color }}
              >
                <Calendar size={18} /> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="max-w-5xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">
              {doctor.description}
            </p>
          </div>

          {/* Specialties */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Star size={18} style={{ color: doctor.color }} />
              <h2 className="text-xl font-bold text-[#1e293b]">
                Areas of Expertise
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {doctor.specialties.map((s) => (
                <span
                  key={s}
                  className="text-sm font-medium px-4 py-2 rounded-full border"
                  style={{
                    color: doctor.color,
                    borderColor: `${doctor.color}40`,
                    background: `${doctor.color}08`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Availability */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={18} style={{ color: doctor.color }} />
              <h3 className="font-bold text-[#1e293b]">Availability</h3>
            </div>
            <ul className="space-y-2">
              {doctor.availableDays.map((day) => (
                <li
                  key={day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-600 font-medium">{day}</span>
                  <span className="text-gray-500 text-xs">
                    {day === "Sunday" && doctor.sundayTimings
                      ? doctor.sundayTimings
                      : doctor.timings}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sessions Online */}
          <div
            className="rounded-2xl p-6 text-white"
            style={{
              background: `linear-gradient(135deg, ${doctor.color}, ${doctor.color}cc)`,
            }}
          >
            <p className="font-bold mb-2">🌐 Online Sessions</p>
            <p className="text-sm text-white/90">
              All sessions are conducted online via secure video/audio
              platforms. Ensure a stable internet connection.
            </p>
          </div>

          <Link
            href={`/booking?doctor=${doctor.id}`}
            className="w-full flex items-center justify-center gap-2 bg-[#4A90E2] hover:bg-[#2563eb] text-white font-bold py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.02] text-base"
          >
            📅 Book a Session
          </Link>
        </div>
      </section>
    </div>
  );
}
