"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Tell us a little more about your project"),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  "Web Development",
  "Software Development",
  "UI/UX Design",
  "Web Application",
  "Academy Enrollment",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-royal-600/20 bg-royal-600/[0.04] p-10 text-center dark:border-royal-400/20 dark:bg-royal-400/[0.06]"
      >
        <CheckCircle2 className="h-10 w-10 text-royal-600 dark:text-royal-300" />
        <h3 className="font-display text-lg font-semibold text-ink-800 dark:text-white">Message sent</h3>
        <p className="max-w-xs text-sm text-ink-500 dark:text-ink-300">
          Thanks for reaching out — our team will get back to you within one business day.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-ghost mt-2">
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-ink-500 dark:text-ink-300">
            Full name
          </label>
          <input
            id="name"
            {...register("name")}
            placeholder="Your name"
            className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:border-royal-600 dark:border-white/15 dark:bg-surface-darkSoft dark:text-white"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-ink-500 dark:text-ink-300">
            Email address
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:border-royal-600 dark:border-white/15 dark:bg-surface-darkSoft dark:text-white"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-ink-500 dark:text-ink-300">
          Service you're interested in
        </label>
        <select
          id="service"
          {...register("service")}
          defaultValue=""
          className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:border-royal-600 dark:border-white/15 dark:bg-surface-darkSoft dark:text-white"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-ink-500 dark:text-ink-300">
          Project details
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          placeholder="Tell us about your project, timeline and budget..."
          className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:border-royal-600 dark:border-white/15 dark:bg-surface-darkSoft dark:text-white"
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-70">
        {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
