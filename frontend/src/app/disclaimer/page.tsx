import { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer | Revathy Mind Care" };

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#fef9c3] to-[#fefce8] py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-[#1e293b]">
          ⚠️ Disclaimer
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Please read our limitations and disclaimer carefully.
        </p>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-14 space-y-6 text-gray-700 leading-relaxed">
        <div className="bg-[#fefce8] border border-[#F4C430]/40 rounded-2xl p-6">
          <p>
            The services provided by <strong>Revathy Mind Care</strong> are
            intended for{" "}
            <strong>
              psychological counselling and emotional support purposes only
            </strong>
            .
          </p>
        </div>
        <div className="bg-[#fff1f2] border border-[#C0392B]/20 rounded-2xl p-6">
          <p>
            Our services <strong>do not replace</strong> medical diagnosis,
            psychiatric treatment, or emergency mental health care. If you are
            experiencing a mental health emergency or are in immediate danger,
            please contact local emergency services or a mental health crisis
            helpline immediately.
          </p>
          <a
            href="tel:1800-599-0019"
            className="inline-block mt-4 bg-[#C0392B] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#A93226] transition-colors"
          >
            🚨 KIRAN – 1800-599-0019
          </a>
        </div>
      </section>
    </div>
  );
}
