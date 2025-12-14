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
    { name: "About", href: "/#about" }, // Placeholder links
    { name: "Topics", href: "/#topics" },
    { name: "Media", href: "/#media" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container-width flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="font-heading font-bold text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity">
          Enrique Rubio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}>
                {link.name}
              </Link>
            ))}
          </div>
          <Button className="font-semibold px-6" size="lg">
            Book Enrique
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-lg font-medium py-2 border-b border-gray-50 text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                {link.name}
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