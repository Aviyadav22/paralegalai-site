"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

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
            href="/features"
            className="group relative text-[#1f1d1b] font-medium transition"
          >
            Features
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
            href="/faq"
            className="group relative text-[#1f1d1b] font-medium transition"
          >
            FAQ
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          {status === "loading" ? (
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          ) : session ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 text-[#1f1d1b] font-medium hover:text-[#c5a880] transition"
              >
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-[#c5a880] rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                )}
                <span>{session.user?.name || "User"}</span>
              </button>
              
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                      <p className="text-xs text-gray-500">{session.user?.email}</p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href="/login"
              className="group relative text-[#1f1d1b] font-medium transition"
            >
              Sign In
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
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
                href="/features"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </Link>
              <hr className="border-[#d6d3d1]" />
              {status === "loading" ? (
                <div className="flex justify-center py-2">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                </div>
              ) : session ? (
                <div className="space-y-2">
                  <div className="px-2 py-2 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                    <p className="text-xs text-gray-500">{session.user?.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setMobileOpen(false);
                    }}
                    className="w-full text-left text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
              )}
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
