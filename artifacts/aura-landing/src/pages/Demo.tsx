import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { BlobShape } from "@/components/BlobShape";
import { AudioWaveform } from "@/components/AudioWaveform";

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  size: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email";
  if (!data.company.trim()) errors.company = "Company is required";
  if (!data.role.trim()) errors.role = "Role is required";
  return errors;
}

const ROLES = ["Creative Director", "Brand Strategist", "Agency Owner", "Head of Marketing", "Brand Manager", "Producer", "Founder", "Other"];
const SIZES = ["1–5", "6–20", "21–50", "51–200", "200+"];

export default function Demo() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", role: "", size: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  const inputBase =
    "w-full px-5 py-3.5 rounded-2xl bg-white/50 border border-aura-charcoal/10 text-aura-charcoal placeholder:text-aura-charcoal-soft/30 font-light text-sm focus:outline-none focus:border-aura-charcoal/30 focus:bg-white/80 transition-all";

  return (
    <Layout>
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-8">
        <BlobShape color="var(--color-aura-coral)" size={600} top="-15%" left="-10%" opacity={0.25} parallaxOffset={80} />
        <BlobShape color="var(--color-aura-amber)" size={500} top="30%" left="60%" opacity={0.2} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aura-charcoal/10 bg-white/40 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-aura-coral animate-pulse" />
                <span className="text-xs font-medium tracking-wide uppercase">Request a demo</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif text-aura-charcoal leading-tight mb-6">
                See Aura in <span className="italic font-light">action.</span>
              </h1>
              <p className="text-lg text-aura-charcoal-soft/70 font-light mb-12 leading-relaxed">
                In 30 minutes, we'll walk you through a live signal session tailored to your industry — so you can see exactly what Aura finds before your competitors do.
              </p>

              <div className="space-y-5 mb-12">
                {[
                  { title: "Live signal walkthrough", desc: "We run a real-time scan of your category while you watch." },
                  { title: "Brand DNA demo", desc: "See how Aura profiles your brand and filters signals against it." },
                  { title: "Q&A with a strategist", desc: "Get honest answers about fit, pricing, and onboarding." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-aura-charcoal/8 flex items-center justify-center shrink-0 text-xs font-medium text-aura-charcoal-soft/60">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-medium text-aura-charcoal text-sm mb-0.5">{item.title}</p>
                      <p className="text-sm text-aura-charcoal-soft/60 font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-aura-cream-100/70 border border-white/50">
                <AudioWaveform bars={20} height={36} color="var(--color-aura-coral)" />
                <p className="text-xs text-aura-charcoal-soft/50 mt-3 font-light">
                  Average session duration: 28 minutes. No sales pressure, just intelligence.
                </p>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-aura-cream-100/70 backdrop-blur-md border border-white/50 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-aura-amber rounded-full filter blur-[80px] opacity-20 translate-x-1/3 -translate-y-1/3" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10 flex flex-col items-center text-center py-8"
                      data-testid="demo-success"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                        className="w-16 h-16 rounded-full bg-aura-sage/20 flex items-center justify-center mb-6 text-2xl"
                      >
                        ✓
                      </motion.div>
                      <h2 className="text-3xl font-serif text-aura-charcoal mb-3">You're on the list.</h2>
                      <p className="text-aura-charcoal-soft/70 font-light mb-2">
                        We'll reach out to <strong className="font-medium text-aura-charcoal">{form.email}</strong> within one business day to schedule your session.
                      </p>
                      <p className="text-sm text-aura-charcoal-soft/50 font-light mb-10">
                        In the meantime, explore what Aura can do.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href="/platform"
                          data-testid="link-success-platform"
                          className="px-6 py-3 rounded-full bg-aura-charcoal text-aura-cream-100 text-sm font-medium hover:bg-black transition-colors"
                        >
                          Explore the platform
                        </Link>
                        <Link
                          href="/"
                          data-testid="link-success-home"
                          className="px-6 py-3 rounded-full border border-aura-charcoal/20 text-aura-charcoal text-sm font-medium hover:bg-aura-charcoal/5 transition-colors"
                        >
                          Back to home
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="relative z-10 space-y-5"
                      data-testid="demo-form"
                    >
                      <h2 className="text-2xl font-serif text-aura-charcoal mb-6">Book your session</h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50 mb-1.5" htmlFor="name">
                            Full name <span className="text-aura-coral">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            data-testid="input-name"
                            placeholder="Alex Rivera"
                            value={form.name}
                            onChange={handleChange}
                            className={`${inputBase} ${errors.name ? "border-red-300 bg-red-50/30" : ""}`}
                          />
                          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50 mb-1.5" htmlFor="email">
                            Work email <span className="text-aura-coral">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            data-testid="input-email"
                            placeholder="alex@studio.com"
                            value={form.email}
                            onChange={handleChange}
                            className={`${inputBase} ${errors.email ? "border-red-300 bg-red-50/30" : ""}`}
                          />
                          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50 mb-1.5" htmlFor="company">
                          Company <span className="text-aura-coral">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          data-testid="input-company"
                          placeholder="Your studio or agency name"
                          value={form.company}
                          onChange={handleChange}
                          className={`${inputBase} ${errors.company ? "border-red-300 bg-red-50/30" : ""}`}
                        />
                        {errors.company && <p className="mt-1.5 text-xs text-red-400">{errors.company}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50 mb-1.5" htmlFor="role">
                            Your role <span className="text-aura-coral">*</span>
                          </label>
                          <select
                            id="role"
                            name="role"
                            data-testid="select-role"
                            value={form.role}
                            onChange={handleChange}
                            className={`${inputBase} appearance-none cursor-pointer ${errors.role ? "border-red-300" : ""}`}
                          >
                            <option value="">Select role…</option>
                            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                          </select>
                          {errors.role && <p className="mt-1.5 text-xs text-red-400">{errors.role}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50 mb-1.5" htmlFor="size">
                            Team size
                          </label>
                          <select
                            id="size"
                            name="size"
                            data-testid="select-size"
                            value={form.size}
                            onChange={handleChange}
                            className={`${inputBase} appearance-none cursor-pointer`}
                          >
                            <option value="">Select size…</option>
                            {SIZES.map((s) => <option key={s} value={s}>{s} people</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50 mb-1.5" htmlFor="message">
                          What are you hoping to solve?
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          data-testid="textarea-message"
                          rows={3}
                          placeholder="Tell us briefly what you're working on or trying to understand…"
                          value={form.message}
                          onChange={handleChange}
                          className={`${inputBase} resize-none`}
                        />
                      </div>

                      <button
                        type="submit"
                        data-testid="button-submit-demo"
                        disabled={loading}
                        className="w-full py-4 rounded-full bg-aura-charcoal text-aura-cream-100 font-medium text-sm hover:bg-black transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              className="inline-block w-4 h-4 border-2 border-aura-cream-100/40 border-t-aura-cream-100 rounded-full"
                            />
                            Submitting…
                          </>
                        ) : (
                          "Book my session"
                        )}
                      </button>

                      <p className="text-xs text-aura-charcoal-soft/40 font-light text-center">
                        No spam. No commitment. We'll reach you within 1 business day.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
