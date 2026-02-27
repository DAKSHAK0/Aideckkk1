"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Monitor, ShoppingBag, LayoutTemplate, Layers, Wrench, Code2, Database } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Button } from "@/components/Button"
import { cn } from "@/lib/utils"

const services = [
    {
        id: "custom-dev",
        title: "Custom Website Development",
        icon: <Code2 className="w-8 h-8" />,
        overview: "From-scratch builds tailored exactly to your unique business logic, design requirements, and scalability needs.",
        forWho: "Ambitious startups, large enterprises, and brands needing bespoke functionality.",
        deliverables: ["Custom Architecture", "API Integrations", "Advanced Animations", "Headless CMS Setup"],
        benefits: "Total ownership, zero bloat, infinite scalability, and uncompromising design execution.",
        outcome: "A digital asset that perfectly aligns with your brand's operational needs and growth trajectory."
    },
    {
        id: "business-sites",
        title: "Corporate & Business Websites",
        icon: <Monitor className="w-8 h-8" />,
        overview: "High-end corporate platforms designed to build immediate trust, establish authority, and streamline lead generation.",
        forWho: "Professional service firms, B2B companies, agencies, and established local businesses.",
        deliverables: ["Strategic UI/UX", "Service Showcases", "Lead Gen Forms", "SEO Optimization"],
        benefits: "Instantly positions your company as a premium, reliable industry leader.",
        outcome: "Higher perceived brand value leading to better clients and increased inquiry volume."
    },
    {
        id: "ecommerce",
        title: "E-Commerce Development",
        icon: <ShoppingBag className="w-8 h-8" />,
        overview: "High-performance online stores engineered for fast load times, seamless checkouts, and maximum conversion rates.",
        forWho: "Premium D2C brands, women's boutiques, and high-end digital retailers.",
        deliverables: ["Shopify/Next.js Builds", "Custom Cart Flow", "Premium Visuals", "Inventory Sync"],
        benefits: "Eliminates cart abandonment caused by slow speeds or clunky user experiences.",
        outcome: "A scalable storefront that drives more sales and provides an upscale shopping experience."
    },
    {
        id: "landing-pages",
        title: "High-Converting Landing Pages",
        icon: <LayoutTemplate className="w-8 h-8" />,
        overview: "Laser-focused single pages designed specifically for marketing campaigns, product launches, or event registrations.",
        forWho: "Performance marketers, SaaS companies, and ad agencies.",
        deliverables: ["Conversion Copywriting Integration", "A/B Testing Ready", "Fast Load Architecture", "Analytics Tracking"],
        benefits: "Maximizes the ROI of your ad spend through scientifically structured layouts.",
        outcome: "Significantly lowers cost-per-acquisition (CPA) and boosts overall campaign effectiveness."
    },
    {
        id: "redesign",
        title: "Website Redesign & Modernization",
        icon: <Layers className="w-8 h-8" />,
        overview: "Complete visual and technical overhaul of outdated, underperforming, or hard-to-maintain websites.",
        forWho: "Brands that have outgrown their current site or are undergoing a rebrand.",
        deliverables: ["UX Audit", "Modern Tech Stack Migration", "Content Restructuring", "Mobile Optimization"],
        benefits: "Brings your digital presence back to the cutting edge of modern web standards.",
        outcome: "Revitalized brand image and improved user engagement metrics across the board."
    },
    {
        id: "maintenance",
        title: "Ongoing Support & Maintenance",
        icon: <Wrench className="w-8 h-8" />,
        overview: "Reliable, retained technical partnership to ensure your website remains fast, secure, and up-to-date post-launch.",
        forWho: "Founders and marketing teams who need a dedicated technical partner.",
        deliverables: ["Security Patches", "Performance Monitoring", "Content Updates", "Technical Consultation"],
        benefits: "Peace of mind knowing your digital flagship is actively monitored and optimized.",
        outcome: "Zero downtime, protected revenue streams, and continuous technical improvement."
    }
]

