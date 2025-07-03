import React from 'react';
import { Sparkles } from 'lucide-react';

interface ProfileSectionProps {
  isDark: boolean;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ isDark }) => {
  return (
    <div className="text-center mb-8 relative">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-4 left-8 w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`} style={{ animationDelay: '0s' }}></div>
        <div className={`absolute top-12 right-12 w-1 h-1 rounded-full animate-bounce ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-8 left-12 w-1.5 h-1.5 rounded-full animate-bounce ${isDark ? 'bg-pink-400' : 'bg-pink-600'}`} style={{ animationDelay: '2s' }}></div>
      </div>

      
      <div className="relative mb-6 inline-block">
        <div className={`
          w-32 h-32 rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
          animate-pulse hover:animate-none transition-all duration-300
        `}>
          <div className={`
            w-full h-full rounded-full flex items-center justify-center text-4xl font-bold
            ${isDark 
              ? 'bg-gray-800 text-white shadow-2xl shadow-purple-500/20' 
              : 'bg-white text-gray-800 shadow-2xl shadow-purple-500/20'
            }
          `}>
            😋
          </div>
        </div>
        <Sparkles className={`absolute -top-2 -right-2 w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-yellow-500'} animate-spin`} />
      </div>

      
      <h1 className={`
        text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
        bg-clip-text text-transparent animate-pulse hover:animate-none transition-all duration-300
      `}>
        Issac Moses D
      </h1>

      
      <p className={`
        text-lg md:text-xl mb-2 max-w-md mx-auto leading-relaxed
        ${isDark ? 'text-gray-300' : 'text-gray-600'}
      `}>
        Creative developer & digital nomad 😜
      </p>
      
      <p className={`
        text-sm opacity-80 max-w-sm mx-auto
        ${isDark ? 'text-black-400' : 'text-black-500'}
      `}>
        Building the future, one line at a time 😪
      </p>
    </div>
  );
};