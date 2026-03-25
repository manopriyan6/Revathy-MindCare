import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informed Consent | Revathy Mind Care",
};

export default function ConsentPage() {
  const points = [
    "They are voluntarily participating in online counselling services.",
    "Online counselling may involve technological limitations such as internet interruptions.",
    "All sessions are confidential except in situations where there is a risk of harm or legal obligations to disclose information.",
    "Online counselling may not be suitable for emergency or crisis situations.",
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-[#1e293b]">
          📝 Informed Consent
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          For Online Counselling Sessions
        </p>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-14 space-y-6 text-gray-700 leading-relaxed">
        <p>
          By booking a session with <strong>Revathy Mind Care</strong>, clients
          acknowledge and agree that:
        </p>
        <ul className="space-y-4">
          {points.map((p, i) => (
            <li
              key={i}
              className="flex gap-4 bg-[#f0fdf4] border border-[#A8D5BA]/30 rounded-xl p-5"
            >
              <span className="text-[#A8D5BA] font-bold shrink-0">✓</span>
              <p className="text-sm leading-relaxed">{p}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
