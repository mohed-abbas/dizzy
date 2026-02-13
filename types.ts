export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HERO = 'hero',
  PLUGIN = 'plugin',
}

export interface Particle {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  char: string;
}