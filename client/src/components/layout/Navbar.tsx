import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Speaking", href: "/speaking" },
    { name: "About", href: "/#about" }, 
    { name: "Topics", href: "/#topics" },
    { name: "Media", href: "/#media" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled || isOpen ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <div className="container-width flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-heading font-black text-2xl tracking-tight text-foreground hover:text-primary transition-colors">
            Enrique Rubio<span className="text-primary">.</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={cn(
                  "text-base font-bold transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-foreground"
                )}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <Button className="font-bold px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30" size="lg">
            Book Enrique
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 animate-in slide-in-from-top-5 shadow-xl">
          <div className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a 
                  className="text-xl font-bold text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button className="w-full mt-4 rounded-full py-6 text-lg" size="lg">
              Book Enrique
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}