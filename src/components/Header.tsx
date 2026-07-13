import React, { useState, useEffect } from "react";
import { Sun, Moon, Sparkles, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Sync scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize and sync theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to light as requested: "배경은 White + Gray 계열, 전체적으로 깔끔하게"
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Strengths", id: "strengths" },
    { label: "Skills", id: "skills" },
    { label: "Learning", id: "learning" },
    { label: "Projects", id: "projects" },
    { label: "Fun Facts", id: "fun-facts" },
    { label: "Stats", id: "stats" },
    { label: "Values", id: "values" },
    { label: "Timeline", id: "timeline" },
    { label: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-blue-600 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm transition-transform group-hover:scale-105 active:scale-95">
              JK
            </div>
            <span className="font-sans font-bold text-zinc-900 dark:text-zinc-50 text-sm tracking-tight flex items-center gap-1">
              김주희 사용설명서
              <Sparkles size={12} className="text-blue-500 animate-pulse" />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50 transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition shadow-sm"
              title={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800/80 px-4 py-4 space-y-1 animate-in fade-in slide-in-from-top-4 duration-200">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
