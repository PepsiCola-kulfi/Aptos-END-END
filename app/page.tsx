import { FloatingNav } from "@/components/ui/floating-navbar"
import Lenis from "lenis";
import { Home as IconHome, User as IconUser, MessageSquare as IconMessage } from "lucide-react";


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
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
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
      className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Bg.png')",
      }}
    >
      <div className="absolute top-0 left-0 right-0 z-10 py-4">
        <FloatingNav navItems={navItems}/>
      </div>
      

      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </div>
  )
}
