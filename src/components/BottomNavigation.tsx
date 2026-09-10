import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Heart, Settings } from 'lucide-react';
import { cn } from '../utils/cn';

export const BottomNavigation: React.FC = () => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/explore', icon: Compass, label: 'Explore' },
    { to: '/saved', icon: Heart, label: 'Saved' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-40">
      <nav className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors",
              isActive ? "text-amber-600" : "text-gray-400 hover:text-gray-600"
            )}
          >
            {({ isActive }) => (
              <>
                <Icon className={cn("w-6 h-6", isActive && "fill-amber-600/20")} strokeWidth={isActive ? 2.5 : 2} />
                <span className={cn("text-[10px] font-semibold", isActive ? "text-amber-600" : "text-gray-500")}>
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
