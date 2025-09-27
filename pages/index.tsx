"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { FileText, Search, Folder, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#d6d3d1] rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium text-[#1f1d1b] hover:bg-[#f8f5f0] transition-colors focus:outline-none"
      >
        {question}
        <span className="ml-2 text-[#c5a880] font-bold">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-3 text-sm text-[#4b2e2e]"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Scroll-based scaling - smoother and less aggressive
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  // Handle Try Now button click based on authentication status
  const handleTryNowClick = async () => {
    if (session) {
      // User is logged in, redirect to the new application URL
      window.open('http://135.235.195.52/', '_blank');
    } else {
      // User is not logged in, redirect to login page with redirect parameter
      router.push('/login?redirect=http://135.235.195.52/');
    }
  };

  return (
    <div>
      <Header />
      <main>
        {/* 🌟 Hero Section */}
        {/* 🌟 Professional Hero Section */}
<section className="relative min-h-screen flex flex-col items-center justify-center text-center 
  bg-gradient-to-b from-[#faf9f7] to-[#f4f4f2] text-[#1f1d1b] 
  px-2 sm:px-4 md:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-32 overflow-hidden">

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Headline */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif tracking-tight text-[#1f1d1b] leading-tight mb-8">
      <span className="font-semibold">The AI-Powered</span>{" "}
      <span className="font-extrabold text-[#c5a880]">Paralegal</span>
    </h1>

    {/* Subheadline */}
    <p className="mt-8 text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
      Save hours of case research. Paralegal AI delivers precise judgments and case laws in seconds.
    </p>
    

    {/* CTA Button */}
    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onClick={handleTryNowClick}
        className="bg-[#1f1d1b] text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl shadow-2xl hover:shadow-3xl hover:bg-[#4b2e2e] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:min-w-[200px]"
      >
        Try Now
      </button>
      <a
        href="https://youtube.com/@paralegalai.official?si=6jF_ge6gu0trD9AN"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-[#1f1d1b] text-[#1f1d1b] px-6 sm:px-8 md:px-12 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl hover:bg-[#1f1d1b] hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:min-w-[200px] inline-block text-center"
      >
        Watch Demo
      </a>
    </div>

    {/* Trust indicators */}
    <div className="mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm text-gray-500">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span>Built for Indian Legal System</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span>AI-Powered, Human-Centered</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <span>Secure & Confidential by Design</span>
      </div>
    </div>
  </div>

  {/* Product demo mockup / main illustration */}
    {/* Product demo mockup / main illustration with scroll scaling */}
<motion.div
  className="relative mt-6 sm:mt-8 md:mt-10 w-full max-w-6xl mx-auto px-1 sm:px-2 md:px-3"
  style={{ scale }}
  transition={{ type: "spring", stiffness: 100, damping: 30 }}
>
  <Image
    src="/Main.svg"
    alt="Paralegal AI - Smart Legal Research and Document Drafting Platform"
    width={1200}
    height={800}
  className="w-full h-auto rounded-2xl shadow-2xl object-contain border border-gray-200/50 
             max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] mx-auto
             transition-all duration-300 hover:shadow-3xl"
  />
  </motion.div>
</section>

{/* ✨ Features Section */}
<section id="features" className="relative bg-[#faf9f7] py-4">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4">
        Features
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Powerful tools designed for legal professionals.
      </p>
    </motion.div>

    {/* Feature 1: Legal Research - Image Left, Text Right */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <div className="order-2 lg:order-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src="/Research.svg"
            alt="Legal Research Interface"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
      <div className="order-1 lg:order-2 max-w-lg">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-6" style={{ fontFamily: "Merriweather, serif" }}>
          Smarter Legal Research
        </h3>
        <p className="text-lg text-[#4b2e2e] leading-relaxed">
          Paralegal AI transforms the way lawyers find case laws and judgments. Instead of spending hours scanning through volumes of precedents, our AI delivers precise, context-aware results in seconds. Whether you&apos;re preparing for court or advising a client, your research becomes faster, sharper, and more reliable.
        </p>
      </div>
    </motion.div>

    {/* Feature 2: Drafting - Text Left, Image Right */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <div className="order-1">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-6" style={{ fontFamily: "Merriweather, serif" }}>
          Draft with Confidence
        </h3>
        <p className="text-lg text-[#4b2e2e] leading-relaxed">
          From contracts and petitions to notices and agreements, Paralegal AI assists in generating the first draft ensuring your drafts are not only quicker to prepare but also more accurate.
        </p>
      </div>
      <div className="order-2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src="/Drafting.svg"
            alt="Document Drafting Interface"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </motion.div>

    {/* Feature 3: Case Law Summarization - Image Left, Text Right */}
    {/* <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <div className="order-2 lg:order-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="w-full h-64 bg-gradient-to-br from-[#c5a880]/10 to-[#1f1d1b]/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-[#1f1d1b] font-medium">Case Law Summarization</p>
              <p className="text-sm text-gray-600 mt-2">AI-powered analysis</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="order-1 lg:order-2 max-w-lg">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-6" style={{ fontFamily: "Merriweather, serif" }}>
          Understand Case Laws in Minutes
        </h3>
        <p className="text-lg text-[#4b2e2e] leading-relaxed">
          No more wading through hundreds of pages. Paralegal AI condenses complex judgments into clear, structured summaries while keeping the essence intact. Lawyers can focus on strategy instead of repetitive reading, making case preparation smarter and faster.
        </p>
      </div>
    </motion.div> */}
  </div>
</section>

{/* ✨ FAQ Section */}
{/* <section id="faq" className="relative bg-[#f8f5f0] py-16">
  <div className="max-w-3xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-lg md:text-xl font-semibold text-[#1f1d1b] mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-base text-gray-600">
        Clear answers about Paralegal AI and how it supports legal professionals.
      </p>
    </motion.div>

    <div className="space-y-4">
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
  </div> */}

      {/* Testimonials Section */}
      <Testimonials />

      {/* Made for India Section */}
      <section className="relative bg-[#faf9f7] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Made for India, in India
            </h2>
            
            {/* Tricolor underline accent */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Paralegal AI is built for Indian lawyers, law firms, and law schools — rooted in the Indian legal system, crafted with global standards.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-semibold text-[#1f1d1b] mb-2">Indian Judgments First</h3>
                <p className="text-sm text-gray-600">Prioritizing Supreme Court and High Court decisions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-semibold text-[#1f1d1b] mb-2">For Lawyers, Firms & Students</h3>
                <p className="text-sm text-gray-600">Designed for every level of legal practice</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl mb-3">🌏</div>
                <h3 className="font-semibold text-[#1f1d1b] mb-2">Built in India, Global-Grade AI</h3>
                <p className="text-sm text-gray-600">World-class technology with local expertise</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button
                onClick={handleTryNowClick}
                className="inline-flex items-center px-8 py-4 bg-[#1f1d1b] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Join the Movement
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
