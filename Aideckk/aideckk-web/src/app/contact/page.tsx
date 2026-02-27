"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Button } from "@/components/Button"
import { FAQItem } from "@/components/FAQAccordion"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "How long does a website project take?",
        answer: "Project timelines depend largely on scope. A high-converting landing page might take 2-3 weeks, while a comprehensive custom corporate website or e-commerce platform typically requires 6-12 weeks from discovery to final launch."
    },
    {
        question: "Do you build fully custom websites?",
        answer: "Yes. We specialize entirely in bespoke engineering. We do not use pre-made templates or cheap theme builders. Every project is designed from the ground up to match your brand's unique requirements, ensuring maximum speed, scalability, and visual impact."
    },
    {
        question: "Can you redesign my existing website?",
        answer: "Absolutely. Website modernization is one of our core services. We'll audit your current site, migrate your existing content, and engineer a brand new front-end to bring your digital presence up to premium, modern standards."
    },
    {
        question: "What technologies do you use?",
        answer: "We focus on a modern, high-performance tech stack. Our primary tools include Next.js, React, TypeScript, and Tailwind CSS. For CMS needs, we prefer headless architectures (like Sanity or Shopify) to guarantee performance and security."
    },
    {
        question: "Will my website be mobile-friendly and SEO-ready?",
        answer: "Yes. Responsive design and technical SEO aren't add-ons; they are foundational to how we build. Your site will look flawless on every device and will be engineered with clean code to ensure search engines can index it easily."
    },
    {
        question: "Do you build e-commerce websites?",
        answer: "Yes, we build high-end scalable e-commerce solutions. We frequently use Headless Shopify integrated with a custom Next.js front-end to provide instant page loads, which directly reduces cart abandonment and boosts sales."
    },
    {
        question: "Do you provide maintenance after launch?",
        answer: "Yes. Post-launch support is highly recommended for ambitious brands. We offer flexible ongoing maintenance retainers to ensure your platform remains secure, fast, and up-to-date with your latest content needs over time."
    },
    {
        question: "How do pricing and project scope work?",
        answer: "We use a transparent, value-based pricing model. After our initial discovery call, we provide a detailed proposal outlining the exact scope, timeline, and investment required. There are no hidden fees or surprise upcharges."
    }
]

