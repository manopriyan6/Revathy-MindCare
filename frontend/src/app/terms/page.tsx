import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Revathy Mind Care",
};

export default function TermsPage() {
  const terms = [
    "Counselling sessions are conducted online.",
    "Clients are responsible for ensuring a stable internet connection.",
    "Appointments must be scheduled in advance.",
    "Cancellation or rescheduling should be informed at least 24 hours before the session.",
    "Counselling outcomes may vary depending on individual circumstances.",
    "Revathy Mind Care reserves the right to modify these terms when necessary.",
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#e8f4fd] to-[#f0f9f4] py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-[#1e293b]">
          📜 Terms & Conditions
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Please read our terms before booking a counselling session.
        </p>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-14 space-y-6 text-gray-700">
        <p className="leading-relaxed">
          By booking a counselling session with{" "}
          <strong>Revathy Mind Care</strong>, clients agree to the following
          terms:
        </p>
        <ul className="space-y-4">
          {terms.map((t, i) => (
            <li
              key={i}
              className="flex gap-4 bg-gradient-to-r from-[#e8f4fd] to-[#f0fdf4] border border-gray-100 rounded-xl p-5"
            >
              <span className="text-[#4A90E2] font-bold text-sm shrink-0 w-7 h-7 rounded-full bg-[#4A90E2]/10 flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed">{t}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
