import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-navy pt-16 pb-8 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-24 bg-primary/10 blur-[100px] rounded-full point-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-outfit text-3xl font-bold tracking-tight text-white">
                                AiDECKK<span className="text-primary">.</span>
                            </span>
                        </Link>
                        <div className="flex flex-col gap-4 mt-6">
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                                A specialized premium web development studio. We build custom, high-performance websites for businesses that care about quality and conversion.
                            </p>
                            <div className="flex items-center gap-3">
                                <a href="https://www.facebook.com/people/Aideckk/61577329656152/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary text-white/70 transition-all duration-300">
                                    <Facebook className="w-4 h-4" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="https://www.instagram.com/aideckk.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary text-white/70 transition-all duration-300">
                                    <Instagram className="w-4 h-4" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="https://x.com/Aideckk" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary text-white/70 transition-all duration-300">
                                    <Twitter className="w-4 h-4" />
                                    <span className="sr-only">X (formerly Twitter)</span>
                                </a>
                                <a href="https://www.linkedin.com/company/aideckk-in/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary text-white/70 transition-all duration-300">
                                    <Linkedin className="w-4 h-4" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="font-outfit text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services" className="text-white/60 hover:text-primary transition-colors text-sm">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/work" className="text-white/60 hover:text-primary transition-colors text-sm">
                                    Featured Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white/60 hover:text-primary transition-colors text-sm">
                                    About AiDECKK
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/60 hover:text-primary transition-colors text-sm">
                                    Start a Project
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Core Services */}
                    <div className="space-y-6">
                        <h3 className="font-outfit text-lg font-semibold text-white">Core Expertise</h3>
                        <ul className="space-y-3">
                            <li className="text-white/60 text-sm">Custom Web Development</li>
                            <li className="text-white/60 text-sm">Corporate Websites</li>
                            <li className="text-white/60 text-sm">E-Commerce Solutions</li>
                            <li className="text-white/60 text-sm">High-Converting Landing Pages</li>
                            <li className="text-white/60 text-sm">Website Modernization</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="font-outfit text-lg font-semibold text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:aideckk00@gmail.com" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                                    <Mail className="w-5 h-5 text-primary group-hover:text-primary/80 mt-0.5" />
                                    <span className="text-sm">aideckk00@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919838018868" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                                    <Phone className="w-5 h-5 text-primary group-hover:text-primary/80 mt-0.5" />
                                    <span className="text-sm">+91 98380 18868</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-white/60">
                                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                <span className="text-sm">Global Operations<br />India & International</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} AiDECKK. All rights reserved. Built for scale.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
