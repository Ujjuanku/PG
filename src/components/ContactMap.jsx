import './ContactMap.css';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactMap = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you soon.");
  };

  return (
    <section className="section bg-alt" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3 className="contact-heading">Visit Us</h3>
            <p className="contact-desc">Ready to find your new family? Drop by for a visit or reach out to us!</p>
            
            <ul className="info-list">
              <li>
                <div className="info-icon"><MapPin size={24} /></div>
                <div className="info-text">
                  <strong>Address</strong>
                  <span>Plot no 262, Khajaguda X-Roads, Prashant Hills, Gachibowli, Rai Durg, Hyderabad, Telangana 500032</span>
                </div>
              </li>
              <li>
                <div className="info-icon"><Phone size={24} /></div>
                <div className="info-text">
                  <strong>Phone</strong>
                  <span><a href="tel:9652282229">+91 96522 82229</a> | <a href="tel:9888994772">+91 98889 94772</a></span>
                </div>
              </li>
              <li>
                <div className="info-icon"><Mail size={24} /></div>
                <div className="info-text">
                  <strong>Email</strong>
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
                title="MR Grand Men's Stay PG Location"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/dir//MR+Grand+Men%E2%80%99s+Stay+PG,+Plot+no+262,+Khajaguda+X-Roads,+Prashant+Hills,+Gachibowli,+Rai+Durg,+Hyderabad,+Telangana+500032/@17.4201986,78.380798,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent directions-btn"
            >
              <MapPin size={18} /> Get Directions on Google Maps
            </a>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-heading">Book a Visit</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label htmlFor="sharing">Preferred Sharing</label>
                <select id="sharing" required>
                  <option value="">Select an option...</option>
                  <option value="1">1 Sharing (Single)</option>
                  <option value="2">2 Sharing</option>
                  <option value="3">3 Sharing</option>
                  <option value="4">4 Sharing</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" rows="4" placeholder="Any specific requirements?"></textarea>
              </div>
              <button type="submit" className="btn btn-accent submit-btn">
                <Send size={18} /> Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
