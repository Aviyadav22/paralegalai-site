"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* ✨ Pricing Section */}
        <section id="pricing" className="relative bg-[#f8f5f0] py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-[#1f1d1b]"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Pricing
            </motion.h2>
            <p className="mt-4 text-[#4b2e2e] max-w-2xl mx-auto">
              Start free, scale as you grow. Flexible plans for students, solo practitioners, and enterprises.
            </p>

            {/* Pricing grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Student */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#ede9e4] p-8 rounded-xl shadow-md border border-[#d6d3d1]"
              >
                <h3
                  className="text-lg font-serif font-semibold text-[#1f1d1b]"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Student
                </h3>
                <p className="mt-2 text-sm text-[#4b2e2e]">Student & Explorer</p>
                <p className="mt-4 text-3xl font-bold text-[#c5a880]">Free</p>
                <ul className="mt-6 space-y-2 text-sm text-[#4b2e2e]">
                  <li>✔ Core public database access</li>
                  <li>✔ 10–15 AI searches/summaries per month</li>
                  <li>✔ Watermarked downloads</li>
                  <li>✔ Community forum support</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block w-full bg-[#1f1d1b] text-white py-3 rounded-lg font-semibold hover:bg-[#4b2e2e] transition"
                >
                  Start Free
                </Link>
              </motion.div>

              {/* Professional - Highlighted */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#1f1d1b] text-white p-8 rounded-xl shadow-lg border border-[#c5a880]"
              >
                <div className="absolute -top-4 right-4 bg-[#c5a880] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
                <h3
                  className="text-lg font-serif font-semibold"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Professional
                </h3>
                <p className="mt-2 text-sm text-gray-300">Solo Practitioner</p>
                <p className="mt-4 text-3xl font-bold text-[#c5a880]">₹1990/mo</p>
                <p className="text-sm text-gray-400">or ₹19,990/year</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-200">
                  <li>✔ Unlimited AI searches & summaries</li>
                  <li>✔ Drafting features</li>
                  <li>✔ Case management (limited active cases)</li>
                  <li>✔ Priority email support</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block w-full bg-[#c5a880] text-[#1f1d1b] py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Try Professional
                </Link>
              </motion.div>

              {/* Enterprise */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#ede9e4] p-8 rounded-xl shadow-md border border-[#d6d3d1]"
              >
                <h3
                  className="text-lg font-serif font-semibold text-[#1f1d1b]"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Enterprise
                </h3>
                <p className="mt-2 text-sm text-[#4b2e2e]">Law Firm & Corporate</p>
                <p className="mt-4 text-3xl font-bold text-[#c5a880]">Custom</p>
                <ul className="mt-6 space-y-2 text-sm text-[#4b2e2e]">
                  <li>✔ All Pro features + workspaces</li>
                  <li>✔ SSO & permissions</li>
                  <li>✔ Onboarding & SLA</li>
                  <li>✔ Private cloud/on-prem</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block w-full border border-[#1f1d1b] text-[#1f1d1b] py-3 rounded-lg font-semibold hover:bg-[#1f1d1b] hover:text-white transition"
                >
                  Request Demo
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
