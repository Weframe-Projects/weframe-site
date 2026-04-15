"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  company: string;
  companySize: string;
  bottleneck: string;
  referral: string;
}

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // TODO: Connect to server action → Resend + Supabase
    console.log("Form submission:", data);
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[600px] mx-auto">
          <p className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-4">
            APPLY
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl mb-4">
            Apply to be weframed
          </h1>
          <p className="text-text-secondary text-lg mb-4">
            Tell us about your business and what you&apos;re trying to solve.
            We&apos;ll come back within 1 business day.
          </p>
          <p className="text-text-secondary text-sm mb-12">
            We take on a small number of businesses at a time. Every engagement
            is scoped per project. No retainers, no open-ended contracts. If
            it&apos;s a fit, the next step is a call.
          </p>

          {submitted ? (
            <div className="bg-bg-surface border border-accent/20 rounded-2xl p-8 text-center">
              <p className="text-accent font-[var(--font-mono)] text-sm mb-2">
                APPLICATION RECEIVED
              </p>
              <p className="text-xl font-medium mb-2">
                We&apos;ll come back within 1 business day.
              </p>
              <p className="text-text-secondary text-sm">
                Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Company name
                </label>
                <input
                  {...register("company", {
                    required: "Company name is required",
                  })}
                  className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="Your company"
                />
                {errors.company && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Company size
                </label>
                <select
                  {...register("companySize", {
                    required: "Please select a company size",
                  })}
                  className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent/40 transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select size
                  </option>
                  <option value="1-10">1–10</option>
                  <option value="10-50">10–50</option>
                  <option value="50-200">50–200</option>
                  <option value="200+">200+</option>
                </select>
                {errors.companySize && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.companySize.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What&apos;s your biggest operational bottleneck?
                </label>
                <textarea
                  {...register("bottleneck")}
                  rows={4}
                  className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  placeholder="Tell us what's slowing your team down"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  How did you hear about us?
                </label>
                <input
                  {...register("referral")}
                  className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="Referral, LinkedIn, other..."
                />
              </div>

              <Button type="submit" size="large" className="w-full">
                Submit Application →
              </Button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
