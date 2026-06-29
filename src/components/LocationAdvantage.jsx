import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Building2,
  Check,
  Clapperboard,
  Clock,
  Cross,
  HeartPulse,
  Landmark,
  MapPin,
  Navigation,
  Plane,
  Route,
  ShoppingBag,
  Sparkles,
  Train,
} from 'lucide-react';
import './LocationAdvantage.css';

const ease = [0.22, 1, 0.36, 1];

const categories = [
  {
    id: 'it',
    label: 'IT Companies',
    eyebrow: 'Work closer',
    icon: Building2,
    accent: '#e50914',
    locations: [
      { name: 'Bosch Global Software Technologies', distance: '4.5 km', time: '8-12 min', icon: Building2 },
      { name: 'Raheja Mindspace IT Park', distance: '5.5 km', time: '10-12 min', icon: Building2 },
      { name: 'Microsoft IDC', distance: '6.5 km', time: '12-15 min', icon: Building2 },
      { name: 'Amazon Hyderabad Campus', distance: '7 km', time: '12-15 min', icon: Building2 },
      { name: 'Deloitte Towers', distance: '6 km', time: '10-12 min', icon: Building2 },
      { name: 'Financial District', distance: '5 km', time: '10-12 min', icon: Landmark },
      { name: 'HITEC City', distance: '6 km', time: '12-15 min', icon: Landmark },
      { name: 'Infosys SEZ', distance: '8 km', time: '15-18 min', icon: Building2 },
      { name: 'Wipro Circle', distance: '5 km', time: '10-12 min', icon: Route },
    ],
  },
  {
    id: 'transport',
    label: 'Transport',
    eyebrow: 'Move faster',
    icon: Train,
    accent: '#c9a84c',
    locations: [
      { name: 'Raidurg Metro Station', distance: '2.8 km', time: '5-8 min', icon: Train },
      { name: 'ORR Exit', distance: '3 km', time: '5 min', icon: Route },
      { name: 'Rajiv Gandhi International Airport', distance: '30 km', time: '35-40 min', icon: Plane },
    ],
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    eyebrow: 'After hours',
    icon: ShoppingBag,
    accent: '#f2c66d',
    locations: [
      { name: 'Raise The Bar', distance: '700 m', time: '5 min', icon: Sparkles },
      { name: 'Sarath City Capital Mall', distance: '8 km', time: '15 min', icon: ShoppingBag },
      { name: 'AMB Cinemas', distance: '8 km', time: '15 min', icon: Clapperboard },
    ],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    eyebrow: 'Care nearby',
    icon: HeartPulse,
    accent: '#e86b73',
    locations: [
      { name: 'AIG Hospital', distance: '5 km', time: '10-12 min', icon: Cross },
      { name: 'Continental Hospital', distance: '8 km', time: '15 min', icon: HeartPulse },
    ],
  },
  {
    id: 'spiritual',
    label: 'Spiritual Places',
    eyebrow: 'Quiet moments',
    icon: Sparkles,
    accent: '#d6a84f',
    locations: [
      { name: 'Khajaguda Temple', distance: '2 km', time: '5 min', icon: Sparkles },
      { name: 'ISKCON Temple', distance: '7 km', time: '15 min', icon: Landmark },
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const riseIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } },
};

function LocationRow({ location, accent }) {
  const Icon = location.icon;

  return (
    <motion.li
      className="location-row"
      aria-label={`${location.name}, ${location.distance}, ${location.time}`}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.28, ease }}
    >
      <span className="location-icon" style={{ '--location-accent': accent }}>
        <Icon size={15} strokeWidth={2.1} />
      </span>
      <span className="location-name">{location.name}</span>
      <span className="location-meta">
        <motion.span
          className="location-distance"
          style={{ '--location-accent': accent }}
          whileHover={{ y: -2, scale: 1.04 }}
          transition={{ duration: 0.24, ease }}
        >
          <MapPin size={12} />
          {location.distance}
        </motion.span>
        <motion.span
          className="location-time"
          style={{ '--location-accent': accent }}
          whileHover={{ y: -2, scale: 1.04 }}
          transition={{ duration: 0.24, ease }}
        >
          <Clock size={12} />
          {location.time}
        </motion.span>
      </span>
    </motion.li>
  );
}

function AdvantageCard({ category }) {
  const { t } = useTranslation();
  const Icon = category.icon;
  const categoryCopy = t(`location.categories.${category.id}`, { returnObjects: true });

  return (
    <motion.article
      className="advantage-card"
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.32, ease }}
      style={{ '--card-accent': category.accent }}
    >
      <div className="advantage-card__shine" />
      <div className="advantage-card__header">
        <span className="advantage-card__icon">
          <Icon size={24} strokeWidth={2} />
        </span>
        <div>
          <p className="advantage-card__eyebrow">{categoryCopy.eyebrow}</p>
          <h3>{categoryCopy.label}</h3>
        </div>
      </div>
      <ul className="advantage-card__list">
        {category.locations.map((location) => (
          <LocationRow key={location.name} location={location} accent={category.accent} />
        ))}
      </ul>
    </motion.article>
  );
}

export default function LocationAdvantage() {
  const { t } = useTranslation();
  const trustIndicators = t('location.trust', { returnObjects: true });

  return (
    <motion.section
      className="location-advantage"
      id="location"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="location-advantage__grid" />
      <div className="location-advantage__beam location-advantage__beam--red" />
      <div className="location-advantage__beam location-advantage__beam--gold" />

      <div className="location-advantage__inner">
        <motion.div className="corridor-badge" variants={riseIn}>
          <Navigation size={15} />
          {t('location.badge')}
        </motion.div>

        <motion.div className="location-hero" variants={riseIn}>
          <p className="location-hero__kicker">{t('location.kicker')}</p>
          <h2>{t('location.title')}</h2>
          <p>
            {t('location.subtitle')}
          </p>
        </motion.div>

        <motion.div className="commute-panel" variants={riseIn}>
          <div className="commute-panel__metric">
            <span>{t('location.saved')}</span>
            <small>{t('location.savedLabel')}</small>
          </div>
          <div className="commute-panel__copy">
            <h3>{t('location.commuteTitle')}</h3>
            <p>
              {t('location.commuteCopy')}
            </p>
          </div>
          <ArrowRight className="commute-panel__arrow" size={22} />
        </motion.div>

        <motion.div className="trust-row" variants={riseIn}>
          {trustIndicators.map((item) => (
            <span className="trust-chip" key={item}>
              <Check size={14} />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div className="advantage-grid" variants={sectionVariants}>
          {categories.map((category) => (
            <AdvantageCard key={category.id} category={category} />
          ))}
        </motion.div>

        <motion.div className="location-address" variants={riseIn}>
          <MapPin size={16} />
          <span>
            Plot No 262, Khajaguda X-Roads, Prashant Hills, Gachibowli, Rai Durg,
            Hyderabad, Telangana 500032
          </span>
        </motion.div>

        <motion.p className="location-note" variants={riseIn}>
          {t('location.note')}
        </motion.p>
      </div>
    </motion.section>
  );
}
