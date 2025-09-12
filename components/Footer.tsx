"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8f5f0] border-t border-[#d6d3d1] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div>
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
          <p className="mt-4 text-sm text-[#4b2e2e] leading-relaxed">
            The trustworthy AI paralegal built for India’s legal ecosystem —
            empowering professionals with precision and efficiency.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4
            className="text-lg font-serif font-semibold text-[#1f1d1b] mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Product
          </h4>
          <ul className="space-y-2">
            {["Features", "Pricing", "FAQ"].map((label) => (
              <li key={label}>
                <Link
                  href={`#${label.toLowerCase()}`}
                  className="group relative text-[#1f1d1b] font-medium transition"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            className="text-lg font-serif font-semibold text-[#1f1d1b] mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Company
          </h4>
          <ul className="space-y-2">
            {[
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group relative text-[#1f1d1b] font-medium transition"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4
            className="text-lg font-serif font-semibold text-[#1f1d1b] mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Legal
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Disclaimer", href: "/disclaimer" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group relative text-[#1f1d1b] font-medium transition"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="border-t border-[#d6d3d1] mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <Link
              href="https://linkedin.com"
              className="text-[#1f1d1b] hover:text-[#4b2e2e] transition"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-[#1f1d1b] hover:text-[#4b2e2e] transition"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://github.com"
              className="text-[#1f1d1b] hover:text-[#4b2e2e] transition"
            >
              <Github size={20} />
            </Link>
          </div>

          <p className="text-sm text-[#4b2e2e]">
            © {new Date().getFullYear()} Paralegal AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
