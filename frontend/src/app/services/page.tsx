import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Counselling Services | Revathy Mind Care",
  description:
    "Explore all counselling services offered by Revathy Mind Care including Individual, Student, Anxiety, Relationship, Career counselling and more.",
};

const services = [
  {
    icon: "🌱",
    title: "Individual Counselling",
    desc: "One-to-one counselling sessions are designed to help individuals explore their thoughts, emotions, and behaviours in a safe and supportive environment.",
    color: "from-[#e8f4fd] to-[#dbeafe]",
    border: "border-[#4A90E2]/20",
  },
  {
    icon: "🎓",
    title: "Student Counselling",
    desc: "Support for students dealing with academic pressure, exam stress, career uncertainty, and emotional challenges.",
    color: "from-[#f0fdf4] to-[#dcfce7]",
    border: "border-[#A8D5BA]/30",
  },
  {
    icon: "🌊",
    title: "Stress & Anxiety Management",
    desc: "Guidance and psychological strategies to manage stress, anxiety, and overwhelming emotions effectively.",
    color: "from-[#fefce8] to-[#fef9c3]",
    border: "border-[#F4C430]/30",
  },
  {
    icon: "🤝",
    title: "Relationship Counselling",
    desc: "Helping individuals improve communication, resolve conflicts, and strengthen personal relationships.",
    color: "from-[#fdf4ff] to-[#fae8ff]",
    border: "border-purple-200",
  },
  {
    icon: "💼",
    title: "Career Counselling",
    desc: "Professional guidance to help individuals make informed career choices based on their interests, skills, and goals.",
    color: "from-[#fff7ed] to-[#ffedd5]",
    border: "border-orange-200",
  },
  {
    icon: "💻",
    title: "Online Therapy",
    desc: "All sessions are conducted online through secure and confidential video or audio platforms, ensuring convenience and accessibility.",
    color: "from-[#e8f4fd] to-[#dbeafe]",
    border: "border-[#4A90E2]/20",
  },
  {
    icon: "📋",
    title: "Psychological Assessment",
    desc: "Professional assessments to understand emotional, behavioural, and personality patterns.",
    details: [
      "Stress assessment",
      "Anxiety screening",
      "Personality assessment",
      "Emotional well-being assessment",
    ],
    color: "from-[#f0fdf4] to-[#dcfce7]",
    border: "border-[#A8D5BA]/30",
  },
  {
    icon: "👪",
    title: "Parenting Guidance",
    desc: "Helping parents manage children's emotional, behavioural, and academic challenges through practical strategies and psychological guidance.",
    color: "from-[#fefce8] to-[#fef9c3]",
    border: "border-[#F4C430]/30",
  },
  {
    icon: "📢",
    title: "Mental Health Awareness Programs",
    desc: "Online/Offline workshops and awareness sessions for Schools, Colleges, and Corporate organizations.",
    details: ["Schools", "Colleges", "Corporate organizations"],
    color: "from-[#fdf4ff] to-[#fae8ff]",
    border: "border-purple-200",
  },
  {
    icon: "👫",
    title: "Pre-Marital Counselling",
    desc: "Counselling for couples preparing for marriage, helping build a strong emotional foundation and effective communication.",
    color: "from-[#fff7ed] to-[#ffedd5]",
    border: "border-orange-200",
  },
  {
    icon: "🌟",
    title: "Life Skills Coaching",
    desc: "Developing practical life skills—time management, emotional regulation, communication, and resilience building.",
    color: "from-[#e8f4fd] to-[#dbeafe]",
    border: "border-[#4A90E2]/20",
  },
  {
    icon: "👥",
    title: "Group Counselling",
    desc: "Shared therapeutic experiences in a supportive group setting facilitated by a professional psychologist.",
    color: "from-[#f0fdf4] to-[#dcfce7]",
    border: "border-[#A8D5BA]/30",
  },
  {
    icon: "🧒",
    title: "Adolescent Counselling",
    desc: "Specialized support for teenagers navigating identity, peer pressure, academic stress, and emotional upheaval.",
    color: "from-[#fefce8] to-[#fef9c3]",
    border: "border-[#F4C430]/30",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#e8f4fd] to-[#f0f9f4] py-20 px-4 text-center">
        <span className="text-[#A8D5BA] font-bold text-sm uppercase tracking-widest">
          💬 What We Offer
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mt-3 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Professional counselling tailored to your individual needs. All
          sessions are conducted online — confidentially, compassionately, and
          conveniently.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${s.color} border ${s.border} rounded-3xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all group`}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3 group-hover:text-[#4A90E2] transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {s.desc}
              </p>
              {s.details && (
                <ul className="mt-3 space-y-1">
                  {s.details.map((d, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A90E2] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href="/booking"
                className="mt-5 inline-flex items-center gap-1 text-[#4A90E2] font-semibold text-sm hover:underline"
              >
                Book this service →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#4A90E2] to-[#2563eb] py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Begin?</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Take the first step toward better mental health. Book your online
          counselling session today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="bg-[#F4C430] hover:bg-yellow-400 text-[#1e293b] font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
          >
            📅 Book Appointment
          </Link>
          <a
            href="tel:+919159715236"
            className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all"
          >
            📞 +91 9159715236
          </a>
        </div>
      </section>
    </div>
  );
}
