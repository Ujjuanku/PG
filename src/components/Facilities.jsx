import './Facilities.css';
import { Wifi, Utensils, Sparkles, Box, Wind, Building, Activity, Route, Car, Droplets } from 'lucide-react';

const facilitiesData = [
  { icon: Wifi, title: 'High Speed WiFi', desc: 'Individual connection for every room' },
  { icon: Utensils, title: 'Quality Food', desc: 'Everyday Egg & Milk, high protein, hygienic' },
  { icon: Sparkles, title: 'Daily Cleaning', desc: 'Rooms cleaned perfectly every day' },
  { icon: Box, title: 'Cupboards', desc: 'Individual spacious cupboards' },
  { icon: Wind, title: 'Well Ventilated', desc: 'Fresh air and ample natural light' },
  { icon: Building, title: 'New Building', desc: 'All brand new facilities and furniture' },
  { icon: Droplets, title: 'Washing Machine', desc: 'Laundry made easy with modern machines' },
  { icon: Activity, title: 'Fridge & Water', desc: 'Refrigerator & dispenser on each floor' },
  { icon: Route, title: 'Prime Location', desc: 'Walkable distance to major IT firms' },
  { icon: Car, title: 'Spacious Parking', desc: 'Ample parking space for your vehicles' }
];

const Facilities = () => {
  return (
    <section className="section" id="facilities">
      <div className="container">
        <h2 className="section-title">Premium Facilities</h2>
        
        <div className="facilities-grid">
          {facilitiesData.map((facility, index) => (
            <div className="facility-card" key={index}>
              <div className="icon-wrapper">
                <facility.icon size={32} />
              </div>
              <h3 className="facility-title">{facility.title}</h3>
              <p className="facility-desc">{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
