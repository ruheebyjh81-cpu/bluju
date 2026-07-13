import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Zap,
  Boxes,
  Sparkles,
  Flame,
  TrendingUp,
  Bot,
  Cpu,
  Wand2,
  FileText,
  Workflow,
  Code,
  Palette,
  Image as ImageIcon,
  GitBranch,
  Gamepad2,
  BrainCircuit,
  Coffee,
  Moon,
  Music,
  Target,
  Rocket,
  Compass,
  Smile,
  Gift,
  Clock,
  Layers,
  Play,
  Youtube,
  Trophy,
  Github,
  Mail,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  MapPin,
  Target as TargetIcon,
  Sun
} from "lucide-react";

import { TiltCard } from "./components/TiltCard";
import { Counter } from "./components/Counter";
import { AIWidget } from "./components/AIWidget";

import {
  STRENGTHS,
  SKILLS,
  CURRENTLY_LEARNING,
  PROJECTS,
  FUN_FACTS,
  STATS,
  TIMELINE
} from "./data";

// Type safe Lucide Icon Map
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Zap,
  Boxes,
  Sparkles,
  Flame,
  TrendingUp,
  Bot,
  Cpu,
  Wand2,
  FileText,
  Workflow,
  Code,
  Palette,
  Image: ImageIcon,
  GitBranch,
  Gamepad2,
  BrainCircuit,
  Coffee,
  Moon,
  Music,
  Target,
  Rocket,
  Compass,
  Smile,
  Gift,
  Clock,
  Layers,
  Play,
  Youtube,
  Trophy,
  Github,
  Mail,
  ExternalLink,
  ChevronDown,
  ArrowRight
};

