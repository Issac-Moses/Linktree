import React from 'react';
import { ExternalLink, DivideIcon as LucideIcon } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  isDark: boolean;
  gradient?: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ 
  title, 
  description, 
  url, 
  icon: Icon, 
  isDark, 
  gradient = 'from-purple-500 to-pink-500'
}) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full p-6 rounded-2xl border backdrop-blur-md relative overflow-hidden
        transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95
        group cursor-pointer text-left
        ${isDark 
          ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
          : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
        }
      `}
    >
      
      <div className={`
        absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 
        transition-opacity duration-300
      `}></div>

      
      <div className="relative z-10 flex items-center gap-4">
        <div className={`
          p-3 rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg
          group-hover:scale-110 transition-transform duration-300
        `}>
          <Icon className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className={`
            text-lg font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r 
            group-hover:${gradient} group-hover:bg-clip-text transition-all duration-300
            ${isDark ? 'text-white' : 'text-gray-800'}
          `}>
            {title}
          </h3>
          <p className={`
            text-sm opacity-80 
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
          `}>
            {description}
          </p>
        </div>

        <ExternalLink className={`
          w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 
          transition-all duration-300
          ${isDark ? 'text-gray-300' : 'text-gray-600'}
        `} />
      </div>

      
      <div className={`
        absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20
        transition-opacity duration-300 animate-pulse
      `}></div>
    </button>
  );
};