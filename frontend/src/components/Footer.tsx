import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-gray-300">
      {/* Emergency Banner */}
      <div className="bg-[#C0392B] py-3 px-4 text-center text-white font-semibold flex items-center justify-center gap-3">
        <span className="animate-pulse text-lg">🚨</span>
        Mental Health Crisis? Call KIRAN Now:{" "}
        <a href="tel:1800-599-0019" className="underline font-bold">
          1800-599-0019
        </a>
        <span className="text-white/60 text-sm">(24/7, Free)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Revathy Mind Care Logo"
              width={44}
              height={44}
              className="rounded-full border-2 border-[#A8D5BA]/40"
            />
            <div>
              <p className="font-bold text-white text-sm">Revathy Mind Care</p>
              <p className="text-xs text-gray-400">Your Safe Space</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Professional online psychological counselling dedicated to
            supporting emotional well-being and mental health.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/psychologists", label: "Our Psychologists" },
              { href: "/booking", label: "Book Appointment" },
              { href: "/blog", label: "Mental Health Blog" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-400 hover:text-[#A8D5BA] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
            Legal
          </h3>
          <ul className="space-y-2">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
              { href: "/disclaimer", label: "Disclaimer" },
              { href: "/consent", label: "Informed Consent" },
              { href: "/emergency", label: "Emergency Support" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-400 hover:text-[#A8D5BA] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Phone size={15} className="text-[#A8D5BA] shrink-0" />
              <a
                href="tel:+919159715236"
                className="hover:text-[#A8D5BA] transition-colors"
              >
                +91 9159715236
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Mail size={15} className="text-[#A8D5BA] shrink-0" />
              <a
                href="mailto:revathymindcare@gmail.com"
                className="hover:text-[#A8D5BA] transition-colors break-all"
              >
                revathymindcare@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <Clock size={15} className="text-[#A8D5BA] shrink-0 mt-0.5" />
              <div>
                <p>Mon–Sat: 5:00 PM – 10:00 PM</p>
                <p>Sunday: 10:00 AM – 10:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Revathy Mind Care. All rights reserved. |
        Online Psychological Counselling Services
      </div>
    </footer>
  );
}
