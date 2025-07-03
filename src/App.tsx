import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { ProfileSection } from './components/ProfileSection';
import { LinkCard } from './components/LinkCard';
import { SocialLinks } from './components/SocialLinks';
import { AnimatedBackground } from './components/AnimatedBackground';
import { 
  Globe, 
  BookOpen, 
  Camera, 
  Music, 
  Gamepad2, 
  Coffee,
  Briefcase,
  Heart
} from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const links = [
    {
      title: 'Portfolio Website',
      description: 'Scroll through the grind — projects that speak.',
      url: 'https://issac-moses-portfolio.netlify.app',
      icon: Globe,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tech Blog',
      description: 'Behind the screen — deep code tales.🤣',
      url: 'https://issac-moses-portfolio.netlify.app/blog',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Photography',
      description: 'Pixel-packed tales from every corner of the globe',
      url: 'https://www.flickr.com/photos/203078476@N05/',
      icon: Camera,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'My Music Playlist',
      description: 'No high hits harder than the vibe you brew yourself!',
      url: 'https://open.spotify.com/user/31pp6ch2alisczczrkqwmjc4a3je?si=890565c77f014546',
      icon: Music,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Freelance Work',
      description: 'Open for collabs, thrills & brain-bending builds — let’s cook something wild!',
      url: 'https://www.upwork.com/freelancers/~016ce54e073400a953?mp_source=share',
      icon: Briefcase,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Support My Work',
      description: 'Fuel my code with a coffee shot — keep the creativity brewing!',
      url: 'upi://pay?pa=6381256035@mbk&pn=Isaac%20Moses&cu=INR',
      icon: Heart,
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isDark ? 'text-white' : 'text-gray-800'}`}>
      <AnimatedBackground isDark={isDark} />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      
      <div className="container mx-auto px-4 py-12 max-w-2xl relative z-10">
        <ProfileSection isDark={isDark} />
        <SocialLinks isDark={isDark} />
        
        <div className="space-y-4">
          {links.map((link, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <LinkCard {...link} isDark={isDark} />
            </div>
          ))}
        </div>

        
        <div className={`
          text-center mt-12 pt-8 border-t border-opacity-20
          ${isDark ? 'border-white' : 'border-black'}
        `}>
          <p className={`text-sm opacity-60 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Made with ❣ by Issac Moses D
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;