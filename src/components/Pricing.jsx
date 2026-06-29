import './Pricing.css';
import { Check } from 'lucide-react';

const pricingData = [
  { type: '4 Sharing', price: '9,500', popular: false },
  { type: '3 Sharing', price: '10,500', popular: true },
  { type: '2 Sharing', price: '13,500', popular: false },
  { type: '1 Sharing (Single)', price: '26,000', popular: false }
];

const Pricing = () => {
  return (
    <section className="section bg-alt" id="pricing">
      <div className="container">
        <h2 className="section-title">Transparent Pricing</h2>
        
        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-type">{plan.type}</h3>
              <div className="plan-price">
                <span className="currency">₹</span>
                <span className="amount">{plan.price}</span>
                <span className="duration">/mo</span>
              </div>
              <ul className="plan-features">
                <li><Check size={18} className="check-icon" /> Individual High Speed WiFi</li>
                <li><Check size={18} className="check-icon" /> Everyday Egg & Milk</li>
                <li><Check size={18} className="check-icon" /> Daily Room Cleaning</li>
                <li><Check size={18} className="check-icon" /> All Premium Amenities</li>
              </ul>
              <button className={`btn ${plan.popular ? 'btn-accent' : 'btn-outline-primary'}`}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
