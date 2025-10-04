"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { LeetcodeIcon } from "@/components/icons/leetcode";
import { HuggingFaceIcon } from "@/components/icons/huggingface";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about", color: "#FBBC05" },
    { label: "Experience", id: "experience", color: "#4285F4" },
    { label: "Projects", id: "projects", color: "#EA4335" },
    { label: "Skills", id: "skills", color: "#34A853" },
    { label: "Testimonials", id: "testimonials", color: "#FF69B4" },
    { label: "Contact", id: "contact", color: "#87CEEB" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 sm:px-6 lg:px-10 py-3 sm:py-4 rounded-full transition-all duration-300
        ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border border-border"
            : "bg-black/70 border border-white/10 backdrop-blur-lg"
        } shadow-xl`}
      >
        <div className="flex items-center justify-between space-x-4 sm:space-x-8 lg:space-x-16">
          {/* Profile Photo */}
          <img
            src="/logos/mr-dev.png"
            alt="Profile Photo"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:scale-110 transition-all duration-300"
          />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base text-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#FBBC05] transition-all duration-300 whitespace-nowrap"
                style={{ "--hover-color": item.color } as React.CSSProperties}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Connect Button */}
          {/* <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex rounded-full text-white border border-white/20 hover:bg-white/10 transition px-3 sm:px-5 py-2 text-xs sm:text-sm"
            asChild
          >
            <a href="https://calendly.com/aashiqmustak5969/30min" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="hidden lg:inline">Connect with me</span>
              <span className="lg:hidden">Connect</span>
            </a>
          </Button> */}

          {/* Social Media Icons */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/Imran200216"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.linkedin.com/in/imran-b-9b150b28b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden rounded-full text-white border border-white/20 hover:bg-white/10 transition p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border rounded-2xl p-6 shadow-2xl">
            {/* Mobile Navigation Links */}
            <div className="space-y-4 mb-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3 px-4 rounded-lg hover:bg-muted/50 transition-all duration-300 text-lg font-medium"
                  style={{ color: item.color }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Connect Button */}
            {/* <Button
              variant="outline"
              size="lg"
              className="w-full mb-4 rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
              asChild
            >
              <a href="https://calendly.com/aashiqmustak5969/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Connect with me</span>
              </a>
            </Button> */}

            {/* Mobile Social Media Icons */}
            <div className="flex items-center justify-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/Imran200216"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/imran-b-9b150b28b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </Button>
              {/* <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://leetcode.com/u/aashiqmustak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LeetcodeIcon className="w-6 h-6 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://huggingface.co/aashiqmustak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HuggingFaceIcon className="w-6 h-6 text-white" />
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
