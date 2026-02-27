"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Terminal } from "lucide-react"
import { Button } from "@/components/Button"
import { SectionHeader } from "@/components/SectionHeader"
import { ServiceCard } from "@/components/ServiceCard"
import { StatsCounter } from "@/components/StatsCounter"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y, opacity }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
                Premium Web Development Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-outfit text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Web Experiences That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
                Elevate Your Brand
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-50 blur-sm" />
              </span>{" "}
              & Drive Growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-white/70 text-lg md:text-2xl max-w-3xl leading-relaxed mb-10"
            >
              AiDECKK builds fast, modern, conversion-focused websites for businesses that care about trust, perception, and long-term digital value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <Button size="lg" asChild className="w-full sm:w-auto text-base px-8">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto text-base px-8">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Positioning Strip */}
      <section className="py-10 border-y border-white/5 bg-navy-light/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 transition-all duration-700">
            <span className="text-white font-medium tracking-wide uppercase text-sm md:text-base">Built for Ambitious Businesses</span>
            <span className="text-white font-medium tracking-wide uppercase text-sm md:text-base">Designed for Trust & Conversion</span>
            <span className="text-white font-medium tracking-wide uppercase text-sm md:text-base hidden lg:block">Crafted for Modern Brand Perception</span>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-32 relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="What We Build"
            title="Engineered for Impact. Designed to Convert."
            description="We specialize strictly in premium web development. No generic marketing, no app development. Just world-class websites that perform."
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
            <ServiceCard
              index={0}
              title="Business Websites"
              description="Custom corporate sites that establish authority, build trust, and reflect your brand's true value."
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            />
            <ServiceCard
              index={1}
              title="High-Converting LPs"
              description="Focused landing pages optimized for speed, clarity, and maximizing your marketing ROI."
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
            />
            <ServiceCard
              index={2}
              title="E-commerce Websites"
              description="Scalable storefronts that provide seamless shopping experiences and drive online sales."
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
            />
            <ServiceCard
              index={3}
              title="Website Redesigns"
              description="Complete modernization of outdated sites to meet current UX, speed, and design standards."
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
            />
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-24 bg-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <SectionHeader
            subtitle="Specialized Execution"
            title="Who We Build For"
            description="AiDECKK is highly effective for service-led businesses and premium brands that rely on their digital presence to establish trust."
            className="mb-12"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Real Estate Agencies",
              "Law Firms",
              "Chartered Accountants (CAs)",
              "Coaching Institutes",
              "Women's Boutiques",
              "Premium E-Commerce Brands",
              "Specialized Consultants"
            ].map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 font-medium hover:border-primary/50 hover:bg-primary/10 hover:text-white transition-all duration-300"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-32 relative border-y border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                subtitle="The Boutique Advantage"
                title="We Build Assets, Not Just Websites."
                description="We don't use cheap templates or cut corners. We are a specialized studio, which means every project gets our direct, hands-on attention and is meticulously engineered to perform at the highest level."
                align="left"
              />

              <div className="mt-12 space-y-6">
                {[
                  { title: "Custom-built execution", desc: "Tailored to your specific business goals and brand identity." },
                  { title: "Premium UI quality", desc: "International standard design that makes you look professional." },
                  { title: "Fast & responsive performance", desc: "Optimized Next.js architecture for instant mobile load times." },
                  { title: "Hands-on communication", desc: "No middle-men. Direct communication with the engineers building your site." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 border border-primary/30">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 glass bg-navy/50"
            >
              {/* Abstract code/design visual placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
              <div className="absolute inset-8 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-black/20">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 p-8 font-mono text-sm text-white/40 flex flex-col opacity-70">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="overflow-hidden whitespace-nowrap text-primary"
                  >
                    import {'{'} AiDECKK {'}'} from "@premium/studio";
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    const project = new AiDECKK.Website({'{'} <br />
                    &nbsp;&nbsp;execution: "custom", <br />
                    &nbsp;&nbsp;performance: "instant", <br />
                    &nbsp;&nbsp;quality: "premium" <br />
                    {'}'}); <br /><br />
                    await project.launch(); <br />
                    // Results: High-trust digital asset created.
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-b from-navy-light to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            <StatsCounter end={5} suffix="" label="Projects Delivered" delay={0.1} />
            <StatsCounter end={100} suffix="%" label="Custom Builds" delay={0.2} />
            <div className="flex flex-col items-center justify-center text-center px-4 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-outfit text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight mb-2 flex items-center justify-center min-h-[60px]"
              >
                <span className="text-primary font-black ml-1 text-3xl">✓</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + 0.5 }}
                className="text-white/60 text-xs md:text-sm font-medium tracking-wide uppercase mt-1"
              >
                Performance-Focused
              </motion.p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-outfit text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight mb-2 flex items-center justify-center min-h-[60px]"
              >
                <span className="text-primary font-black ml-1 text-3xl">✓</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + 0.5 }}
                className="text-white/60 text-xs md:text-sm font-medium tracking-wide uppercase mt-1"
              >
                Boutique Execution
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-navy/30 border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5 rounded-[4rem] mx-4 md:mx-8 lg:mx-12 border border-primary/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-outfit text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Let's Build a Website <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Worth Remembering.
              </span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Partner with AiDECKK to engineer a premium digital presence that accelerates your business growth. Quality execution guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-14 px-10 text-lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
