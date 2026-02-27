"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Target, Zap, Shield, Rocket, Users, Award } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Button } from "@/components/Button"
import { cn } from "@/lib/utils"

const values = [
    {
        title: "Uncompromising Quality",
        description: "We don't do 'good enough.' Every line of code and pixel is meticulously crafted to global standards.",
        icon: <Award className="w-6 h-6" />
    },
    {
        title: "Radical Transparency",
        description: "Clear communication, honest timelines, and no technical jargon designed to confuse you.",
        icon: <Shield className="w-6 h-6" />
    },
    {
        title: "Speed of Execution",
        description: "We move fast without breaking things. Our processes are refined to deliver maximum value in minimum time.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        title: "Business-First Approach",
        description: "We don't build websites just to look pretty; we build them to solve your core business challenges.",
        icon: <Target className="w-6 h-6" />
    }
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* About Header */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-background z-0" />
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
                            The AiDECKK Standard
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                    >
                        Quality Over Volume. <br />
                        Execution Over Promises.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl leading-relaxed"
                    >
                        We are a modern web development company focused on doing one thing exceptionally well: building high-performance websites for ambitious brands that demand quality.
                    </motion.p>
                </div>
            </section>

            {/* Story & Mission Section */}
            <section className="py-24 relative z-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Story */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="font-outfit text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">The Boutique Advantage</h2>
                            <p className="text-white/70 leading-relaxed text-lg">
                                AiDECKK operates on a different model than standard digital agencies. We don't chase volume, and we don't take on hundreds of clients at once. We are a specialized studio intentionally built to focus deeply on a select number of premium projects.
                            </p>
                            <p className="text-white/70 leading-relaxed text-lg">
                                With <strong className="text-white">5 major projects delivered to date</strong>, our track record is built on highly custom, meticulously engineered websites. We treat every single project as a flagship build because our reputation relies entirely on the quality we produce, not the sheer quantity of clients we cycle through.
                            </p>
                            <p className="text-white/70 leading-relaxed text-lg font-medium border-l-4 border-l-primary pl-4">
                                Smaller scale means direct, hands-on attention. No account managers acting as middle-men. You work directly with the developers engineering your site.
                            </p>
                        </motion.div>

                        {/* Mission Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="glass-card p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 z-0" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <h3 className="font-outfit text-3xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-white/80 text-xl leading-relaxed">
                                    To empower brands with robust, scalable digital platforms that look stunning, load instantly, and fundamentally accelerate their business growth.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-navy-light relative border-y border-white/5">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeader
                        subtitle="Core Values"
                        title="The Principles That Drive Us"
                        description="Our culture is defined by relentless execution, technical mastery, and a deep commitment to our clients' success."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-card p-8 group hover:border-primary/30 transition-colors"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:bg-primary/10 transition-colors">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-outfit text-xl font-bold text-white">{value.title}</h3>
                                </div>
                                <p className="text-white/60 leading-relaxed pl-[3.25rem]">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Philosophy */}
            <section className="py-32 relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />

                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                            We believe a website is your most valuable digital asset. It should <span className="text-primary italic">never</span> be treated as an afterthought.
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-12" />
                        <p className="text-xl text-white/60 leading-relaxed mb-12">
                            Every project we take on is backed by a commitment to strategic execution, incredibly clean code, and premium design quality. We build websites meant to last, scale, and generate revenue.
                        </p>

                        <div className="flex justify-center gap-8 text-left max-w-2xl mx-auto">
                            <div>
                                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                                <h4 className="font-semibold text-white mb-2">Technical Excellence</h4>
                                <p className="text-sm text-white/50">Rigorous code standards.</p>
                            </div>
                            <div>
                                <Users className="w-6 h-6 text-primary mb-4" />
                                <h4 className="font-semibold text-white mb-2">Long-Term Partnership</h4>
                                <p className="text-sm text-white/50">Reliable after-launch support.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-t from-primary/5 to-transparent border-t border-white/5 relative">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <SectionHeader
                        title="Ready to discuss your project?"
                        description="AiDECKK partners with a limited number of clients per quarter to ensure maximum quality. Let's see if we're the right fit."
                        className="mb-10"
                    />
                    <Button size="lg" asChild className="h-14 px-10 text-lg">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
