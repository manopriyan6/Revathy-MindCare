import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mental Health Blog | Revathy Mind Care",
  description:
    "Articles and resources on mental health, emotional wellbeing, and personal development.",
};

const articles = [
  {
    emoji: "😓",
    title: "Understanding Stress and How to Manage It",
    excerpt:
      "Stress is a part of modern life — but chronic stress can seriously impact your mental and physical health. Learn practical strategies to identify triggers and manage stress effectively.",
    category: "Stress Management",
    color: "bg-[#fefce8]",
    border: "border-[#F4C430]/30",
  },
  {
    emoji: "🧠",
    title: "Importance of Mental Health in Everyday Life",
    excerpt:
      "Mental health influences how we think, feel, and act. It also affects how we handle stress, relate to others, and make choices. Prioritizing it is not a luxury — it&apos;s a necessity.",
    category: "Mental Wellness",
    color: "bg-[#e8f4fd]",
    border: "border-[#4A90E2]/20",
  },
  {
    emoji: "😰",
    title: "Recognizing Signs of Anxiety",
    excerpt:
      "Anxiety can manifest in many ways — persistent worry, restlessness, sleep issues, or physical symptoms. Early recognition is key to seeking timely support.",
    category: "Anxiety",
    color: "bg-[#f0fdf4]",
    border: "border-[#A8D5BA]/30",
  },
  {
    emoji: "🎓",
    title: "How Counselling Can Help Students",
    excerpt:
      "Academic pressure, career uncertainty, and social challenges make students particularly vulnerable to mental health issues. Counselling provides a safe space to navigate these challenges.",
    category: "Student Wellness",
    color: "bg-[#fdf4ff]",
    border: "border-purple-200",
  },
  {
    emoji: "💆",
    title: "Simple Techniques for Emotional Well-being",
    excerpt:
      "From mindful breathing and journaling to physical activity and gratitude practice — small daily habits can make a significant difference to your emotional health.",
    category: "Self-Care",
    color: "bg-[#fff7ed]",
    border: "border-orange-200",
  },
  {
    emoji: "🤝",
    title: "The Role of Relationships in Mental Health",
    excerpt:
      "Healthy relationships are a cornerstone of well-being. Learn how to build stronger connections and navigate conflict constructively.",
    category: "Relationships",
    color: "bg-[#fefce8]",
    border: "border-[#F4C430]/30",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#e8f4fd] to-[#f0f9f4] py-20 px-4 text-center">
        <span className="text-[#A8D5BA] font-bold text-sm uppercase tracking-widest">
          🧠 Mental Health Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mt-3 mb-4">
          Resources & Insights
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Our blog provides helpful articles and resources on mental health,
          emotional wellbeing, and personal development — curated by our team of
          psychologists.
        </p>
      </section>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.map((a, i) => (
            <div
              key={i}
              className={`${a.color} border ${a.border} rounded-3xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer`}
            >
              <div className="text-4xl mb-4">{a.emoji}</div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A90E2] bg-[#4A90E2]/10 px-3 py-1 rounded-full">
                {a.category}
              </span>
              <h3 className="text-lg font-bold text-[#1e293b] mt-3 mb-3 group-hover:text-[#4A90E2] transition-colors leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {a.excerpt}
              </p>
              <button className="mt-5 text-[#4A90E2] font-semibold text-sm hover:underline flex items-center gap-1">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#A8D5BA] to-[#4A90E2] py-14 text-center px-4 text-white">
        <h2 className="text-2xl font-bold mb-4">
          Looking for Personal Support?
        </h2>
        <p className="text-white/80 mb-6 max-w-md mx-auto">
          Our articles offer general guidance, but nothing replaces personalized
          counselling.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-white text-[#4A90E2] font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
        >
          📅 Book a Counselling Session
        </Link>
      </section>
    </div>
  );
}
