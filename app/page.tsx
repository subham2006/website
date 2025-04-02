import Link from "next/link"
import ParticleAnimation from "@/components/particle-animation"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Full-screen particle animation */}
      <div className="h-screen relative">
        <ParticleAnimation text="subham mitra" fullScreen />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Subham Mitra</p>
        </div>
      </div>
    </main>
  )
}

