"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f5f0]/95 backdrop-blur-md border-b border-[#d6d3d1] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Paralegal AI Logo"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <span
            className="text-xl font-serif font-bold text-[#1f1d1b]"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Paralegal AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="group relative text-[#1f1d1b] font-medium transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/pricing"
            className="group relative text-[#1f1d1b] font-medium transition"
          >
            Pricing
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#features"
            className="group relative text-[#1f1d1b] font-medium transition"
          >
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#faq"
            className="group relative text-[#1f1d1b] font-medium transition"
          >
            FAQ
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/paralegalai-legalresearch"
            target="_blank"
            className="group relative text-[#1f1d1b] font-medium transition"
          >
            Sign In
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="bg-[#1f1d1b] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#4b2e2e] transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#1f1d1b]"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f8f5f0] border-t border-[#d6d3d1] shadow-md overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#features"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </Link>
              <hr className="border-[#d6d3d1]" />
              <Link
                href="https://www.linkedin.com/company/paralegalai-legalresearch"
                target="_blank"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="bg-[#1f1d1b] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#4b2e2e] transition"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
