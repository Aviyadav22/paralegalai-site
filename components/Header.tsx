"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, LogOut, Settings, CreditCard, Shield } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const { data: session, status, update } = useSession();

  // Set client-side flag after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Force session update on component mount
  useEffect(() => {
    if (status === "unauthenticated") {
      update();
    }
  }, [status, update, session]);

  // Scroll detection for header hide/show
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past a threshold
      setIsScrolled(currentScrollY > 10);
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false);
      } else {
        // Scrolling up or at top - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isClient]);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <motion.header 
      initial={{ y: 0, height: "auto" }}
      animate={{ 
        y: isVisible ? 0 : -80,
        height: isScrolled ? "60px" : "80px"
      }}
      transition={{ 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled 
          ? 'bg-[#f8f5f0] border-b border-[#d6d3d1] shadow-lg' 
          : 'bg-[#f8f5f0] border-b border-[#d6d3d1] shadow-sm'
      }`}
    >
      <motion.div 
        animate={{
          paddingTop: isScrolled ? "12px" : "16px",
          paddingBottom: isScrolled ? "12px" : "16px"
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
      >
        {/* Logo */}
        <motion.div
          animate={{
            scale: isScrolled ? 0.95 : 1
          }}
          transition={{ 
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
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
        </motion.div>

        {/* Desktop Nav - Center */}
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
            href="/contact"
            className="group relative text-[#1f1d1b] font-medium transition"
          >
            Contact
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

        {/* Desktop CTA - Right */}
        <div className="hidden md:flex items-center">
          {!isClient ? (
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          ) : status === "loading" ? (
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
                      <div className="mt-1">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Shield size={12} className="mr-1" />
                          Free Plan
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/account"
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings size={16} />
                      Account Settings
                    </Link>
                    <Link
                      href="/pricing"
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <CreditCard size={16} />
                      Billing & Plans
                    </Link>
                    <hr className="border-gray-100" />
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
              className="group relative text-[#1f1d1b] font-medium transition hover:text-[#c5a880] px-4 py-2 rounded-lg hover:bg-[#f8f5f0] border border-transparent hover:border-[#c5a880]/20"
            >
              Sign In
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#1f1d1b]"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

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
                href="/contact"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </Link>
              <hr className="border-[#d6d3d1]" />
              {!isClient ? (
                <div className="flex justify-center py-2">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                </div>
              ) : status === "loading" ? (
                <div className="flex justify-center py-2">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                </div>
              ) : session ? (
                <div className="space-y-2">
                  <div className="px-2 py-2 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                    <p className="text-xs text-gray-500">{session.user?.email}</p>
                    <div className="mt-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Shield size={12} className="mr-1" />
                        Free Plan
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/account"
                    className="w-full text-left text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Settings size={16} />
                    Account Settings
                  </Link>
                  <Link
                    href="/pricing"
                    className="w-full text-left text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <CreditCard size={16} />
                    Billing & Plans
                  </Link>
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
                  className="text-[#1f1d1b] hover:text-[#4b2e2e] font-medium transition px-4 py-2 rounded-lg hover:bg-[#f8f5f0] border border-transparent hover:border-[#c5a880]/20"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
