import { useEffect, useState } from 'react';
import { Play, Info } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { LANGUAGE_STORAGE_KEY } from '../i18n';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const rotatingSubtitles = t('hero.rotatingSubtitles', { returnObjects: true });
  const hasSavedLanguage = Boolean(localStorage.getItem(LANGUAGE_STORAGE_KEY));
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(true);

  useEffect(() => {
    if (hasSavedLanguage || !Array.isArray(rotatingSubtitles)) return undefined;

    const interval = window.setInterval(() => {
      setIsSubtitleVisible(false);
      window.setTimeout(() => {
        setSubtitleIndex((currentIndex) => (currentIndex + 1) % rotatingSubtitles.length);
        setIsSubtitleVisible(true);
      }, 360);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [hasSavedLanguage, rotatingSubtitles]);

  const subtitle =
    !hasSavedLanguage && Array.isArray(rotatingSubtitles)
      ? rotatingSubtitles[subtitleIndex]
      : t('hero.synopsis');

  return (
    <div className="hero-billboard" id="home">
      <div className="billboard-image-wrapper">
        <img 
          src="/assets/unnamedq10.jpg" 
          alt={t('hero.alt')} 
          className="billboard-image"
          width="1360"
          height="1020"
          fetchPriority="high"
          decoding="async"
        />
        <div className="billboard-vignette-bottom"></div>
        <div className="billboard-vignette-left"></div>
      </div>
      
      <div className="billboard-content">
        <h1 className="billboard-title">
          <Trans i18nKey="hero.title" components={{ br: <br /> }} />
        </h1>
        <p className={`billboard-synopsis ${isSubtitleVisible ? 'visible' : 'hidden'}`}>
          {subtitle}
        </p>
        <div className="billboard-actions">
          <a href="#pricing" className="btn btn-primary">
            <Play size={24} fill="currentColor" /> {t('hero.bookNow')}
          </a>
          <a href="#facilities" className="btn btn-secondary">
            <Info size={24} /> {t('hero.moreInfo')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
