export interface StrengthItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: "ai" | "design" | "dev" | "strategy";
  icon: string;
}

export interface LearningItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  progress: "learning" | "mastered" | "exploring";
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  emoji: string;
  color: string;
}

export interface FunFactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
  emoji: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
}
