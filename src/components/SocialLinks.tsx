import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

interface SocialLinksProps {
  isDark: boolean;
}

const socialLinks = [
  { icon: Github, url: 'https://github.com/Issac-Moses', color: 'hover:text-gray-600', bg: 'hover:bg-gray-100' },
  { icon: Twitter, url: 'https://x.com/Issac_Moses_D?t=vRC2BkF1IsbAm7mosZ9_1A&s=09', color: 'hover:text-blue-500', bg: 'hover:bg-blue-50' },
  { icon: Instagram, url: 'https://www.instagram.com/issac_moses_404/', color: 'hover:text-pink-500', bg: 'hover:bg-pink-50' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/i%EF%BD%93%EF%BD%93-a-c-m-%E5%8F%A3%EF%BD%93%E3%83%A2%EF%BD%93-d-12837831b/', color: 'hover:text-blue-600', bg: 'hover:bg-blue-50' },
  { icon: Youtube, url: 'https://www.youtube.com/@issacmoses_404', color: 'hover:text-red-500', bg: 'hover:bg-red-50' },
  { icon: Mail, url: 'mailto:issacmoses19082005.com', color: 'hover:text-green-500', bg: 'hover:bg-green-50' },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({ isDark }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {socialLinks.map(({ icon: Icon, url, color, bg }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            p-3 rounded-full backdrop-blur-md border transition-all duration-300
            hover:scale-110 active:scale-95 group
            ${isDark 
              ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10' 
              : `bg-black/5 border-black/10 text-gray-600 ${bg}`
            }
          `}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <Icon className={`w-5 h-5 transition-colors duration-300 ${isDark ? 'group-hover:text-white' : color}`} />
        </a>
      ))}
    </div>
  );
};