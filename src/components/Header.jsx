import { useState, useEffect } from 'react';
import './Header.css';
import { Search, Bell, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <div className="logo">MR GRAND</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#facilities">Facilities</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      
      <div className="header-right">
        <Search size={20} className="header-icon" />
        
        {/* Animated Theme Toggle */}
        <div className="theme-toggle" onClick={toggleTheme} title="Toggle Day/Night Mode" role="switch" aria-checked={theme === 'light'}>
          <span className="toggle-knob">
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </span>
        </div>
        
        <Bell size={20} className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
