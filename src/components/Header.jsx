import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { Search, Bell, Sun, Moon } from 'lucide-react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'te', label: 'తెలుగు' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
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

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <div className="logo">MR GRAND</div>
        <nav className="nav-links">
          <a href="#home">{t('nav.home')}</a>
          <a href="#rooms">{t('nav.rooms')}</a>
          <a href="#facilities">{t('nav.facilities')}</a>
          <a href="#pricing">{t('nav.pricing')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>
      </div>
      
      <div className="header-right">
        <Search size={20} className="header-icon" aria-label={t('nav.search')} />
        
        {/* Animated Theme Toggle */}
        <div className="theme-toggle" onClick={toggleTheme} title={t('nav.themeToggle')} role="switch" aria-checked={theme === 'light'}>
          <span className="toggle-knob">
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </span>
        </div>

        <div className="language-switcher" aria-label={t('nav.language')} role="group">
          {languages.map((language) => (
            <button
              type="button"
              className={`language-option ${i18n.resolvedLanguage === language.code || i18n.language === language.code ? 'active' : ''}`}
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
            >
              {language.label}
            </button>
          ))}
        </div>
        
        <Bell size={20} className="header-icon" aria-label={t('nav.notifications')} />
      </div>
    </header>
  );
};

export default Header;
