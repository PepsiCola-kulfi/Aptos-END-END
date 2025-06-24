"use client"

import { FloatingNav } from "@/components/ui/floating-navbar"
import HeroSection from "@/components/Hero"
import Lenis from "lenis"
import { HomeIcon as IconHome, UserIcon as IconUser, MessageCircleIcon as IconMessage } from "lucide-react"
import { useEffect } from "react"
import { Logos } from "@/components/LogoCloud"
import { Features } from "@/components/BentoUI"

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({})

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div
      className="relative bg-black min-h-screen w-full overflow-hidden "
      style={{
        background: `
      linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 20%, #000000 100%),
      url('/images/gradient.png')
    `,
        backgroundPosition: "top center, top center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% auto, 100% auto",
        backgroundBlendMode: "normal, normal",
      }}
    >
     
    
 
        {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-10 py-4">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Hero Section */}
      <HeroSection />


      <Features />

    </div>
  )
}