const techStack = [
    { name: "Next.js", icon: "N" },
    { name: "React", icon: "R" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "TW" },
    { name: "Framer Motion", icon: "FM" },
    { name: "Node.js", icon: "NJ" },
    { name: "Shopify Headless", icon: "S" },
    { name: "Sanity CMS", icon: "CM" },
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Services Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 rounded-[4rem] mx-4 md:mx-8 lg:mx-12 border border-white/5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <SectionHeader
                        subtitle="Our Expertise"
                        title="Specialized Web Engineering."
                        description="AiDECKK is a premium specialized studio. We don't build apps. We don't do general marketing. We build exceptional websites that drive trust, perception, and tangible business results."
                        className="mb-16"
                    />
                </div>
            </section>

            {/* Detailed Services Breakdown */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="space-y-32">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={cn(
                                    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
                                    idx % 2 !== 0 && "lg:grid-cols-[1fr_1fr]" // Keep same order for mobile, swap on desktop via css grid below
                                )}
                            >
                                {/* Visual / Title Block */}
                                <div className={cn("flex flex-col", idx % 2 !== 0 && "lg:order-2")}>
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 glow-effect">
                                        {service.icon}
                                    </div>
                                    <h2 className="font-outfit text-3xl md:text-5xl font-bold text-white mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl text-white/70 leading-relaxed mb-8">
                                        {service.overview}
                                    </p>
                                    <div className="glass-card p-6 border-l-4 border-l-primary bg-primary/5">
                                        <p className="text-sm text-white/80"><strong className="text-white">Built For:</strong> {service.forWho}</p>
                                    </div>
                                </div>

                                {/* Details Block */}
                                <div className={cn("glass-card p-8 md:p-12 space-y-8 relative overflow-hidden", idx % 2 !== 0 && "lg:order-1")}>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Key Deliverables</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {service.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-white/70">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">The Advantage</h4>
                                            <p className="text-white/60 text-sm leading-relaxed">{service.benefits}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">Business Outcome</h4>
                                            <p className="text-primary text-sm font-medium leading-relaxed">{service.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-24 bg-navy-light relative border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">The Modern Stack</h2>
                        <p className="text-white/60 text-lg">We strictly use modern, scalable technologies to ensure your project is built to global standards.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card p-6 flex flex-col items-center justify-center gap-4 group hover:border-primary/30 transition-colors"
                            >
                                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-2xl text-white/40 group-hover:text-primary transition-colors">
                                    {tech.icon}
                                </div>
                                <span className="font-medium inline-block text-white/80 group-hover:text-white transition-colors">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionHeader
                        subtitle="How We Work"
                        title="A Process Built for Precision."
                        description="Our structured approach guarantees transparency, predictable timelines, and zero surprises from kickoff to launch."
                        className="mb-20"
                    />

                    <div className="space-y-12 relative before:absolute before:inset-0 before:left-[27px] md:before:left-1/2 md:before:-translate-x-px md:before:bg-white/10 before:w-0.5 before:bg-white/10 before:h-full">
                        {[
                            { phase: "01", title: "Discovery & Strategy", desc: "We map out your business goals, technical requirements, and target audience to define the project scope." },
                            { phase: "02", title: "Planning & Architecture", desc: "Creating the structural blueprint, wireframes, and selecting the optimal technology stack for performance." },
                            { phase: "03", title: "UI/UX Direction", desc: "Crafting a premium, bespoke visual identity that aligns with your brand positioning and conversion goals." },
                            { phase: "04", title: "Development Engineering", desc: "Writing clean, scalable code. Building out interactive components, animations, and CMS integrations." },
                            { phase: "05", title: "QA & Testing", desc: "Rigorous cross-browser, responsive, and performance testing to ensure zero bugs upon launch." },
                            { phase: "06", title: "Launch & Support", desc: "Smooth go-live deployment followed by ongoing technical support and strategic optimization." },
                        ].map((step, i) => (
                            <motion.div
                                key={step.phase}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="relative flex flex-col md:flex-row items-center justify-between group"
                            >
                                <div className={cn("md:w-5/12 ml-16 md:ml-0 mb-6 md:mb-0", i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-3 md:text-left md:pl-12")}>
                                    <h3 className="font-outfit text-2xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                                </div>

                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-navy border-4 border-white/10 flex items-center justify-center font-bold text-primary z-10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300 md:order-2">
                                    {step.phase}
                                </div>

                                {/* Empty space for grid alignment */}
                                <div className={cn("md:w-5/12", i % 2 === 0 ? "md:order-3" : "md:order-1")} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Philosophy */}
            <section className="py-24 bg-gradient-to-t from-primary/5 to-transparent border-t border-white/5 relative">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="font-outfit text-4xl font-bold text-white mb-6">Custom Engagement Pricing</h2>
                    <p className="text-xl text-white/70 leading-relaxed mb-10">
                        We don't offer low-ticket templates or fixed-tier pricing tables. Every AiDECKK project is custom-scoped based on your exact functionality needs, complexity, and business goals. You invest in premium execution, hands-on collaboration, and long-term asset value.
                    </p>
                    <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-6 p-2 pr-6 rounded-full border-primary/20">
                        <Button size="lg" asChild className="w-full sm:w-auto rounded-full">
                            <Link href="/contact">Start a Conversation</Link>
                        </Button>
                        <span className="text-sm font-medium text-white/50 tracking-wide uppercase px-4 sm:px-0">
                            Serious Inquiries Only
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}
