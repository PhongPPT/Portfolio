export interface ScrollToSection {
  (id: string): void;
}

export interface NavbarProps {
  activeSection: string;
  scrollToSection: ScrollToSection;
}

export interface HeroProps {
  scrollToSection: ScrollToSection;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  // image: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}