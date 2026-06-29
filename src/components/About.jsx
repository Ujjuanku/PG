import './About.css';
import { Home, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <section className="section bg-alt" id="about">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>Who We Are</h2>
          <p className="about-description">
            Welcome to <strong>MR Grand Men's Stay PG</strong>, a premium living space in the heart of Hyderabad. Located at Prashanth Hills, Raidurgam, we are just a walkable distance from major IT firms. 
          </p>
          <p className="about-description">
            Our motto is <em>"Finding Family in Hostel"</em>. We believe that a PG should be more than just a room; it should be a place where you feel at home, safe, and part of a community.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <Home className="feature-icon" />
              <span>Premium Amenities</span>
            </div>
            <div className="feature-item">
              <Users className="feature-icon" />
              <span>Friendly Management</span>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" />
              <span>Safe & Secure</span>
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="image-wrapper">
            <img src="/assets/unnamed2.jpg" alt="PG Building" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
