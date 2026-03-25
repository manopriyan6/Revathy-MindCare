import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Revathy Mind Care",
  description:
    "Get in touch with Revathy Mind Care. Phone, WhatsApp, email, and working hours.",
};

const hours = [
  { day: "Monday", time: "5:00 PM – 10:00 PM" },
  { day: "Tuesday", time: "5:00 PM – 10:00 PM" },
  { day: "Wednesday", time: "5:00 PM – 10:00 PM" },
  { day: "Thursday", time: "5:00 PM – 10:00 PM" },
  { day: "Friday", time: "5:00 PM – 10:00 PM" },
  { day: "Saturday", time: "5:00 PM – 10:00 PM" },
  { day: "Sunday", time: "10:00 AM – 10:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#e8f4fd] to-[#f0f9f4] py-20 px-4 text-center">
        <span className="text-[#A8D5BA] font-bold text-sm uppercase tracking-widest">
          📞 Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mt-3 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
          Revathy Mind Care — Online Psychological Counselling Services.
          We&apos;re here for you.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1e293b]">Contact Details</h2>

          <div className="bg-gradient-to-br from-[#e8f4fd] to-[#dbeafe] border border-[#4A90E2]/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-bold text-[#1e293b] mb-1">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+919159715236"
                  className="text-[#4A90E2] font-semibold text-lg hover:underline block"
                >
                  +91 9159715236
                </a>
                <a
                  href="https://wa.me/919159715236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold text-sm hover:underline mt-1 block"
                >
                  💬 Open in WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-3 border-t border-white/40">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-bold text-[#1e293b] mb-1">Email</p>
                <a
                  href="mailto:revathymindcare@gmail.com"
                  className="text-[#4A90E2] font-semibold hover:underline break-all"
                >
                  revathymindcare@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-3 border-t border-white/40">
              <span className="text-2xl">💻</span>
              <div>
                <p className="font-bold text-[#1e293b] mb-1">Service Mode</p>
                <p className="text-gray-600 text-sm">
                  All counselling sessions are conducted <strong>online</strong>{" "}
                  via secure video/audio platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency */}
          <div className="bg-[#C0392B]/5 border border-[#C0392B]/20 rounded-2xl p-6">
            <h3 className="font-bold text-[#C0392B] flex items-center gap-2 mb-2">
              🚨 Emergency Support
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Revathy Mind Care does not provide emergency mental health
              services. If you are in crisis, please contact:
            </p>
            <a
              href="tel:1800-599-0019"
              className="inline-block bg-[#C0392B] text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[#A93226] transition-colors"
            >
              KIRAN – 1800-599-0019 (Free 24/7)
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            🕒 Working Hours
          </h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {hours.map((h, i) => (
              <div
                key={i}
                className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"} ${h.day === "Sunday" ? "border-t-2 border-[#4A90E2]/20" : ""}`}
              >
                <span
                  className={`font-semibold text-sm ${h.day === "Sunday" ? "text-[#4A90E2]" : "text-gray-700"}`}
                >
                  {h.day}
                </span>
                <span
                  className={`text-sm font-medium ${h.day === "Sunday" ? "text-[#4A90E2]" : "text-gray-500"}`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            All times are in IST (Indian Standard Time)
          </p>

          <div className="mt-8 bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-2xl p-6 border border-[#A8D5BA]/30">
            <h3 className="font-bold text-[#1e293b] mb-2">
              📅 Book an Appointment
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Fill out your details and we&apos;ll get back to you shortly to
              confirm your session.
            </p>
            <a
              href="/booking"
              className="inline-block bg-[#4A90E2] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#2563eb] transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
