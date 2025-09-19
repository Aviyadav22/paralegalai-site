"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

import { FileText, Search, Folder, MessageCircle, Play } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Scroll-based scaling
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 0.9]);

  // Handle play/pause on viewport
  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView && showVideo) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView, showVideo]);

  return (
    <div>
      <Header />
      <main>
        {/* 🌟 Hero Section */}
        {/* 🌟 Professional Hero Section */}
<section className="relative min-h-screen flex flex-col items-center justify-center text-center 
  bg-gradient-to-b from-[#faf9f7] to-[#f4f4f2] text-[#1f1d1b] 
  px-4 sm:px-6 pt-16 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">

  <div className="relative z-10 max-w-5xl mx-auto">
    {/* Headline */}
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-[#1f1d1b] leading-tight">
  {/* Mobile (stacked) */}
  <span className="block sm:hidden">
    <span className="font-semibold">The AI-Powered</span>
  </span>
  <span className="block sm:hidden font-extrabold text-[#c5a880]">
    Paralegal
  </span>

  {/* Desktop (inline) */}
  <span className="hidden sm:inline">
    <span className="font-semibold">The AI-Powered</span>{" "}
    <span className="font-extrabold text-[#c5a880]">Paralegal</span>
  </span>
</h1>


    {/* Subheadline */}
    <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      Save hours of case research. Paralegal AI delivers precise judgments and case laws in seconds — trusted by legal professionals across India.
    </p>

    {/* CTA Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/contact"
        className="bg-[#1f1d1b] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition"
      >
        Start Free
      </Link>
      {/* <Link
        href="/demo"
        className="border border-[#1f1d1b] text-[#1f1d1b] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1f1d1b] hover:text-white shadow-sm transition"
      >
        Book a Demo
      </Link> */}
    </div>

    
  </div>

  {/* Product demo mockup / video */}
    {/* Product demo mockup / video with scroll scaling */}
<motion.div
  className="relative mt-6 sm:mt-1 w-full max-w-5xl mx-auto px-2 sm:px-4"
  style={{ scale }} // 👈 scroll-based scaling applied here
>
  <video
    src="/hero-demo.mp4" // 👉 replace with your demo video in /public
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-auto rounded-xl shadow-2xl object-cover border border-gray-200 
               max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"


    />
    {/* Glow effect */}
    <div className="absolute -inset-10 bg-gradient-to-r from-[#C5A880]/20 to-[#111827]/20 blur-3xl rounded-3xl -z-10"></div>
  </motion.div>



   {/* Trusted by — individual names (no boxed container) */}

{/* <section className="relative w-full mt-12">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2
      className="text-2xl md:text-3xl font-serif font-bold text-[#1f1d1b] mb-8"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      Trusted by
    </h2> */}

    {/* names displayed like logos: centered, spaced, wrap on small screens */}
    {/* <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      {[
        "Adv. Prashant Singh, Delhi",
        "MAK Law Firm, Dehradun",
        "UPES School of Law, Dehradun",
        "Adv. Brijesh Kumar, Chandausi",
      ].map((name, idx) => (
        <div
          key={idx}
          className="px-3 py-2 text-center select-none transform transition duration-200 ease-out hover:scale-105"
          aria-hidden={false}
        >
          <span className="block text-sm md:text-base font-medium text-[#1f1d1b] opacity-80">
            {name}
          </span>
        </div>
      ))}
    </div> */}
  {/* </div>
</section> */}



</section>




{/* ✨ Features Section */}
<section id="features" className="relative bg-[#f8f5f0] py-20">
  <div className="max-w-6xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl font-serif font-bold text-[#1f1d1b] text-center"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      Core Features
    </motion.h2>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Feature 1 */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="bg-[#ede9e4] p-6 rounded-xl shadow-md border border-[#d6d3d1] text-center"
      >
        <Search className="w-10 h-10 text-[#c5a880] mb-4 mx-auto" />
        <h3
          className="font-serif text-lg font-semibold text-[#1f1d1b]"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Legal Research
        </h3>
        <p className="text-sm text-[#4b2e2e] mt-2 leading-relaxed">
          Semantic, context-aware search across judgments, statutes and
          commentaries. AI summaries with linked citations.
        </p>
      </motion.div>

      {/* Feature 2 */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="bg-[#ede9e4] p-6 rounded-xl shadow-md border border-[#d6d3d1] text-center"
      >
        <FileText className="w-10 h-10 text-[#c5a880] mb-4 mx-auto" />
        <h3
          className="font-serif text-lg font-semibold text-[#1f1d1b]"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Drafting & Review
        </h3>
        <p className="text-sm text-[#4b2e2e] mt-2 leading-relaxed">
          Generate first drafts for petitions, contracts, and notices, with
          clause-level risk flags.
        </p>
      </motion.div>

      {/* Feature 3 */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="bg-[#ede9e4] p-6 rounded-xl shadow-md border border-[#d6d3d1] text-center"
      >
        <Folder className="w-10 h-10 text-[#c5a880] mb-4 mx-auto" />
        <h3
          className="font-serif text-lg font-semibold text-[#1f1d1b]"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Case Management
        </h3>
        <p className="text-sm text-[#4b2e2e] mt-2 leading-relaxed">
          Organize files, track deadlines, and centralize evidence & client
          notes.
        </p>
      </motion.div>

      {/* Feature 4 */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="bg-[#ede9e4] p-6 rounded-xl shadow-md border border-[#d6d3d1] text-center"
      >
        <MessageCircle className="w-10 h-10 text-[#c5a880] mb-4 mx-auto" />
        <h3
          className="font-serif text-lg font-semibold text-[#1f1d1b]"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Client Communication
        </h3>
        <p className="text-sm text-[#4b2e2e] mt-2 leading-relaxed">
          Intelligent intake chatbots for faster onboarding.
        </p>
      </motion.div>
    </div>
  </div>


        
        
    {/* CTA buttons
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
      </Link> */}

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
          {/* ✨ Testimonials Carousel
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
  </div> */}

  {/* Carousel
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
  </div> */}
</section>
      

      </main>
      <Footer />
    </div>
  );
}
