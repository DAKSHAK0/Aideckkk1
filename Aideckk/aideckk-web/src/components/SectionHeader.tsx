import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    description?: string
    align?: "left" | "center"
    className?: string
    children?: ReactNode
}

export function SectionHeader({
    title,
    subtitle,
    description,
    align = "center",
    className,
    children,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-primary font-medium tracking-wider uppercase text-sm"
                >
                    {subtitle}
                </motion.span>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-outfit text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl"
            >
                {title}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mt-2"
                >
                    {description}
                </motion.p>
            )}

            {children && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6"
                >
                    {children}
                </motion.div>
            )}
        </div>
    )
}
