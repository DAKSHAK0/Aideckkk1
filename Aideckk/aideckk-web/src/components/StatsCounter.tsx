"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

interface StatsCounterProps {
    end: number
    suffix?: string
    label: string
    duration?: number
    delay?: number
}

export function StatsCounter({ end, suffix = "", label, duration = 2, delay = 0 }: StatsCounterProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [hasStarted, setHasStarted] = useState(false)

    // Use framer-motion springs for smooth counting
    const spring = useSpring(0, {
        mass: 1,
        stiffness: 50,
        damping: 15,
        duration: duration * 1000
    })

    // Transform spring value to rounded number
    const display = useTransform(spring, (current) => Math.round(current))

    useEffect(() => {
        if (isInView && !hasStarted) {
            setTimeout(() => {
                spring.set(end)
                setHasStarted(true)
            }, delay * 1000)
        }
    }, [isInView, hasStarted, end, spring, delay])

    return (
        <div className="flex flex-col items-center justify-center p-6 text-center" ref={ref}>
            <div className="flex items-baseline justify-center gap-1 font-outfit font-bold text-5xl md:text-6xl text-white mb-2">
                <motion.span>{display}</motion.span>
                {suffix && <span className="text-primary">{suffix}</span>}
            </div>
            <p className="text-white/60 font-medium tracking-wide text-sm uppercase">
                {label}
            </p>
        </div>
    )
}
