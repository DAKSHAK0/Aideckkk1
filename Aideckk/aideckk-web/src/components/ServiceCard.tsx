import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
    title: string
    description: string
    icon: ReactNode
    index?: number
    className?: string
}

export function ServiceCard({ title, description, icon, index = 0, className }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
                "glass-card p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] hover:border-primary/30",
                className
            )}
        >
            {/* Background glow on hover */}
            <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-[80px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                    {icon}
                </div>

                <h3 className="font-outfit text-2xl font-semibold text-white mb-4 group-hover:text-primary-foreground transition-colors">
                    {title}
                </h3>

                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}
