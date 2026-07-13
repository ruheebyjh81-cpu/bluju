import {
  StrengthItem,
  SkillItem,
  LearningItem,
  ProjectItem,
  FunFactItem,
  StatItem,
  TimelineEvent,
} from "./types";

export const STRENGTHS: StrengthItem[] = [
  {
    id: "strength-1",
    icon: "Zap",
    title: "새로운 기술을 빠르게 익힙니다",
    description: "새로운 기술 트렌드나 개발 프레임워크가 나오면 주저 없이 뛰어들어 작동 원리를 익히고 핵심을 파악합니다."
  },
  {
    id: "strength-2",
    icon: "Boxes",
    title: "아이디어를 실제 결과물로 만듭니다",
    description: "생각이나 논의로 머물러 있는 비즈니스 개념을 기획과 기술을 융합하여 빠르게 가시적인 형태의 서비스로 빌드해 냅니다."
  },
  {
    id: "strength-3",
    icon: "Sparkles",
    title: "AI를 활용하여 풍부한 콘텐츠를 제작합니다",
    description: "LLM, 비디오/오디오 및 그래픽 제너레이터를 조합하여 다양한 디지털 미디어와 몰입감 있는 멀티미디어 자산을 직접 만듭니다."
  },
  {
    id: "strength-4",
    icon: "Flame",
    title: "실행력이 뛰어납니다",
    description: "계획 단계에 오래 갇혀있지 않고, 일단 프로토타입을 만들어 피드백을 수집하고 끊임없이 수정하며 완성도를 쌓아 올립니다."
  },
  {
    id: "strength-5",
    icon: "TrendingUp",
    title: "끊임없이 배우고 성장합니다",
    description: "어제의 지식에 안주하지 않고, 매일 새로운 라이브러리, 논문, 그리고 도구들을 학습하며 스스로의 스택을 갱신해 나갑니다."
  }
];

export const SKILLS: SkillItem[] = [
  { name: "ChatGPT", percentage: 95, category: "ai", icon: "Bot" },
  { name: "Claude", percentage: 90, category: "ai", icon: "Cpu" },
  { name: "Gemini", percentage: 95, category: "ai", icon: "Sparkles" },
  { name: "Prompt Engineering", percentage: 95, category: "strategy", icon: "Wand2" },
  { name: "Content Planning", percentage: 90, category: "strategy", icon: "FileText" },
  { name: "Automation", percentage: 85, category: "strategy", icon: "Workflow" },
  { name: "Web Development", percentage: 80, category: "dev", icon: "Code" },
  { name: "Canva", percentage: 85, category: "design", icon: "Palette" },
  { name: "Photoshop", percentage: 80, category: "design", icon: "Image" },
  { name: "Flow", percentage: 85, category: "ai", icon: "GitBranch" }
];

