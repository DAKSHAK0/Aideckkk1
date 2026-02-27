"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "./Button"
import { cn } from "@/lib/utils"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    // Handle scroll effect for glassmorphism
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    // Prevent background scrolling when mobile menu is open
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled || isMobileMenuOpen
                        ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="relative z-50 flex items-center gap-2">
                            <span className="font-outfit text-2xl font-bold tracking-tight text-white">
                                AiDECKK<span className="text-primary">.</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-white",
                                        pathname === link.href ? "text-white" : "text-white/70"
                                    )}
                                >
                                    {link.label}
                                    {pathname === link.href && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="h-0.5 w-full bg-primary mt-1"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <Button asChild size="sm">
                                <Link href="/contact">Start Project</Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="relative z-50 md:hidden p-2 text-white/80 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Navigation Menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 pb-6 px-6 flex flex-col items-center justify-center min-h-[100dvh]"
                        style={{ overscrollBehavior: 'contain' }}
                    >
                        <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-3xl font-outfit font-medium transition-colors hover:text-primary",
                                            pathname === link.href ? "text-white" : "text-white/70"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                                className="pt-8 w-full border-t border-white/10"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                >
                                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                        Start Project
                                    </Link>
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
