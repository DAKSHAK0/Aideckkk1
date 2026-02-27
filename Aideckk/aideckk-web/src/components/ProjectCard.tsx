import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    title: string
    category: string
    description: string
    imageSlug: string
    index?: number
    featured?: boolean
    className?: string
}

export function ProjectCard({
    title,
    category,
    description,
    imageSlug,
    index = 0,
    featured = false,
    className
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl bg-navy-light border border-white/5 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
                featured ? "md:flex-row md:items-center" : "",
                className
            )}
        >
            {/* Image Container */}
            <div
                className={cn(
                    "relative overflow-hidden bg-white/5",
                    featured ? "w-full md:w-3/5 aspect-video md:aspect-[4/3] lg:aspect-video" : "w-full aspect-video"
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-navy-light/80 via-transparent to-transparent z-10 opacity-60 mix-blend-multiply" />

                {/* Placeholder gradient block if no real image provided */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-primary/20 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center">
                    <span className="font-outfit font-bold text-4xl text-white/5 uppercase tracking-widest mix-blend-overlay">Preview</span>
                </div>
            </div>

            {/* Content Container */}
            <div
                className={cn(
                    "relative z-20 flex flex-col p-8 md:p-10",
                    featured ? "w-full md:w-2/5 justify-center" : "flex-1"
                )}
            >
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-primary tracking-wide uppercase">
                        {category}
                    </span>
                </div>

                <h3 className="font-outfit text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary-foreground transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-8 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors group/link"
                    >
                        View Case Study
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
