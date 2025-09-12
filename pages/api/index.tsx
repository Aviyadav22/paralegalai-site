"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileText, Search, Folder, MessageCircle } from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium text-primary hover:bg-neutralbg"
      >
        {question}
        <span className="ml-2 text-accent">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-3 text-sm text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* 🌟 Classical Hero */}
<section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#f8f5f0] text-[#1f1d1b] px-6">
  {/* Decorative subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f0] to-[#ede9e4]" />

  <div className="relative z-10 max-w-4xl">
    {/* Logo */}
    <Image
      src="/logo.png"
      alt="Paralegal AI Logo"
      className="mx-auto w-20 h-20 mb-6 opacity-90"
    />

    {/* Headline */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#1f1d1b]"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      Paralegal AI
    </motion.h1>

    {/* Subheadline */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="mt-4 text-lg md:text-xl text-[#4b2e2e] font-light"
    >
      The Comprehensive, Trustworthy AI Paralegal <br /> 
      Rooted in Law, Inspired by Roman Order
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Link
        href="/signup"
        className="bg-[#1f1d1b] text-[#f8f5f0] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#4b2e2e] transition"
      >
        Try Freemium
      </Link>
      <Link
        href="/demo"
        className="border border-[#1f1d1b] text-[#1f1d1b] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c5a880] hover:text-white transition"
      >
        View Demo
      </Link>
    </motion.div>

 

            {/* Right product mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-xl bg-white/10 backdrop-blur-lg p-6 shadow-2xl">
                <div className="h-72 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  [Product mockup / screenshot placeholder]
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ✨ Fancy Features Section */}
        <section id="features" className="relative bg-neutralbg py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary text-center"
            >
              Features
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <Search className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg">Legal Research</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Semantic, context-aware search across judgments, statutes and
                  commentaries. AI summaries with linked citations.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <FileText className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg">Drafting & Review</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Generate first drafts for petitions, contracts, notices and get
                  clause-level risk flags.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <Folder className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg">Case Management</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Organize files, track deadlines, and centralize evidence & client
                  notes.
                </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <MessageCircle className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg">Client Communication</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Intelligent intake chatbots for faster onboarding and triage.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ✨ Fancy Pricing Section */}
        <section
          id="pricing"
          className="relative bg-gradient-to-b from-neutralbg to-white py-24"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary"
            >
              Pricing
            </motion.h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Start free, scale as you grow. Flexible plans for solo
              practitioners, firms, and enterprises.
            </p>

            {/* Pricing grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Free */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-primary">Freemium</h3>
                <p className="mt-2 text-sm text-gray-600">Student & Explorer</p>
                <p className="mt-4 text-3xl font-bold text-accent">Free</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li>✔ Core public database access</li>
                  <li>✔ 10–15 AI searches/summaries per month</li>
                  <li>✔ Watermarked downloads</li>
                  <li>✔ Community forum support</li>
                </ul>
                <Link
                  href="/signup"
                  className="mt-8 block w-full bg-accent text-white py-3 rounded-lg font-semibold hover:scale-105 transition transform"
                >
                  Start Free
                </Link>
              </motion.div>

              {/* Professional - Highlighted */}
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-gradient-to-br from-primary to-accent text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-4 border-accent"
              >
                <div className="absolute -top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
                <h3 className="text-lg font-semibold">Professional</h3>
                <p className="mt-2 text-sm">Solo Practitioner</p>
                <p className="mt-4 text-3xl font-bold">₹999–1,250/mo</p>
                <p className="text-sm text-gray-200">or ₹11,990/year</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li>✔ Unlimited AI searches & summaries</li>
                  <li>✔ Drafting features</li>
                  <li>✔ Case management (limited active cases)</li>
                  <li>✔ Email support</li>
                </ul>
                <Link
                  href="/signup"
                  className="mt-8 block w-full bg-white text-primary py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition transform"
                >
                  Try Professional
                </Link>
              </motion.div>

              {/* Enterprise */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-primary">Enterprise</h3>
                <p className="mt-2 text-sm text-gray-600">Law Firm & Corporate</p>
                <p className="mt-4 text-3xl font-bold text-accent">Custom</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li>✔ All Pro features + workspaces</li>
                  <li>✔ SSO & permissions</li>
                  <li>✔ Onboarding & SLA</li>
                  <li>✔ Private cloud/on-prem</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block w-full border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
                >
                  Request Demo
                </Link>
              </motion.div>

              {/* API Access */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-primary">API Access</h3>
                <p className="mt-2 text-sm text-gray-600">For Developers</p>
                <p className="mt-4 text-3xl font-bold text-accent">Tiered</p>
                <p className="text-sm text-gray-500">Pay-per-call</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li>✔ Semantic search endpoints</li>
                  <li>✔ Summarization APIs</li>
                  <li>✔ Volume pricing available</li>
                  <li>✔ Enterprise SLAs</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block w-full bg-accent text-white py-3 rounded-lg font-semibold hover:scale-105 transition transform"
                >
                  Request API Access
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        {/* ✨ Persona / Use Cases Section */}
<section id="personas" className="relative bg-neutralbg py-24">
  <div className="max-w-6xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-primary text-center"
    >
      Built for Every Legal Professional
    </motion.h2>
    <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
      Whether you are just starting out or managing a corporate legal team, Paralegal AI adapts to your workflow.
    </p>

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Persona 1 */}
      <motion.div
        whileHover={{ scale: 1.05, y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <span className="text-2xl">⚖️</span>
        </div>
        <h3 className="text-lg font-semibold text-primary">Solo Litigator</h3>
        <p className="mt-2 text-sm text-gray-600">
          Affordable parity — faster drafting & research so you can focus on strategy.
        </p>
      </motion.div>

      {/* Persona 2 */}
      <motion.div
        whileHover={{ scale: 1.05, y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <span className="text-2xl">📑</span>
        </div>
        <h3 className="text-lg font-semibold text-primary">Firm Associate</h3>
        <p className="mt-2 text-sm text-gray-600">
          Multiply billable efficiency with collaborative workspaces and AI-powered drafting.
        </p>
      </motion.div>

      {/* Persona 3 */}
      <motion.div
        whileHover={{ scale: 1.05, y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <span className="text-2xl">🏢</span>
        </div>
        <h3 className="text-lg font-semibold text-primary">In-house Counsel</h3>
        <p className="mt-2 text-sm text-gray-600">
          Reduce contract risk and automate continuous compliance across regulations.
        </p>
      </motion.div>

      {/* Persona 4 */}
      <motion.div
        whileHover={{ scale: 1.05, y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <span className="text-2xl">🎓</span>
        </div>
        <h3 className="text-lg font-semibold text-primary">Law Student</h3>
        <p className="mt-2 text-sm text-gray-600">
          Learn practical research skills and drafting on an industry-grade platform.
        </p>
      </motion.div>
    </div>

    {/* CTA buttons */}
    <div className="mt-12 flex justify-center gap-4">
      <Link
        href="/signup"
        className="bg-accent text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:scale-105 transition"
      >
        Try Freemium
      </Link>
      <Link
        href="/contact"
        className="border border-primary text-primary px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-primary hover:text-white transition"
      >
        Contact Sales
      </Link>
    </div>
  </div>
</section>
{/* ✨ FAQ Section */}
<section id="faq" className="relative bg-white py-24">
  <div className="max-w-3xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-primary text-center"
    >
      Frequently Asked Questions
    </motion.h2>
    <p className="mt-4 text-gray-600 text-center">
      Clear answers about Paralegal AI and how it supports legal professionals.
    </p>

    <div className="mt-12 space-y-4">
      {[
        {
          q: "Is Paralegal AI a replacement for lawyers?",
          a: "No. It is an augmentation tool. It automates routine tasks so lawyers can focus on strategy and client advocacy.",
        },
        {
          q: "How accurate are the AI-generated answers?",
          a: "RAG + GraphRAG ensures answers are grounded in retrieved documents. Every significant assertion is linked to source materials for verification.",
        },
        {
          q: "Which jurisdictions does Paralegal AI cover?",
          a: "Initially: India (Supreme Court, major High Courts, central statutes, and tribunals). Enterprise customers can request tailored ingestion for additional databases.",
        },
        {
          q: "Do you store client data?",
          a: "Yes — but only as required. Enterprise customers can opt for private cloud or on-premise deployments. All storage is encrypted and auditable.",
        },
        {
          q: "Do you offer discounts for students or law schools?",
          a: "Yes. There is a generous educational tier for students and institutions.",
        },
      ].map((item, i) => (
        <AccordionItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  </div>
</section>
          {/* ✨ Testimonials Carousel */}
<section
  id="testimonials"
  className="relative bg-gradient-to-b from-neutralbg via-white to-neutralbg py-24 overflow-hidden"
>
  <div className="max-w-6xl mx-auto px-4 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-primary"
    >
      What Professionals Say
    </motion.h2>
    <p className="mt-2 text-gray-600">
      Trusted by practitioners, firms, and students
    </p>
  </div>

  {/* Carousel */}
  <div className="relative mt-16 overflow-hidden">
    <motion.div
      className="flex"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[...Array(2)].map((_, loopIndex) => (
        <div
          key={loopIndex}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-w-full px-4"
        >
          {[
            {
              text: "Paralegal AI reduced our research time by 60%.",
              author: "Senior Partner, Mid-sized Firm",
            },
            {
              text: "The drafting assistant saves me hours per client.",
              author: "Solo Litigator",
            },
            {
              text: "A game changer for compliance monitoring.",
              author: "In-house Counsel",
            },
            {
              text: "Perfect for students! Makes legal research practical.",
              author: "Law Student",
            },
            {
              text: "Finally, an AI that understands Indian law deeply.",
              author: "Managing Partner, Tier-1 Firm",
            },
            {
              text: "Seamlessly integrated into our firm’s workflow.",
              author: "Corporate Counsel",
            },
          ].map((item, i) => (
            <figure
              key={`${loopIndex}-${i}`}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-between text-left hover:scale-105 transition-transform"
            >
              <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-primary">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
</section>
      

      </main>
      <Footer />
    </div>
  );
}
