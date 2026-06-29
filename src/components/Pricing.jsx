import './Pricing.css';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const pricingData = [
  { price: '9,500', popular: false, isAc: true },
  { price: '10,500', popular: true, isAc: false },
  { price: '13,500', popular: false, isAc: true },
  { price: '24,000', popular: false, isAc: true }
];

const Pricing = () => {
  const { t } = useTranslation();
  const plans = t('pricing.plans', { returnObjects: true });
  const features = t('pricing.features', { returnObjects: true });

  return (
    <section className="section bg-alt" id="pricing">
      <div className="container">
        <h2 className="section-title">{t('pricing.title')}</h2>
        
        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">{t('pricing.popular')}</div>}
              <h3 className="plan-type">{plans[index]}</h3>
              <div className="plan-price">
                <span className="currency">₹</span>
                <span className="amount">{plan.price}</span>
                <span className="duration">{t('pricing.perMonth')}</span>
              </div>
              <ul className="plan-features">
                {features.map((feature) => (
                  <li key={feature}><Check size={18} className="check-icon" /> {feature}</li>
                ))}
              </ul>
              <p className="pricing-note">
                {t(plan.isAc ? 'pricing.acElectricityNote' : 'pricing.nonAcElectricityNote')}
              </p>
              <a href="#book-visit" className={`btn ${plan.popular ? 'btn-accent' : 'btn-outline-primary'}`}>
                {t('pricing.bookNow')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
