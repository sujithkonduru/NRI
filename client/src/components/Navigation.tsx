// src/components/Navigation.jsx
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Facilities", href: "/facilities" },
    { label: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href) => {
    setMobileMenuOpen(false);
    setLocation(href);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
          : "bg-white/80 backdrop-blur-md border-b border-blue-100"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
         <Link
  href="/"
  className="flex items-center gap-3 group cursor-pointer"
>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72lt-aw6yPTwWkgtVLCBFd38R1pSvjeopQw&s"
    alt="Sri NRI Logo"
    className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-blue-100 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
  />

  <div className="flex flex-row items-center gap-2 sm:gap-3">
  <span className="text-xl sm:text-2xl font-bold text-blue-700 leading-tight whitespace-nowrap">
    Sri NRI 
  </span>
  <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">
    High School
  </span>
</div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location === link.href ? "text-blue-600" : "text-slate-600"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Button
              onClick={() => handleNavigation("/admissions")}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-slideDown">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-left px-3 py-2 rounded-lg transition-colors ${
                    location === link.href
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50 text-slate-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavigation("/admissions")}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}