export default function App() {
  const [skillFilter, setSkillFilter] = useState<string>("all");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

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

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40;
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

  const filteredSkills = skillFilter === "all"
    ? SKILLS
    : SKILLS.filter(s => s.category === skillFilter);

  const menuItems = [
    { label: "프로필 상세", id: "about" },
    { label: "핵심 강점", id: "strengths" },
    { label: "AI 역량 분석", id: "skills" },
    { label: "학습 로드맵", id: "learning" },
    { label: "프로젝트 색인", id: "projects" },
    { label: "비하인드 스토리", id: "fun-facts" },
    { label: "성장 발자취", id: "timeline" },
    { label: "네트워크 및 연락", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-editorial-bg dark:bg-[#0c0c0b] text-editorial-ink dark:text-[#f8f7f4] font-sans transition-colors duration-300 relative p-4 md:p-10 selection:bg-editorial-accent/35">
      
      {/* Scroll Progress Bar at the absolute top */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-editorial-accent dark:bg-zinc-300 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Border Container (The Main Frame) */}
      <div className="main-frame border-2 border-editorial-ink dark:border-[#f8f7f4]/40 min-h-[calc(100vh-80px)] relative grid grid-cols-1 lg:grid-cols-[320px_1fr] bg-white dark:bg-[#121212] transition-colors duration-300">
        
        {/* SIDEBAR NAVIGATION - STICKY ON DESKTOP */}
        <aside className="border-b-2 lg:border-b-0 lg:border-r-2 border-editorial-ink dark:border-[#f8f7f4]/40 p-8 lg:p-10 flex flex-col justify-between bg-[#faf9f6] dark:bg-[#161615] lg:h-[calc(100vh-84px)] lg:sticky lg:top-10 transition-colors duration-300">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                제작 에디션: 2026 / 01
              </span>
              
              {/* Theme Toggle Button inside Sidebar */}
              <button
                onClick={toggleTheme}
                className="p-1.5 border border-editorial-ink/20 hover:border-editorial-ink dark:border-zinc-700 dark:hover:border-zinc-300 text-editorial-ink dark:text-zinc-300 transition duration-150 rounded-none cursor-pointer"
                title={theme === "light" ? "다크 모드" : "라이트 모드"}
              >
                {theme === "light" ? <Moon size={12} /> : <Sun size={12} />}
              </button>
            </div>

            <h1 className="font-serif font-semibold italic text-4xl lg:text-5xl my-6 tracking-tight text-editorial-ink dark:text-zinc-100">
              Kim Juhee
            </h1>
            <p className="font-mono text-[11px] uppercase tracking-widest text-editorial-accent font-bold">
              AI 메이커 & 빌더
            </p>

            {/* Desktop Navigation */}
            <nav className="mt-12 hidden lg:block">
              <ul className="space-y-4 font-mono text-xs uppercase tracking-widest">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollTo(item.id)}
                      className="text-editorial-ink/50 dark:text-zinc-400 hover:text-editorial-accent dark:hover:text-editorial-accent transition-all duration-200 text-left cursor-pointer hover:translate-x-1 inline-block"
                    >
                      // {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Responsive Navigation for Mobile */}
            <nav className="mt-6 block lg:hidden border-t border-editorial-ink/10 dark:border-zinc-800 pt-4">
              <div className="flex flex-wrap gap-2.5">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="text-[10px] font-mono uppercase bg-editorial-bg dark:bg-zinc-800 hover:bg-editorial-ink hover:text-editorial-bg dark:hover:bg-zinc-100 dark:hover:text-zinc-900 px-2 py-1 border border-editorial-ink/20 dark:border-zinc-700 tracking-wider transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          <div className="pt-8 border-t border-editorial-ink/10 dark:border-zinc-800/60 mt-8 lg:mt-0">
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 leading-relaxed">
              끊임없이 배우고,<br />늘 만들어갑니다.
            </p>
          </div>
        </aside>

        {/* MAIN BODY AREA */}
        <main className="p-6 md:p-12 lg:p-[80px] space-y-24 max-w-full overflow-hidden bg-white dark:bg-[#121212] transition-colors duration-300">
          
          {/* HERO PROFILE HEADER */}
          <section id="hero" className="scroll-mt-10">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-4">
              [01 / 프로필 소개]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-editorial-ink dark:text-zinc-100 leading-[0.95] my-6">
              AI와 함께 성장하며 실용적인 미래를 <br />
              <em className="italic font-light text-editorial-accent">설계하고 조립합니다.</em>
            </h2>

            <div className="about-box grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-12 pt-8 border-t-2 border-editorial-ink/10 dark:border-zinc-800/60">
              <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                "배우는 것에서 그치지 않고, 복잡한 인공지능 엔지니어링 기술들을 조립하여 사람들의 행동과 삶에 실제적인 이로움을 더하는 웹 서비스를 기획하고 완성해 나가는 제작자입니다."
              </p>
              <div className="font-mono text-xs uppercase tracking-wider space-y-4 border-l-2 border-editorial-accent pl-6 lg:pl-10 h-fit">
                <p className="text-zinc-500 dark:text-zinc-400">
                  <strong className="text-editorial-ink dark:text-zinc-200 block mb-0.5">// 활동 지역</strong> 대한민국 서울
                </p>
                <p className="text-zinc-500 dark:text-zinc-400">
                  <strong className="text-editorial-ink dark:text-zinc-200 block mb-0.5">// 현재 집중 분야</strong> AI+Web 통합 툴 3종 배포 프로젝트
                </p>
              </div>
            </div>
          </section>

          {/* ABOUT PROFILE DETAILS */}
          <section id="about" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold block mb-4">
              [상세 프로필]
            </span>
            <div className="bg-[#faf9f6] dark:bg-[#161615] border border-editorial-ink/10 dark:border-zinc-800 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-editorial-ink text-editorial-bg dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-serif text-3xl font-bold">
                  🐰
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold italic text-editorial-ink dark:text-zinc-100">KIM JUHEE</h3>
                  <p className="font-mono text-xs text-zinc-500 mt-1 uppercase tracking-wider">AI 메이커 & 빌더 프로필</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 font-mono text-[11px] uppercase tracking-wider border-t md:border-t-0 md:border-l border-editorial-ink/10 dark:border-zinc-800 pt-6 md:pt-0 md:pl-12 w-full md:w-auto shrink-0">
                <div>
                  <span className="text-zinc-400 block mb-0.5">// 이메일</span>
                  <a href="mailto:ruheebyjh81@gmail.com" className="hover:text-editorial-accent underline">
                    ruheebyjh81@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-zinc-400 block mb-0.5">// 신조</span>
                  <span className="text-editorial-accent font-bold">IDEA TO PRODUCT</span>
                </div>
              </div>
            </div>
          </section>

          {/* STRENGTHS */}
          <section id="strengths" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-8">
              [02 / 핵심 강점]
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {STRENGTHS.map((s, index) => {
                const Icon = IconMap[s.icon] || Sparkles;
                return (
                  <TiltCard
                    key={s.id}
                    className="bg-white dark:bg-[#161615] border border-editorial-ink/10 dark:border-zinc-800 p-6 shadow-sm hover:border-editorial-ink dark:hover:border-zinc-600 transition-all duration-300"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                        <span>강점 {index + 1}</span>
                        <Icon size={14} className="text-editorial-accent" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-serif text-xl font-bold text-editorial-ink dark:text-zinc-100 italic">
                          {s.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </section>

          {/* CAPABILITIES */}
          <section id="skills" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-6">
              [03 / 역량 매트릭스]
            </span>

            {/* Interactive Tab bar filter */}
            <div className="flex flex-wrap items-center gap-1.5 mb-10 border-b border-zinc-200 dark:border-zinc-850 pb-4">
              {[
                { id: "all", label: "전체 기술" },
                { id: "ai", label: "AI 모델" },
                { id: "strategy", label: "엔지니어링 & 기획" },
                { id: "dev", label: "개발" },
                { id: "design", label: "기획 & 디자인" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSkillFilter(tab.id)}
                  className={`px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-widest transition duration-200 border rounded-none cursor-pointer ${
                    skillFilter === tab.id
                      ? "bg-editorial-ink text-editorial-bg border-editorial-ink dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 font-bold"
                      : "bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Custom styled progress bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
              {filteredSkills.map((skill, index) => {
                const Icon = IconMap[skill.icon] || Sparkles;
                return (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Icon size={12} className="text-zinc-400" />
                        <span className="text-editorial-ink dark:text-zinc-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-editorial-accent dark:text-[#f8f7f4] font-bold">{skill.percentage}%</span>
                    </div>
                    
                    {/* Minimalist 1px timeline height scale */}
                    <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-[3px] bg-editorial-ink dark:bg-zinc-200 absolute top-[-1px] left-0"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* LEARNING STACK */}
          <section id="learning" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-8">
              [04 / 학습 로드맵]
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {CURRENTLY_LEARNING.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#faf9f6] dark:bg-[#161615] border border-editorial-ink/10 dark:border-zinc-800 p-6 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">{item.category}</span>
                      <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border ${
                        item.progress === "learning"
                          ? "bg-amber-500/10 text-amber-600 border-amber-300/30"
                          : item.progress === "mastered"
                          ? "bg-zinc-900 dark:bg-zinc-100 text-[#faf9f6] dark:text-[#121212] border-transparent"
                          : "bg-blue-500/10 text-blue-600 border-blue-300/30"
                      }`}>
                        {item.progress === "learning" ? "학습 중" : item.progress === "mastered" ? "완료" : "탐색 중"}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-editorial-ink dark:text-zinc-100 italic">
                      {item.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WORK INDEX */}
          <section id="projects" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-8">
              [05 / 프로젝트 색인]
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="project-card border-t border-editorial-ink/20 dark:border-zinc-850 pt-6 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center font-mono text-[10px] text-zinc-400">
                      <span>P.0{idx + 1}</span>
                      <span className="text-lg">{proj.emoji}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold italic text-editorial-ink dark:text-zinc-100 group-hover:text-editorial-accent transition duration-200">
                        {proj.title}
                      </h3>
                      <p className="font-mono text-[10px] text-editorial-accent uppercase tracking-wider font-bold">
                        {proj.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>

                  {/* Minimalist Tag Lists */}
                  <div className="flex flex-wrap gap-1 mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850/40">
                    {proj.tags.map(t => (
                      <span key={t} className="text-[9px] font-mono uppercase bg-[#faf9f6] dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2 py-0.5 border border-zinc-200/60 dark:border-zinc-700/60">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FUN FACTS BENTO */}
          <section id="fun-facts" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-8">
              [06 / 비하인드 스토리]
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {FUN_FACTS.map((fact) => {
                const Icon = IconMap[fact.icon] || Sparkles;
                return (
                  <div
                    key={fact.id}
                    className="bg-white dark:bg-[#161615] border border-editorial-ink/10 dark:border-zinc-800 p-5 hover:border-editorial-ink dark:hover:border-zinc-500 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-none border border-editorial-ink/20 dark:border-zinc-700 text-editorial-ink dark:text-zinc-300 flex items-center justify-center shrink-0">
                      <Icon size={14} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
                        <span>{fact.label}</span>
                        <span>{fact.emoji}</span>
                      </div>
                      <p className="text-xs font-bold text-editorial-ink dark:text-zinc-200">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* STATS */}
          <section id="stats" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-8">
              [07 / 핵심 지표]
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {STATS.map((stat) => {
                const Icon = IconMap[stat.icon] || Sparkles;
                return (
                  <div
                    key={stat.id}
                    className="bg-[#faf9f6] dark:bg-[#161615] border border-editorial-ink/10 dark:border-zinc-800 p-6 flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                      <span>색인</span>
                      <Icon size={12} className="text-editorial-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">{stat.label}</p>
                      <h3 className="text-2xl font-bold font-mono tracking-tight text-editorial-ink dark:text-zinc-100">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* VALUES & PHILOSOPHY */}
          <section id="values" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <div className="bg-editorial-ink text-editorial-bg dark:bg-zinc-950 dark:text-[#f8f7f4] p-8 md:p-12 lg:p-16 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] uppercase tracking-widest opacity-20">
                철학 // 2026
              </div>
              
              <div className="space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-accent font-bold block">
                  // 핵심 가치 선언
                </span>
                
                <h3 className="font-serif text-2xl sm:text-4xl italic font-light leading-relaxed">
                  "AI는 사람을 대신하는 기술이 아니라, 사람이 더 많은 것을 만들 수 있도록 도와주는 강력한 도구이며, 저의 목표는 이 도구를 통해 사람들에게 이로운 영향력을 선사하는 웹 제품을 만드는 것입니다."
                </h3>
              </div>
            </div>
          </section>

          {/* TIMELINE */}
          <section id="timeline" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-8">
              [09 / 성장 발자취]
            </span>

            <div className="space-y-0 divide-y divide-editorial-ink/10 dark:divide-zinc-800">
              {TIMELINE.map((evt) => {
                const Icon = IconMap[evt.icon] || Sparkles;
                return (
                  <div
                    key={evt.id}
                    className="grid grid-cols-1 md:grid-cols-[140px_1fr] py-6 gap-4 items-start group"
                  >
                    <div className="font-mono text-base font-bold text-editorial-accent flex items-center gap-2">
                      <span>{evt.period}</span>
                      <Icon size={12} className="opacity-40 group-hover:opacity-100 transition duration-150" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-editorial-ink dark:text-zinc-100 italic">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed">
                        {evt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* NETWORK / CONTACT */}
          <section id="contact" className="scroll-mt-10 pt-10 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <span className="font-mono text-[11px] text-editorial-accent uppercase tracking-widest font-bold block mb-6">
              [10 / 네트워크 및 연락처]
            </span>

            <div className="contact-grid grid grid-cols-2 md:grid-cols-4 border-2 border-editorial-ink dark:border-zinc-300 divide-x-2 divide-y-2 md:divide-y-0 divide-editorial-ink dark:divide-zinc-300">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-editorial-ink dark:bg-[#121212] dark:hover:bg-zinc-100 text-editorial-ink dark:text-zinc-300 dark:hover:text-[#121212] p-8 text-center transition duration-200 font-mono text-xs uppercase tracking-widest font-bold flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-editorial-ink dark:bg-[#121212] dark:hover:bg-zinc-100 text-editorial-ink dark:text-zinc-300 dark:hover:text-[#121212] p-8 text-center transition duration-200 font-mono text-xs uppercase tracking-widest font-bold flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                <Youtube size={18} />
                <span>YouTube</span>
              </a>
              <a
                href="mailto:ruheebyjh81@gmail.com"
                className="bg-white hover:bg-editorial-ink dark:bg-[#121212] dark:hover:bg-zinc-100 text-editorial-ink dark:text-zinc-300 dark:hover:text-[#121212] p-8 text-center transition duration-200 font-mono text-xs uppercase tracking-widest font-bold flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a
                href="https://velog.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-editorial-ink dark:bg-[#121212] dark:hover:bg-zinc-100 text-editorial-ink dark:text-zinc-300 dark:hover:text-[#121212] p-8 text-center transition duration-200 font-mono text-xs uppercase tracking-widest font-bold flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                <ExternalLink size={18} />
                <span>Blog</span>
              </a>
            </div>
          </section>

        </main>

      </div>

      {/* FOOTER */}
      <footer className="py-12 text-center space-y-4 font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
        <p className="font-bold">// "끊임없이 배우고, 늘 만들어갑니다."</p>
        <p>© {new Date().getFullYear()} 김주희. Powered by Gemini & AI Studio Build.</p>
      </footer>

      {/* FLOATING CHATBOT */}
      <AIWidget />

    </div>
  );
}
