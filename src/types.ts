export interface ContentItem {
  id: string;
  category: string;
  image: string;
  title?: string;
  message: string;
  date?: string;
  imagePrompt?: string;
  imageKeywords?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface AppSettings {
  dailyReminder: boolean;
  theme: 'light' | 'dark' | 'system';
  language: string;
}