export const CURRENTLY_LEARNING: LearningItem[] = [
  { id: "learn-1", name: "AI Agent", category: "AI Technology", desc: "멀티 에이전트 자율 협업 프레임워크 및 오케스트레이션 설계 연구", progress: "learning" },
  { id: "learn-2", name: "React", category: "Web Development", desc: "React 19의 비동기 전환 효과 및 가상 DOM 최적화 기법 마스터링", progress: "mastered" },
  { id: "learn-3", name: "Three.js", category: "Interactive Design", desc: "웹 캔버스 내 하드웨어 가속 3D 물리 공간 구현 및 렌더 가속", progress: "learning" },
  { id: "learn-4", name: "Python", category: "Data & ML", desc: "LLM 파이프라인 자동화 및 데이터 시각화 스크립트 작성 역량 극대화", progress: "mastered" },
  { id: "learn-5", name: "Google AI Studio", category: "AI Platform", desc: "Gemini 최신 버전을 기반으로 한 프롬프트 최적화 및 튜닝 파이프라인 수립", progress: "mastered" },
  { id: "learn-6", name: "Gemini API", category: "AI Integration", desc: "서버리스/Express 구조 내에서 스트리밍 및 컨텍스트 캐싱 기법 최적 연동", progress: "learning" },
  { id: "learn-7", name: "Game Development", category: "Entertainment", desc: "클라이언트-서버 동기화 물리 규칙 및 웹 브라우저 보드게임 로직 엔지니어링", progress: "exploring" }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "AI 유튜브 (AI YouTube)",
    subtitle: "AI 기반 콘텐츠 생성 & 고속 배포 자동화 채널",
    description: "LLM으로 유기적인 콘텐츠 스크립트를 수립하고, 음성 및 영상 생성 AI를 고속으로 결합·제작하는 파이프라인을 구축하여 실제 유튜브 채널을 설계 및 급성장시켰습니다.",
    tags: ["ChatGPT", "Vrew", "ElevenLabs", "콘텐츠 자동화", "유튜브 오가닉"],
    emoji: "📺",
    color: "from-red-500/10 to-orange-500/10 text-red-600 dark:text-red-400 border-red-200/50 dark:border-red-900/50"
  },
  {
    id: "proj-2",
    title: "3D 오목게임 (3D Omok Game)",
    subtitle: "Three.js & React 기반 입체 보드게임",
    description: "React 웹 캔버스에 Three.js를 연동하여 아름답고 부드러운 3D 물리 돌 놓기 동작을 구현했습니다. AI 조율 협업으로 완벽한 승리 검증 로직과 입체 카메라 연출을 설계했습니다.",
    tags: ["React", "Three.js", "Web 3D", "보드게임 알고리즘", "AI 협업"],
    emoji: "⚪",
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-900/50"
  },
  {
    id: "proj-3",
    title: "AI 이미지 제작 (AI Image Design)",
    subtitle: "Generative Art 브랜딩 애셋 조율",
    description: "Midjourney, Stable Diffusion 등 최첨단 확산 모델의 프롬프트 가중치를 세밀하게 조율하여, 가상 기업 및 서비스 웹사이트에 적합한 통일성 높은 고화질 브랜딩 리소스를 디자인했습니다.",
    tags: ["Midjourney", "Stable Diffusion", "Prompt Tuning", "브랜드 디자인"],
    emoji: "🎨",
    color: "from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-900/50"
  },
  {
    id: "proj-4",
    title: "AI 음악 제작 (AI Music Creation)",
    subtitle: "Suno & Udio를 활용한 상황별 BGM 설계",
    description: "사용자의 분위기와 감성 조건에 부합하는 사운드트랙을 AI 모델과 상호작용하여 작곡했습니다. 영상 인트로나 낭독 오디오 등에 조화롭게 녹아드는 사운드 가이드를 수립했습니다.",
    tags: ["Suno AI", "Udio", "오디오 믹싱", "사운드 디자인"],
    emoji: "🎵",
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50"
  },
  {
    id: "proj-5",
    title: "로고 디자인 (Logo Design)",
    subtitle: "미니멀 & 기하학 브랜딩 가이드 구축",
    description: "다양한 아이디어와 제품의 핵심 철학을 원, 사각형 등 순수 기하학 도형으로 함축해 시각화한 로고 가이드를 만들었습니다. 시인성을 최우선으로 하여 다양한 해상도에 최적화했습니다.",
    tags: ["Illustrator", "Brand Identity", "Minimalism", "기하학 디자인"],
    emoji: "💡",
    color: "from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/50"
  },
  {
    id: "proj-6",
    title: "공모전 (Contest Entry)",
    subtitle: "AI 비즈니스 모델링 및 MVP 개발 피치",
    description: "일상적인 인력 불균형 및 실용적인 문제들을 인공지능 프롬프트 파이프라인으로 해결하는 웹 프로토타입과 IR 피치 덱을 설계하여 다수의 해커톤 및 아이디어 경진대회 본선에 합격했습니다.",
    tags: ["해커톤 MVP", "비즈니스 모델링", "Gemini API", "IR Pitching"],
    emoji: "🏆",
    color: "from-cyan-500/10 to-sky-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200/50 dark:border-cyan-900/50"
  },
  {
    id: "proj-7",
    title: "웹사이트 제작 (Website Creation)",
    subtitle: "사용자 중심의 반응형 인터랙티브 웹 포트폴리오",
    description: "HTML, CSS, React, 그리고 Tailwind CSS를 기반으로 한 하이엔드 인터랙티브 웹 개발 경험입니다. AI 코파일럿과의 창의적인 정합을 통해 고속 피드백 주기를 실현했습니다.",
    tags: ["React", "Vite", "Tailwind CSS", "UX/UI 디자이너", "Interactive Web"],
    emoji: "💻",
    color: "from-violet-500/10 to-fuchsia-500/10 text-violet-600 dark:text-violet-400 border-violet-200/50 dark:border-violet-900/50"
  }
];

