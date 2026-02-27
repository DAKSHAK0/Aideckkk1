"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
    index: number
}

export function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="border-b border-white/10 last:border-0"
        >
            <button
                type="button"
                onClick={onClick}
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="font-outfit text-lg md:text-xl font-medium text-white pr-8">
                    {question}
                </span>
                <div
                    className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300",
                        isOpen ? "bg-primary/20 border-primary/30 text-primary rotate-180" : "bg-white/5 text-white/50"
                    )}
                >
                    <ChevronDown className="w-5 h-5 transition-transform" />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-white/60 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
