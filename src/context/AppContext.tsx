import React, { createContext, useContext, useState, useEffect } from 'react';
import { ContentItem, AppSettings } from '../types';

interface AppContextType {
  savedCards: ContentItem[];
  settings: AppSettings;
  saveCard: (card: ContentItem) => void;
  removeCard: (id: string) => void;
  isSaved: (id: string) => boolean;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
}

const defaultSettings: AppSettings = {
  dailyReminder: false,
  theme: 'light',
  language: 'en'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedCards, setSavedCards] = useState<ContentItem[]>([]);
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCards = localStorage.getItem('dailyjoy_saved_cards');
      if (storedCards) setSavedCards(JSON.parse(storedCards));
      
      const storedSettings = localStorage.getItem('dailyjoy_settings');
      if (storedSettings) setSettings({ ...defaultSettings, ...JSON.parse(storedSettings) });
    } catch (e) {
      console.error('Failed to load data from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('dailyjoy_saved_cards', JSON.stringify(savedCards));
    } catch (e) {
      console.error('Failed to save cards to localStorage', e);
    }
  }, [savedCards, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('dailyjoy_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings to localStorage', e);
    }
  }, [settings, isLoaded]);

  const saveCard = (card: ContentItem) => {
    setSavedCards(prev => {
      if (prev.find(c => c.id === card.id)) return prev;
      return [card, ...prev];
    });
  };

  const removeCard = (id: string) => {
    setSavedCards(prev => prev.filter(c => c.id !== id));
  };

  const isSaved = (id: string) => {
    return savedCards.some(c => c.id === id);
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <AppContext.Provider value={{ savedCards, settings, saveCard, removeCard, isSaved, updateSettings }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