export const FUN_FACTS: FunFactItem[] = [
  { id: "fact-1", icon: "Gamepad2", label: "좋아하는 게임", value: "리그 오브 레전드, 마인크래프트", emoji: "🎮" },
  { id: "fact-2", icon: "BrainCircuit", label: "가장 많이 사용하는 AI", value: "Claude & ChatGPT & Gemini", emoji: "🤖" },
  { id: "fact-3", icon: "Coffee", label: "하루 커피", value: "아침과 몰입할 때 필수, 총 2잔", emoji: "☕" },
  { id: "fact-4", icon: "Moon", label: "활동 시간", value: "21:00 ~ 03:00 (초집중 새벽 밤샘 부엉이)", emoji: "🌙" },
  { id: "fact-5", icon: "Music", label: "좋아하는 음악", value: "Lo-Fi 연주곡 & Synthwave", emoji: "🎵" },
  { id: "fact-6", icon: "Sparkles", label: "좋아하는 동물", value: "동글동글 귀엽고 기민한 '토끼'", emoji: "🐰" },
  { id: "fact-7", icon: "Target", label: "올해 목표", value: "개인 AI 서비스 3개 배포 완료하기", emoji: "🎯" },
  { id: "fact-8", icon: "Rocket", label: "꿈", value: "장벽을 무너뜨리는 크리에이티브 AI 에반젤리스트", emoji: "🚀" },
  { id: "fact-9", icon: "Compass", label: "스트레스 해소법", value: "깔끔히 작동하는 코드 짜기, 조용한 밤 산책", emoji: "💡" },
  { id: "fact-10", icon: "Smile", label: "나를 한 단어로 표현하면", value: "생각나면 바로 돌진하는 '실행력'", emoji: "🍀" },
  { id: "fact-11", icon: "Flame", label: "최근 빠진 것", value: "AI Agent 자율 오케스트레이션", emoji: "🔥" },
  { id: "fact-12", icon: "Gift", label: "버킷리스트", value: "글로벌 유저 1만 명이 쓰는 AI 도구 직접 운영", emoji: "🎁" }
];

export const STATS: StatItem[] = [
  { id: "stat-1", label: "AI 누적 활용 시간", value: 2500, suffix: "시간+", icon: "Clock" },
  { id: "stat-2", label: "프로젝트 빌드 수", value: 15, suffix: "개 이상", icon: "Layers" },
  { id: "stat-3", label: "완성한 콘텐츠 수", value: 120, suffix: "개 이상", icon: "Image" },
  { id: "stat-4", label: "배우고 정복한 기술", value: 18, suffix: "개+", icon: "Cpu" },
  { id: "stat-5", label: "현재 맹렬히 진행 중", value: 2, suffix: "개", icon: "Play" }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: "time-1",
    period: "2023.01",
    title: "AI 시작",
    description: "생성형 AI 패러다임이 열리자마자 ChatGPT 프롬프트 엔지니어링 탐구 및 기획에 도입하기 시작했습니다.",
    icon: "Bot",
    color: "blue"
  },
  {
    id: "time-2",
    period: "2023.06",
    title: "유튜브 시작",
    description: "AI 오토메이션 툴킷(LLM + 음성/영상 합성)을 유기적으로 엮어 대본 작성 및 배포 주기를 급진적으로 단축한 자동화 비디오 채널을 기획·런칭했습니다.",
    icon: "Youtube",
    color: "red"
  },
  {
    id: "time-3",
    period: "2023.11",
    title: "공모전 본선 진출 및 수상",
    description: "AI 기반 아이디어 모델링 및 프런트 프로토타이핑 기술로 창업 및 비즈니스 해커톤에서 솔루션을 발표하여 본선 진출 및 심사위원 우수 피드백을 받았습니다.",
    icon: "Trophy",
    color: "amber"
  },
  {
    id: "time-4",
    period: "2024.03",
    title: "게임 개발 및 캔버스 3D 실험",
    description: "React 웹스택에 Three.js를 본격 도입하여 브라우저에서 아름답게 동작하는 인터랙티브 3D 오목 및 물리 보드 렌더링 실험을 완료했습니다.",
    icon: "Gamepad2",
    color: "indigo"
  },
  {
    id: "time-5",
    period: "2024.08",
    title: "수준 높은 반응형 웹사이트 제작",
    description: "사용자가 손끝으로 조작하는 듯한 몰입감을 부여하기 위해 Framer Motion과 Tailwind CSS를 이용한 하이엔드 모던 웹 포트폴리오 에이전시 템플릿들을 연속 구축했습니다.",
    icon: "Code",
    color: "violet"
  },
  {
    id: "time-6",
    period: "2025.02 ~ 현재",
    title: "본격적인 AI 지능형 서비스 연동",
    description: "Google AI Studio와 Gemini API를 통합한 대규모 서버-클라이언트 컨텍스트 오케스트레이션을 진행, 개인 맞춤형 지능형 비서 및 AI 에이전트 제품군을 맹렬히 구현 중입니다.",
    icon: "Sparkles",
    color: "cyan"
  }
];
