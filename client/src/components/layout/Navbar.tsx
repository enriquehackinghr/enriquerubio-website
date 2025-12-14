import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Speaking", href: "/speaking" },
    { name: "About", href: "/#about" }, 
    { name: "Topics", href: "/#topics" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F3F4F6]/90 backdrop-blur border-b-2 border-black h-20 flex items-center">
      <div className="container-width w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-heading font-bold text-2xl tracking-tighter text-foreground uppercase border-2 border-black bg-white px-4 py-1 shadow-[4px_4px_0px_0px_#00E676] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary fill-black" />
            Enrique_Rubio
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={cn(
                  "text-sm font-mono font-bold px-4 py-2 border border-transparent hover:border-black hover:bg-white transition-all uppercase tracking-wider",
                  location === link.href ? "text-primary bg-black border-black" : "text-foreground"
                )}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <Button size="default" className="bg-primary text-black font-bold uppercase tracking-wider rounded-none border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            Book_Enrique
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#F3F4F6] border-b-2 border-black p-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a 
                  className="text-xl font-heading font-bold py-3 border-b border-black text-foreground hover:text-primary uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button className="w-full mt-4 bg-primary text-black rounded-none border-2 border-black font-bold uppercase" size="lg">
              Book_Enrique
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}