import Header from './components/Header'
import Hero from './components/Hero'
import Row from './components/Row'
import Facilities from './components/Facilities'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import ContactMap from './components/ContactMap'
import FloatingActions from './components/FloatingActions'
import './index.css'

function App() {
  const allImages = [
    'unnamed.jpg', 'unnamed1.jpg', 'unnamed2.jpg', 'unnamed3.jpg', 
    'unnamed4.jpg', 'unnamed5.jpg', 'unnamed6.jpg', 'unnamed7.jpg', 
    'unnamed8.jpg', 'unnamed9.jpg', 'unnamed11.jpg', 'unnamed12.jpg', 
    'unnamed13.jpg', 'unnamed14.jpg', 'unnamed15.jpg', 'unnamed16.jpg', 
    'unnamedq10.jpg'
  ].map(img => `/assets/${img}`);

  const trending = allImages.slice(0, 6);
  const premiumRooms = allImages.slice(6, 12);
  const gallery = allImages.slice(12);

  return (
    <>
      <Header />
      <Hero />
      <Row title="Trending Now" images={trending} />
      <Row title="Premium Rooms" images={premiumRooms} />
      <Row title="Gallery & Community" images={gallery} />
      
      <Facilities />
      <Pricing />
      <Reviews />
      <ContactMap />
      <FloatingActions />
    </>
  )
}

export default App
