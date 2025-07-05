"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { LeetcodeIcon } from "@/components/icons/leetcode";
import { HuggingFaceIcon } from "@/components/icons/huggingface";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-10 py-4 rounded-full transition-all duration-300
      ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border border-border"
          : "bg-black/70 border border-white/10 backdrop-blur-lg"
      } shadow-xl`}
    >
      <div className="flex items-center justify-between space-x-10">
        {/* Logo and Name */}
        {/* Logo and Name */}
<div className="flex items-center space-x-4">
  <img
                src="/lovable-uploads/6d1eec40-9ea8-43ce-9aab-8c45748e5c14.png"

    alt="Profile Photo"
    className="w-8 h-8 rounded-full"
  />
  <span className="text-white font-semibold text-base">MD</span>
</div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-base text-white">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Connect Button */}
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full text-white border border-white/20 hover:bg-white/10 transition px-5 py-2 text-sm"
          asChild
        >
          <a href="#contact" className="flex items-center space-x-2">
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
        </Button>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/aashiqmustak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://linkedin.com/in/mdaashiq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://leetcode.com/u/aashiqmustak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LeetcodeIcon className="w-5 h-5 text-white" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://huggingface.co/aashiqmustak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HuggingFaceIcon className="w-5 h-5 text-white" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
