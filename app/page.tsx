"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import Lenis from "lenis";
import { Home as IconHome, User as IconUser, MessageSquare as IconMessage } from "lucide-react";
import { useEffect, useMemo } from "react";

export default function Home() {
  // Memoize navItems to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
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
    ],
    []
  );

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness of scrolling
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Bg.png')",
        backgroundColor: "#f0f0f0", // Fallback background color
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

      {/* Floating Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50 py-4">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">Welcome to My Website</h1>
        <p className="mt-4 max-w-md text-lg">
          Explore our content, learn more about us, or get in touch!
        </p>
        <a
          href="/about"
          className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}