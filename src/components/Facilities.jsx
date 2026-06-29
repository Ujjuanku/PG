import './Facilities.css';
import { Wifi, Utensils, Sparkles, Box, Wind, Building, Activity, Route, Car, Droplets, Snowflake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const facilitiesData = [
  { icon: Wifi },
  { icon: Utensils },
  { icon: Sparkles },
  { icon: Box },
  { icon: Wind },
  { icon: Building },
  { icon: Droplets },
  { icon: Activity },
  { icon: Route },
  { icon: Car },
  { icon: Snowflake, badgeKey: 'facilities.acBadge' },
  { icon: Wind, badgeKey: 'facilities.nonAcBadge' }
];

const Facilities = () => {
  const { t } = useTranslation();
  const translatedFacilities = t('facilities.items', { returnObjects: true });

  return (
    <section className="section" id="facilities">
      <div className="container">
        <h2 className="section-title">{t('facilities.title')}</h2>
        
        <div className="facilities-grid">
          {facilitiesData.map((facility, index) => (
            <div className="facility-card" key={index}>
              <div className="icon-wrapper">
                <facility.icon size={32} />
              </div>
              <h3 className="facility-title">{translatedFacilities[index].title}</h3>
              <p className="facility-desc">{translatedFacilities[index].desc}</p>
              {facility.badgeKey && (
                <span className="facility-pill-badge">{t(facility.badgeKey)}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
