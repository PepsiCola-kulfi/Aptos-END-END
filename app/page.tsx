import { FloatingNav } from "@/components/ui/floating-navbar"

export default function Home() {
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Bg.png')",
      }}
    >
      {/* Navigation */}
      <FloatingNav/>

      {/* Hero Content */}
      

      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </div>
  )
}
