// pages/contact.tsx
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

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
      <main className="min-h-screen bg-[#f8f5f0] px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-md border border-[#d6d3d1] rounded-lg p-8">
          <h1
            className="text-3xl font-serif font-bold text-[#1f1d1b] mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Contact & Demo Booking
          </h1>

          {/* contact details styled */}
          <div className="flex flex-col sm:flex-row gap-6 mb-6 text-sm">
            <a
              href="mailto:aviyadav.official@gmail.com"
              className="flex items-center gap-2 text-[#1f1d1b] hover:text-[#c5a880] transition font-medium"
            >
              <Mail size={18} /> <span className="underline">aviyadav.official@gmail.com</span>
            </a>
            <a
              href="tel:+919548790632"
              className="flex items-center gap-2 text-[#1f1d1b] hover:text-[#c5a880] transition font-medium"
            >
              <Phone size={18} /> <span className="underline">+91&nbsp;95487&nbsp;90632</span>
            </a>
          </div>

          {serverError && (
            <div className="mb-4 text-sm text-red-600">{serverError}</div>
          )}

          {!sent ? (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <label className="block text-sm">
                Name
                <input
                  {...register("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                  className={`${inputBase} border ${errors.name ? "border-red-500" : "border-[#d6d3d1]"} focus:ring-[#c5a880]`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </label>

              <label className="block text-sm">
                Email <span className="text-xs text-[#4b2e2e]">(required)</span>
                <input
                  {...register("email")}
                  type="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  className={`${inputBase} border ${errors.email ? "border-red-500" : "border-[#d6d3d1]"} focus:ring-[#c5a880]`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </label>

              <label className="block text-sm">
                Organization
                <input
                  {...register("organization")}
                  className={`${inputBase} border border-[#d6d3d1]`}
                />
              </label>

              <label className="block text-sm">
                Role
                <input
                  {...register("role")}
                  className={`${inputBase} border border-[#d6d3d1]`}
                />
              </label>

              <label className="block text-sm">
                Use case
                <select
                  {...register("usecase")}
                  className={`${inputBase} border border-[#d6d3d1]`}
                >
                  <option value="Solo litigator">Solo litigator</option>
                  <option value="Mid-sized firm associate">Mid-sized firm associate</option>
                  <option value="In-house counsel">In-house counsel</option>
                  <option value="Law student">Law student</option>
                </select>
              </label>

              <label className="block text-sm">
                Short message
                <textarea
                  {...register("message")}
                  rows={4}
                  className={`${inputBase} border border-[#d6d3d1] focus:ring-[#c5a880]`}
                />
              </label>

              <label className="block text-sm">
                Preferred demo time (optional)
                <input
                  {...register("demoTime")}
                  className={`${inputBase} border border-[#d6d3d1]`}
                />
              </label>

              <p className="text-xs text-[#4b2e2e]">
                We’ll never share your data. Book a demo and see a sample RAG response from our dataset.
              </p>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1f1d1b] text-white px-4 py-2 rounded-lg hover:bg-[#4b2e2e] transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Request Demo"}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 p-4 rounded text-green-700">
              ✅ Thanks — your demo request was received. We’ll be in touch soon.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
