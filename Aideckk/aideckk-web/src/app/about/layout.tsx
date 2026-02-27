import { type Metadata } from "next"

export const metadata: Metadata = {
    title: "About Our Web Engineering Agency | AiDECKK",
    description: "Learn why ambitious brands choose AiDECKK. Our mission, core values, and philosophy behind building premium websites.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children
}
