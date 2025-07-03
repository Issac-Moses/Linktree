import React from 'react';

interface AnimatedBackgroundProps {
  isDark: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDark }) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      <div className={`
        absolute inset-0 transition-all duration-1000
        ${isDark 
          ? 'bg-gradient-to-br from-gray-950 via-indigo-950/80 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }
      `}></div>

      
      <div className={`
        absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse
        ${isDark ? 'bg-indigo-800' : 'bg-purple-300'}
      `} style={{ animationDuration: '4s' }}></div>
      
      <div className={`
        absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse
        ${isDark ? 'bg-violet-900' : 'bg-blue-300'}
      `} style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      
      <div className={`
        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl opacity-25 animate-pulse
        ${isDark ? 'bg-fuchsia-900' : 'bg-pink-300'}
      `} style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

      
      <div className={`
        absolute inset-0 opacity-10 transition-opacity duration-1000
        ${isDark ? 'opacity-10' : 'opacity-5'}
      `} style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
    </div>
  );
};
