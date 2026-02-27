"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Button } from "@/components/Button"
import { cn } from "@/lib/utils"

const selectedProjects = [
    {
        title: "Aura Luxury Real Estate",
        category: "Real Estate Website",
        summary: "A premium property showcase platform built to build trust and capture high-value leads.",
        challenge: "The client had an outdated online presence that failed to reflect the true value of their luxury properties. They struggled with a poor mobile experience and a lack of clear lead-generation flow.",
        solution: "We engineered a custom business website featuring a conversion-focused landing structure, immersive property galleries, and a frictionless inquiry experience.",
        deliverables: [
            "Custom premium UI layout",
            "Responsive, mobile-first development",
            "Fast-loading property pages",
            "Clear CTA and inquiry flow",
            "SEO-friendly architecture"
        ],
        techStack: ["Next.js", "React", "Tailwind CSS", "Sanity CMS"],
        outcome: "A stronger digital presentation that improved brand trust, delivered a smoother mobile browsing experience, and significantly enhanced lead-generation potential.",
        imagePlaceholder: "Real Estate Presentation",
        image: "/project-aura-real-estate.png"
    },
    {
        title: "Vertex Corporate Partners",
        category: "Professional Services / Law Firm",
        summary: "An authoritative digital presence for a leading legal and advisory firm.",
        challenge: "The firm needed to establish immediate professional authority. Their previous site lacked a clear service breakdown and offered a weak contact conversion flow, dampening their credibility.",
        solution: "We delivered a credibility-focused design with an elegant visual hierarchy, dedicated premium service pages, and a streamlined consultation booking flow.",
        deliverables: [
            "Authoritative visual identity",
            "Modern content sections",
            "Streamlined consultation flow",
            "Flawless responsive behavior",
            "Secure and scalable structure"
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        outcome: "Improved professionalism and clarity for visitors, resulting in a more modern brand perception and higher-quality consultation inquiries.",
        imagePlaceholder: "Corporate Firm Interface",
        image: "/project-vertex-partners.jpg"
    },
    {
        title: "The Minimalist Label",
        category: "Premium E-Commerce Boutique",
        summary: "A seamless, high-end shopping experience for a modern direct-to-consumer brand.",
        challenge: "The brand suffered from a clunky shopping experience, slow load times, and weak visual branding that lowered consumer trust and hurt mobile checkouts.",
        solution: "We built a modern e-commerce storefront with premium product presentation, a cleaner shopping journey, and lightning-fast page transitions.",
        deliverables: [
            "Premium product showcase",
            "Optimized mobile buying journey",
            "Clean shopping cart UX",
            "High-performance image loading",
            "Refined brand typography"
        ],
        techStack: ["Next.js", "React", "Shopify Headless", "Framer Motion"],
        outcome: "A significantly cleaner shopping experience that enhanced visual branding, improved customer trust, and strengthened the overall mobile conversion rate.",
        imagePlaceholder: "Boutique Storefront",
        image: "/project-minimalist-label.png"
    }
]

export default function WorkPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero / Header Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-light to-background" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
                            A curated look at real websites we've built.
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                    >
                        Selected Work That <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Reflects Our Standard.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
                    >
                        AiDECKK builds modern, high-performance websites focused on trust, clarity, and business growth. This page showcases a select set of projects that reflect our approach to premium web development.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Button size="lg" asChild className="h-14 px-8 text-base">
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="h-14 px-8 text-base">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Intro / Positioning Strip */}
            <section className="py-12 border-y border-white/5 bg-navy/30 relative z-20">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-white/80 font-medium text-lg md:text-xl tracking-wide">
                        Three projects. Fully custom. Built with attention to detail.
                    </h3>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-32 relative z-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="space-y-32">
                        {selectedProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                className={cn(
                                    "flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group",
                                    idx % 2 !== 0 && "lg:flex-row-reverse"
                                )}
                            >
                                {/* Project Screenshot Mockup */}
                                <div className="w-full lg:w-1/2 aspect-[4/3] md:aspect-[16/10] relative rounded-3xl overflow-hidden glass-card border-white/10 group-hover:border-primary/20 transition-all duration-700 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-navy-light">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 flex flex-col items-center justify-center p-6">
                                        {/* Browser chrome mockup frame */}
                                        <div className="w-full h-full max-w-[90%] max-h-[90%] border border-white/10 bg-black/40 rounded-xl shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                            <div className="h-7 shrink-0 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                            </div>
                                            <div className="flex-1 relative overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover object-top"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Block */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <div className="mb-6 flex gap-3 items-center">
                                        <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h2 className="font-outfit text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                        {project.title}
                                    </h2>

                                    <p className="text-white/80 text-lg leading-relaxed mb-10">
                                        {project.summary}
                                    </p>

                                    <div className="space-y-8">
                                        {/* The Need */}
                                        <div>
                                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Client Need</h4>
                                            <p className="text-white/60 leading-relaxed text-sm md:text-base">
                                                {project.challenge}
                                            </p>
                                        </div>

                                        {/* The Solution */}
                                        <div>
                                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">What AiDECKK Built</h4>
                                            <p className="text-white/60 leading-relaxed text-sm md:text-base">
                                                {project.solution}
                                            </p>
                                        </div>

                                        {/* Deliverables Grid & Tech Stack */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                                            <div>
                                                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Highlights</h4>
                                                <ul className="space-y-3">
                                                    {project.deliverables.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2.5 text-white/70">
                                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                            <span className="text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Outcome</h4>
                                                    <p className="text-white/70 text-sm leading-relaxed border-l-2 border-primary pl-4 py-1">
                                                        {project.outcome}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Tech Stack</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.techStack.map(tech => (
                                                            <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-accent" />
                                            <p className="text-white/80 text-sm leading-relaxed pl-2">
                                                <strong className="text-white font-semibold block mb-1">Portfolio Showcase</strong>
                                                This is one of our selected portfolio projects. We can create a similar, fully custom website engineered specifically for your business.
                                            </p>
                                        </div>
                                        <Button variant="outline" className="group/btn h-12" asChild>
                                            <Link href="/contact">
                                                Discuss Similar Website
                                                <ArrowRight className="w-4 h-4 ml-2 inline-block transform group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capability Reinforcement Section */}
            <section className="py-24 bg-navy-light relative border-y border-white/5">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
                    <SectionHeader
                        subtitle="The Standard"
                        title="What These Projects Represent"
                        description="Our selected work represents more than just visuals. It demonstrates our commitment to scalable methodology and premium digital craftsmanship."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-card p-8">
                            <h4 className="font-outfit text-xl font-semibold text-white mb-3">Custom Execution</h4>
                            <p className="text-sm text-white/60 leading-relaxed">No generic templates. Every structure and component is hand-coded to fit the specific business goal and market positioning.</p>
                        </div>
                        <div className="glass-card p-8">
                            <h4 className="font-outfit text-xl font-semibold text-white mb-3">Business-Focused</h4>
                            <p className="text-sm text-white/60 leading-relaxed">Design is pointless if it doesn't convert. We prioritize clear messaging, strategic CTAs, and trust-building UX in every build.</p>
                        </div>
                        <div className="glass-card p-8">
                            <h4 className="font-outfit text-xl font-semibold text-white mb-3">Modern Engineering</h4>
                            <p className="text-sm text-white/60 leading-relaxed">Instant load times, SEO-ready architecture, and flawless responsive layouts engineered with the industry's best modern tools.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Confidence Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <SectionHeader
                        title="How We Approach Every Build"
                        description="A structured, professional process that guarantees quality from day one."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {[
                            { num: "01", title: "Discovery" },
                            { num: "02", title: "Structure" },
                            { num: "03", title: "Design Direction" },
                            { num: "04", title: "Development" },
                            { num: "05", title: "Launch & Refine" }
                        ].map((step, idx) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex md:flex-col items-center md:text-center gap-4 md:gap-6 relative z-10 p-4 md:p-0"
                            >
                                <div className="w-14 h-14 rounded-full bg-navy border border-white/10 flex items-center justify-center font-outfit font-bold text-primary group-hover:border-primary/50 transition-colors shadow-lg">
                                    {step.num}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{step.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 bg-primary/5 relative border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-outfit text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Need a Website That Looks Serious and Performs Like It Should?
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed">
                            If you’re building a modern brand and want a website that improves trust, presentation, and conversion potential, AiDECKK can help you build it properly.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" asChild className="h-14 px-10 text-lg">
                                <Link href="/contact">Start a Project</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="h-14 px-10 text-lg">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
