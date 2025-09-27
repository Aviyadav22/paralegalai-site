"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Paralegal AI reduced our research time by 60%. The accuracy of case law retrieval is remarkable.",
      author: "Adv. Shashank Singh",
      role: "Senior Partner, Delhi",
      rating: 5
    },
    {
      text: "The drafting assistant saves me hours per client. It's like having a junior associate who never sleeps.",
      author: "Adv. Brijesh Kumar",
      role: "Solo Litigator, Noida",
      rating: 5
    },
    {
      text: "Finally, an AI that understands Indian law deeply. The context awareness is impressive.",
      author: "Adv. Rajat Kumar",
      role: "Solo Litigator, Dehradun",
      rating: 5
    },
    {
      text: "Perfect for students! Makes legal research practical and accessible.",
      author: "Law Students",
      role: "UPES School of Law, Dehradun",
      rating: 5
    },
    {
      text: "Finally, an AI that understands Indian law deeply. The context awareness is impressive.",
      author: "Managing Partner",
      role: "Tier-1 Firm, Mumbai",
      rating: 5
    },
    {
      text: "Seamlessly integrated into our firm's workflow. The ROI was immediate.",
      author: "Corporate Counsel",
      role: "Fortune 500 Company",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1f1d1b] mb-4">
            Trusted by Legal Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of lawyers, firms, and students who rely on Paralegal AI for their daily research needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote size={24} className="text-[#c5a880] absolute -top-2 -left-2" />
                <p className="text-gray-700 italic text-lg leading-relaxed pl-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#1f1d1b]">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#1f1d1b] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Trusted by Leading Legal Institutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center opacity-80">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c5a880] mb-2">60+</div>
                <div className="text-sm">Legal Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c5a880] mb-2">10+</div>
                <div className="text-sm">Law Firms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c5a880] mb-2">20+</div>
                <div className="text-sm">Law Schools</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
