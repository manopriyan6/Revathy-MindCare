"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/psychologists", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/logo.jpeg"
              alt="Revathy Mind Care Logo"
              width={52}
              height={52}
              className="rounded-full object-cover shadow-md border-2 border-[#A8D5BA] group-hover:border-[#4A90E2] transition-colors"
              priority
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#4A90E2] leading-tight tracking-tight">
              Revathy Mind Care
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Your Safe Space for Mental Wellness
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#4A90E2] hover:bg-blue-50 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919159715236"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#4A90E2] hover:underline"
          >
            <Phone size={15} />
            +91 9159715236
          </a>
          <Link
            href="/booking"
            className="hidden sm:inline-flex bg-[#4A90E2] hover:bg-[#2563eb] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-blue-200 transition-all hover:scale-105"
          >
            Book Appointment
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-700 font-medium border-b border-gray-50 hover:text-[#4A90E2] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block w-full text-center bg-[#4A90E2] text-white font-semibold py-3 rounded-full"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
