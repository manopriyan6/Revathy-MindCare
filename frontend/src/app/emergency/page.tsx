import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Support | Revathy Mind Care",
};

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#C0392B] py-20 px-4 text-center text-white">
        <div className="text-6xl mb-6 animate-pulse">🚨</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Emergency Support
        </h1>
        <p className="text-red-100 max-w-2xl mx-auto text-lg leading-relaxed">
          If you are experiencing a mental health crisis or having thoughts of
          self-harm, please seek <strong>immediate help</strong>.
        </p>
      </section>
      <section className="max-w-2xl mx-auto px-4 py-16 space-y-8 text-center">
        <div className="bg-[#fff1f2] border-2 border-[#C0392B]/30 rounded-3xl p-10">
          <h2 className="text-2xl font-extrabold text-[#C0392B] mb-2">
            India Mental Health Helpline
          </h2>
          <p className="text-gray-600 mb-6">
            24/7 free mental health support — available in multiple languages
            across India.
          </p>
          <a
            href="tel:1800-599-0019"
            className="inline-block bg-[#C0392B] hover:bg-[#A93226] text-white font-extrabold text-2xl px-12 py-5 rounded-full shadow-xl transition-all hover:scale-105"
          >
            📞 KIRAN – 1800-599-0019
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Toll-free · 24/7 · Free of charge
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>
              Revathy Mind Care does not provide emergency mental health
              services.
            </strong>{" "}
            Our platform is for scheduled online psychological counselling. For
            emergencies, please contact KIRAN or local emergency services
            immediately.
          </p>
        </div>
        <a
          href="/booking"
          className="inline-block text-[#4A90E2] font-semibold hover:underline"
        >
          ← Schedule a regular counselling session
        </a>
      </section>
    </div>
  );
}
