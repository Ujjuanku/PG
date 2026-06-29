import { Play, Info } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-billboard" id="home">
      <div className="billboard-image-wrapper">
        <img 
          src="/assets/unnamedq10.jpg" 
          alt="MR Grand PG" 
          className="billboard-image"
        />
        <div className="billboard-vignette-bottom"></div>
        <div className="billboard-vignette-left"></div>
      </div>
      
      <div className="billboard-content">
        <h1 className="billboard-title">MR GRAND<br/>MEN'S STAY</h1>
        <p className="billboard-synopsis">
          Experience premium living in the heart of Hyderabad. Finding Family in Hostel with top-notch amenities, high-quality food, and a vibrant community. #1 Rated PG in Raidurgam.
        </p>
        <div className="billboard-actions">
          <a href="#pricing" className="btn btn-primary">
            <Play size={24} fill="currentColor" /> Book Now
          </a>
          <a href="#facilities" className="btn btn-secondary">
            <Info size={24} /> More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
