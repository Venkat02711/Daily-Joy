import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Bell, Moon, Sun, Globe, Info, Sparkles, LogIn, Heart } from 'lucide-react';
import { PWAInstallButton } from '../components/PWAInstallButton';
import { cn } from '../utils/cn';

export const Settings: React.FC = () => {
  const { settings, updateSettings } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen pb-24 pt-safe px-4 max-w-md mx-auto">
      <header className="py-6">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
      </header>

      <main className="flex-grow space-y-6">
        
        {/* PWA Install Area */}
        <div className="flex justify-center mb-6">
          <PWAInstallButton />
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-3xl shadow-sm border border-orange-50/50 overflow-hidden">
          <h2 className="px-5 py-4 text-sm font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
            Preferences
          </h2>
          
          <div className="divide-y divide-gray-100">
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Daily Reminder</p>
                  <p className="text-xs text-gray-500">Get a notification for today's joy</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={settings.dailyReminder}
                  onChange={(e) => updateSettings({ dailyReminder: e.target.checked })}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  {settings.theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Appearance</p>
                  <p className="text-xs text-gray-500">Light or dark mode</p>
                </div>
              </div>
              <select 
                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block p-2 outline-none font-medium"
                value={settings.theme}
                onChange={(e) => updateSettings({ theme: e.target.value as any })}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Language</p>
                  <p className="text-xs text-gray-500">Content language</p>
                </div>
              </div>
              <select 
                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block p-2 outline-none font-medium"
                value={settings.language}
                onChange={(e) => updateSettings({ language: e.target.value })}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>

        {/* Premium Preview */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-sm border border-amber-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4">
            <Sparkles className="w-12 h-12 text-amber-200/50" />
          </div>
          <div className="p-6 relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-bold text-amber-900">Daily Joy Premium</h2>
            </div>
            <p className="text-sm text-amber-800/80 mb-4 leading-relaxed">
              Unlock personalized AI-generated cards, custom messages for loved ones, and unlimited premium categories.
            </p>
            <button className="w-full py-3 bg-white text-amber-700 font-bold rounded-2xl shadow-sm hover:shadow-md transition active:scale-95 border border-amber-100">
              Coming Soon
            </button>
          </div>
        </div>

        {/* Account (Placeholder for future) */}
        <div className="bg-white rounded-3xl shadow-sm border border-orange-50/50 overflow-hidden">
          <div className="p-2">
            <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  <LogIn className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sign In to Save Online</p>
                  <p className="text-xs text-gray-500">Sync your favorites across devices</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col items-center justify-center py-6 text-gray-400">
          <p className="text-sm font-medium">Daily Joy Version 1.0</p>
          <div className="flex items-center gap-1 mt-1 text-xs">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>for a little happiness every day.</span>
          </div>
        </div>

      </main>
    </div>
  );
};