export default function ContactPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormState("submitting")

        const form = e.currentTarget
        const formData = new FormData(form)
        const formObject = Object.fromEntries(formData.entries())

        try {
            const response = await fetch("https://formsubmit.co/ajax/saksham2477@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "New Project Inquiry - AiDECKK",
                    ...formObject
                })
            })

            if (response.ok) {
                setFormState("success")
                form.reset()
                setTimeout(() => setFormState("idle"), 5000)
            } else {
                throw new Error("Form submission failed")
            }
        } catch (error) {
            console.error("Form error:", error)
            alert("Something went wrong. Please try emailing us directly.")
            setFormState("idle")
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Contact Header */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-light to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <SectionHeader
                        subtitle="Start a Project"
                        title="Tell us what you're building."
                        description="AiDECKK is best suited for businesses looking for a serious website upgrade built with quality, clarity, and long-term value in mind. Fill out the form below to see if we're a technical match."
                        className="mb-8"
                    />
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-12 relative z-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16">

                        {/* Direct Contact Info & Flow */}
                        <div className="lg:col-span-4 order-2 lg:order-1 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="font-outfit text-2xl font-bold text-white mb-6">Direct Contact</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <a href="mailto:aideckk00@gmail.com" className="flex items-start gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-sm font-medium uppercase tracking-wide mb-1">Email</p>
                                                <p className="text-white text-lg font-medium group-hover:text-primary transition-colors">aideckk00@gmail.com</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+919838018868" className="flex items-start gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-sm font-medium uppercase tracking-wide mb-1">Phone</p>
                                                <p className="text-white text-lg font-medium group-hover:text-primary transition-colors">+91 98380 18868</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-sm font-medium uppercase tracking-wide mb-1">Based In</p>
                                                <p className="text-white text-lg font-medium">India</p>
                                                <p className="text-white/60 text-sm mt-1">Serving clients globally.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="glass-card p-8 bg-navy/50"
                            >
                                <h3 className="font-outfit text-xl font-bold text-white mb-6">What Happens Next</h3>
                                <div className="space-y-6 relative before:absolute before:inset-0 before:left-[15px] before:w-px before:bg-white/10 before:h-[calc(100%-24px)] before:mt-2">
                                    {[
                                        { title: "Review", desc: "We review your requirements carefully." },
                                        { title: "Discuss", desc: "We schedule a strategic discovery call." },
                                        { title: "Propose", desc: "We share a detailed technical roadmap & proposal." },
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4 relative">
                                            <div className="w-8 h-8 rounded-full bg-navy border-2 border-primary flex items-center justify-center font-bold text-primary text-xs shrink-0 z-10">
                                                {i + 1}
                                            </div>
                                            <div className="pt-1">
                                                <h4 className="text-white font-medium mb-1">{step.title}</h4>
                                                <p className="text-white/50 text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Inquiry Form */}
                        <div className="lg:col-span-8 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="glass-card p-6 md:p-10 relative overflow-hidden h-full border-t border-t-white/10"
                            >
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />

                                {formState === "success" ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-20 min-h-[500px]">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                            className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6"
                                        >
                                            <Send className="w-10 h-10 ml-1" />
                                        </motion.div>
                                        <h2 className="font-outfit text-3xl font-bold text-white mb-4">Inquiry Received</h2>
                                        <p className="text-white/60 text-lg max-w-md">
                                            Thank you for reaching out. Our engineering team is reviewing your project details and will be in touch shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-medium text-white/80">Company / Brand Name</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans"
                                                    placeholder="Company Inc."
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="service" className="text-sm font-medium text-white/80">Primary Service Needed</label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    className="w-full bg-navy border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans appearance-none"
                                                >
                                                    <option value="custom">Custom Corporate Website</option>
                                                    <option value="ecommerce">E-Commerce Solution</option>
                                                    <option value="landing">High-Converting Landing Page</option>
                                                    <option value="redesign">Website Redesign</option>
                                                    <option value="other">Other / Not Sure</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="budget" className="text-sm font-medium text-white/80">Estimated Budget</label>
                                                <select
                                                    id="budget"
                                                    name="budget"
                                                    className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans appearance-none"
                                                >
                                                    <option value="undecided">Not Sure / To be discussed</option>
                                                    <option value="5k-10k">$500 - $5k</option>
                                                    <option value="10k-25k">$5k - $10k</option>
                                                    <option value="25k-50k">$10k - $25k</option>
                                                    <option value="50k+">$25k - $50k</option>
                                                    <option value="50k+">$50k+</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="timeline" className="text-sm font-medium text-white/80">Desired Timeline</label>
                                                <select
                                                    id="timeline"
                                                    name="timeline"
                                                    className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans appearance-none"
                                                >
                                                    <option value="asap">As soon as possible</option>
                                                    <option value="15 days">Within 15 days</option>
                                                    <option value="30 days">Within 30 days</option>
                                                    <option value="60 days">Within 60 days</option>
                                                    <option value="flexible">Flexible</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="details" className="text-sm font-medium text-white/80">Project Overview</label>
                                            <textarea
                                                id="details"
                                                name="details"
                                                required
                                                rows={5}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans resize-none"
                                                placeholder="Tell us about the business goals, technical requirements, and what you aim to achieve with this build..."
                                            />
                                        </div>

                                        <Button
                                            size="lg"
                                            type="submit"
                                            className="w-full h-14 text-lg mt-4"
                                            disabled={formState === "submitting"}
                                        >
                                            {formState === "submitting" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                "Submit Project Inquiry"
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-navy-light relative border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
                    <SectionHeader
                        subtitle="Common Questions"
                        title="Frequently Asked Questions"
                        description="Clear answers about out process, capabilities, and how we deliver world-class web solutions."
                        className="mb-16"
                    />

                    <div className="glass-card p-6 md:p-10 divide-y-0">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openFaqIndex === index}
                                onClick={() => toggleFaq(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Close */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                    <h2 className="font-outfit text-3xl font-bold text-white mb-6">Tell us what you're building. We'll help you shape the right web solution.</h2>
                    <p className="text-white/60 text-lg mb-8">Direct communication. Quality engineering. No agency fluff.</p>
                    <a href="mailto:aideckk00@gmail.com" className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all active:scale-95 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 h-11 px-6 py-2">
                        Email Us Directly
                    </a>
                </div>
            </section>
        </div>
    )
}
