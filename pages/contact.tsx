// pages/contact.tsx
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  organization: z.string().optional().or(z.literal("")),
  role: z.string().optional().or(z.literal("")),
  usecase: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
  demoTime: z.string().optional().or(z.literal("")),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: ContactForm) {
    setServerError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const payload = await res.json().catch(()=>null);
        setServerError(payload?.error || "Server error — please try again later.");
      }
    } catch (err) {
      console.error(err);
      setServerError("Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "w-full mt-1 rounded px-3 py-2 focus:outline-none focus:ring-2";

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#faf9f7] to-[#f4f4f2]">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-4xl md:text-5xl font-serif font-bold text-[#1f1d1b] mb-6"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Ready to transform your legal practice? Let's discuss how Paralegal AI can streamline your research and drafting workflow.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-[#c5a880]/10 rounded-lg mb-4 mx-auto">
                  <Mail className="text-[#c5a880]" size={24} />
                </div>
                <h3 className="font-semibold text-[#1f1d1b] mb-2">Email Us</h3>
                <a
                  href="mailto:ParalegalAI.communication@gmail.com"
                  className="text-gray-600 hover:text-[#c5a880] transition"
                >
                  ParalegalAI.communication@gmail.com
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-[#c5a880]/10 rounded-lg mb-4 mx-auto">
                  <Phone className="text-[#c5a880]" size={24} />
                </div>
                <h3 className="font-semibold text-[#1f1d1b] mb-2">Call Us</h3>
                <a
                  href="tel:+919548790632"
                  className="text-gray-600 hover:text-[#c5a880] transition"
                >
                  +91 95487 90632
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-[#c5a880]/10 rounded-lg mb-4 mx-auto">
                  <Clock className="text-[#c5a880]" size={24} />
                </div>
                <h3 className="font-semibold text-[#1f1d1b] mb-2">Response Time</h3>
                <p className="text-gray-600">Within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#1f1d1b] to-[#4b2e2e] p-8 text-white">
                <h2
                  className="text-3xl font-serif font-bold mb-2"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Request a Demo
                </h2>
                <p className="text-gray-200">
                  Book a personalized demo and see how Paralegal AI can transform your legal practice.
                </p>
              </div>

              <div className="p-8">
                {serverError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {serverError}
                  </div>
                )}

                {!sent ? (
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1f1d1b] mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          aria-invalid={errors.name ? "true" : "false"}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
                            errors.name 
                              ? "border-red-300 focus:border-red-500" 
                              : "border-gray-200 focus:border-[#c5a880]"
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1f1d1b] mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          aria-invalid={errors.email ? "true" : "false"}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
                            errors.email 
                              ? "border-red-300 focus:border-red-500" 
                              : "border-gray-200 focus:border-[#c5a880]"
                          }`}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1f1d1b] mb-2">
                          Organization
                        </label>
                        <input
                          {...register("organization")}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c5a880] focus:outline-none transition-all duration-200"
                          placeholder="Your law firm or organization"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1f1d1b] mb-2">
                          Role
                        </label>
                        <input
                          {...register("role")}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c5a880] focus:outline-none transition-all duration-200"
                          placeholder="Your role (e.g., Partner, Associate)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1f1d1b] mb-2">
                        Use Case
                      </label>
                      <select
                        {...register("usecase")}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c5a880] focus:outline-none transition-all duration-200"
                      >
                        <option value="">Select your use case</option>
                        <option value="Solo litigator">Solo litigator</option>
                        <option value="Mid-sized firm associate">Mid-sized firm associate</option>
                        <option value="In-house counsel">In-house counsel</option>
                        <option value="Law student">Law student</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1f1d1b] mb-2">
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c5a880] focus:outline-none transition-all duration-200 resize-none"
                        placeholder="Tell us about your specific needs and how we can help..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1f1d1b] mb-2">
                        Preferred Demo Time
                      </label>
                      <input
                        {...register("demoTime")}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c5a880] focus:outline-none transition-all duration-200"
                        placeholder="e.g., Weekday mornings, Afternoon, Evening"
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        🔒 We respect your privacy and will never share your data. Book a demo to see how we can help you.
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-gradient-to-r from-[#1f1d1b] to-[#4b2e2e] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:transform-none flex items-center gap-2"
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Request Demo
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1f1d1b] mb-4">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Your demo request has been received. We'll be in touch within 24 hours to schedule your personalized demonstration.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
