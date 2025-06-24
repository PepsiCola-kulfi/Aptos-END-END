import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Waitlist Counter */}
      <div className="flex items-center space-x-3 mb-8 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
        {/* Avatar Images */}
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-500 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
        </div>
        <span className="text-white/90 text-sm font-medium">2.4K currently on the waitlist</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 max-w-6xl leading-tight">
        Building the Future
      </h1>

      {/* Subheading */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-white/90 italic mb-8 max-w-4xl font-light">
        One Startup at a Time.
      </h2>

      {/* Description */}
      <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
        Be the first to know when we launch.
        <br />
        Join the waitlist and get exclusive early access.
      </p>

      {/* Email Signup Form */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 w-full max-w-lg">
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="bg-black/50 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20 flex-1 h-12 rounded-full px-6"
        />
        <Button className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 h-12 rounded-full whitespace-nowrap transition-all duration-200">
          Join The Waitlist
        </Button>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-8">
        <a
          href="#"
          className="text-white/60 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="#"
          className="text-white/60 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
          aria-label="Twitter"
        >
          <Twitter size={24} />
        </a>
        <a
          href="#"
          className="text-white/60 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  )
}
