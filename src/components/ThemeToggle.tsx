import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border
        transition-all duration-300 hover:scale-110 active:scale-95
        ${isDark 
          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
          : 'bg-black/10 border-black/20 text-black hover:bg-black/20'
        }
      `}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
      )}
    </button>
  );
};