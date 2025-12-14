import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    <nav className="fixed top-0 w-full z-50 bg-[#FFFCF5] border-b-2 border-black h-20 flex items-center">
      <div className="container-width w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-heading font-black text-2xl tracking-tight text-foreground uppercase border-2 border-black bg-white px-3 py-1 brutal-shadow-sm hover:brutal-shadow transition-all">
            Enrique Rubio
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={cn(
                  "text-base font-bold px-4 py-2 rounded-md border-2 border-transparent hover:border-black hover:bg-white transition-all",
                  location === link.href ? "text-primary border-black bg-white brutal-shadow-sm" : "text-foreground"
                )}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <Button size="default">
            Book Enrique
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 border-2 border-black bg-white brutal-shadow-sm active:translate-y-1 active:shadow-none transition-all"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FFFCF5] border-b-2 border-black p-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a 
                  className="text-xl font-bold py-3 border-b-2 border-dashed border-gray-300 text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button className="w-full mt-4" size="lg">
              Book Enrique
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}