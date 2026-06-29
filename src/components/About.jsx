import './About.css';
import { Trans, useTranslation } from 'react-i18next';
import { Home, Users, Shield } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-alt" id="about">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>{t('about.title')}</h2>
          <p className="about-description">
            <Trans i18nKey="about.description1" components={{ strong: <strong /> }} />
          </p>
          <p className="about-description">
            <Trans i18nKey="about.description2" components={{ em: <em /> }} />
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <Home className="feature-icon" />
              <span>{t('about.amenities')}</span>
            </div>
            <div className="feature-item">
              <Users className="feature-icon" />
              <span>{t('about.management')}</span>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" />
              <span>{t('about.safety')}</span>
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="image-wrapper">
            <img src="/assets/unnamed2.jpg" alt={t('about.imageAlt')} className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
