import { useState } from 'react';
import './Reviews.css';
import { Star, ShieldCheck } from 'lucide-react';

const reviewsData = [
  { name: "Sasanapuri Sandeep", text: "I am staying in this PG from past 1 year. The area is peaceful and friendly environment. The owners are like a family...", rating: 5 },
  { name: "Kushal Bohra", isLocalGuide: true, text: "I had an amazing experience at this hostel. The staff were incredibly friendly and always ready to help...", rating: 5 },
  { name: "Ramadevi Gadde", text: "This PG owners are also providing catering services... Their food is very tasty and price is also reasonable.", rating: 5 },
  { name: "Jayant Yadav", text: "Food is nice and they are providing 24/7 electricity. The main thing is that they are not using palm oil in vegetables.", rating: 5 },
  { name: "Suresh P", text: "Nice place to stay, good ventilation and proper maintenance. Food is really good. Management is very good...", rating: 5 },
  { name: "Chandan Dhal", text: "This PG is very good and hygienic food provided at affordable price...", rating: 5 },
  { name: "Prokash Raj", text: "Nice PG and good food. They clean the rooms on daily basis without fail and very hygienic.", rating: 5 },
  { name: "Roshan Chowdary", text: "Hygienic tasty food, best for employees, friendly management.", rating: 5 },
  { name: "Gadde Madhava Rao", text: "Good place & food. Owners are very friendly. I recommend this PG to IT professionals since this is very near to all IT companies.", rating: 5 },
  { name: "Soumyadeep Dutta", text: "Good PG to stay. PG owner Mr Srinu Chowdhury is a good and responsible person. Listens to complaints and gets them fixed.", rating: 5 },
  { name: "Ayush Patel", text: "Good room, services are good. The most important thing is food.", rating: 5 },
  { name: "DTP TP", isLocalGuide: true, text: "The MR Grand PG hostel is an excellent place to stay. Offering delicious food and a comfortable environment...", rating: 5 },
  { name: "Sukumar Dasari", isLocalGuide: true, text: "There are many excellent services offered in this area. Every rupee we spend is worth it here. Food is very delicious...", rating: 5 },
  { name: "Swapna Banavath", text: "Good ambience, quality food, hygiene maintained, quick response from owner, highly recommended, new furniture.", rating: 5 },
  { name: "Bharath Gadi", text: "Everyone in this fast paced corporate life wants a family and here at MR Grand you'll have a family type of experience...", rating: 5 },
  { name: "Aravind Sirangu", text: "Very good PG in the area and the best management. This is a genuine review after staying in the PG for 8 months.", rating: 5 },
  { name: "Chintu Gadde", text: "Good PG to stay and food is very delicious. Near to all IT companies. Calm and peaceful area.", rating: 5 },
  { name: "Shivkumar Ghamani", isLocalGuide: true, text: "One of the best PGs I've stayed in. The rooms are well-maintained, the environment is peaceful, and most importantly...", rating: 5 },
  { name: "Kaushlesh Kumar", text: "This is a good PG. Affordable rent, good food, and excellent facilities.", rating: 5 },
  { name: "Srinu Botla", text: "Very reasonable price. Food quality was top notch. The management is very approachable...", rating: 5 },
  { name: "Muppidis Entertainment", text: "Best PG with great ambience, budget friendly and the food is good. Rooms are clean and hygienic. Owner is very friendly.", rating: 5 },
  { name: "Sushanth Maiya", text: "It's a good PG. Worth the money. Comparatively spacious and the food is really good. Friendly management and staff.", rating: 5 },
  { name: "D Venkata Naga Bala Arun Kumar", isLocalGuide: true, text: "Food is delicious and the maintenance is too good. They maintain super hygiene while making food and the kitchen is too clean.", rating: 5 },
  { name: "Arif Jamil Ansari", text: "Good food, Chapati for north Indians.", rating: 5 },
  { name: "Saikishore Chavali", text: "Good food and nice place. Owners are very friendly. They maintain the PG very hygienically.", rating: 5 },
  { name: "Mudit Bhardwaj", isLocalGuide: true, text: "Food quality is best in area with good facilities, friendly behaviour of the owner.", rating: 5 },
  { name: "Mahendar Beeravalli", text: "Food excellent, management friendly, daily room cleaning. Good place to stay.", rating: 5 },
  { name: "Muppidi Ravi Kiran", text: "Good ambience. Individual Room Wi-Fi. Owner is very humble and reachable at any time. Hygienic food and place.", rating: 5 },
  { name: "Aravind Ajay", isLocalGuide: true, text: "Homely style food especially rooms cleaning and management well maintained.", rating: 5 },
  { name: "Ravi Muppidi", isLocalGuide: true, text: "Place is very nice and good ambience. Owner is very polite and provides good food.", rating: 5 },
  { name: "Sridhar Reddy", isLocalGuide: true, text: "Nice hostel with friendly owner.", rating: 5 },
  { name: "GURU RAJAA CHARI J", isLocalGuide: true, text: "Nice PG at affordable price.", rating: 5 },
  { name: "Srikanth Madishetty", isLocalGuide: true, text: "Good and nearby hostel PG to Hitech City.", rating: 5 },
  { name: "Vijay Sathuluri", isLocalGuide: true, text: "Absolutely amazing facilities. Definitely suggest it to all.", rating: 5 },
  { name: "Subbu R", text: "Highly recommend this wonderful PG. The food is excellent and high quality. It includes all essential amenities like AC...", rating: 5 },
  { name: "Tejash Babu", text: "I stayed for around 6-7 months. Rooms were well maintained and cleaned and mopped every day. Room size was decent.", rating: 5 }
];

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReviews = reviewsData.filter(review => 
    review.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
    review.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section" id="reviews">
      <div className="container">
        <h2 className="section-title">What Our Family Says</h2>
        
        <div className="reviews-header">
          <div className="google-rating">
            <div className="rating-score">4.7</div>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#E8952A" color="#E8952A" />)}
            </div>
            <div className="rating-count">Based on 61 Google Reviews</div>
          </div>
          
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search reviews (e.g. food, wifi, clean)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="reviews-carousel-wrapper">
          <div className={`reviews-track ${searchTerm ? 'paused' : ''}`}>
            {(searchTerm ? filteredReviews : [...reviewsData, ...reviewsData]).map((review, idx) => (
              <div className="review-card" key={idx}>
                <div className="review-header">
                  <div className="avatar">{review.name.charAt(0)}</div>
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    {review.isLocalGuide && <span className="local-guide"><ShieldCheck size={14} /> Local Guide</span>}
                  </div>
                </div>
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="#E8952A" color="#E8952A" />)}
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
            
            {searchTerm && filteredReviews.length === 0 && (
              <p style={{ textAlign: 'center', width: '100%', color: 'var(--text-muted)' }}>
                No reviews match your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
