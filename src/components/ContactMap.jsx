import './ContactMap.css';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactMap = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.alert'));
  };

  return (
    <section className="section bg-alt" id="contact">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3 className="contact-heading">{t('contact.visit')}</h3>
            <p className="contact-desc">{t('contact.desc')}</p>
            
            <ul className="info-list">
              <li>
                <div className="info-icon"><MapPin size={24} /></div>
                <div className="info-text">
                  <strong>{t('contact.address')}</strong>
                  <span>Plot no 262, Khajaguda X-Roads, Prashant Hills, Gachibowli, Rai Durg, Hyderabad, Telangana 500032</span>
                </div>
              </li>
              <li>
                <div className="info-icon"><Phone size={24} /></div>
                <div className="info-text">
                  <strong>{t('contact.phone')}</strong>
                  <span><a href="tel:9652282229">+91 96522 82229</a> | <a href="tel:9888994772">+91 98889 94772</a></span>
                </div>
              </li>
              <li>
                <div className="info-icon"><Mail size={24} /></div>
                <div className="info-text">
                  <strong>{t('contact.email')}</strong>
                  <span><a href="mailto:harihareshwara.pg@gmail.com">harihareshwara.pg@gmail.com</a></span>
                </div>
              </li>
            </ul>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5765434617!2d78.37822217434!3d17.42019847640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb959c3803809d%3A0x595a43bfe0441ac4!2sMR%20Grand%20Men's%20Stay%20PG!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contact.mapTitle')}
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/dir//MR+Grand+Men%E2%80%99s+Stay+PG,+Plot+no+262,+Khajaguda+X-Roads,+Prashant+Hills,+Gachibowli,+Rai+Durg,+Hyderabad,+Telangana+500032/@17.4201986,78.380798,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent directions-btn"
            >
              <MapPin size={18} /> {t('contact.directions')}
            </a>
          </div>

          <div id="book-visit" className="booking-anchor" aria-hidden="true"></div>
          <div className="contact-form-container">
            <h3 className="contact-heading">{t('contact.bookVisit')}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.fullName')}</label>
                <input type="text" id="name" placeholder={t('contact.namePlaceholder')} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t('contact.phoneNumber')}</label>
                <input type="tel" id="phone" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label htmlFor="sharing">{t('contact.preferredSharing')}</label>
                <select id="sharing" required>
                  <option value="">{t('contact.selectOption')}</option>
                  <option value="1">{t('pricing.plans.3')}</option>
                  <option value="2">{t('pricing.plans.2')}</option>
                  <option value="3">{t('pricing.plans.1')}</option>
                  <option value="4">{t('pricing.plans.0')}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea id="message" rows="4" placeholder={t('contact.messagePlaceholder')}></textarea>
              </div>
              <button type="submit" className="btn btn-accent submit-btn">
                <Send size={18} /> {t('contact.sendRequest')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
