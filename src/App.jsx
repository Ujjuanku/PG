import Header from './components/Header'
import Hero from './components/Hero'
import Row from './components/Row'
import Facilities from './components/Facilities'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import ContactMap from './components/ContactMap'
import LocationAdvantage from './components/LocationAdvantage'
import GettingHereEasy from './components/GettingHereEasy'
import FloatingActions from './components/FloatingActions'
import { useTranslation } from 'react-i18next'
import './index.css'

function App() {
  const { t } = useTranslation()

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
      <Row title={t('rows.trending')} images={trending} />
      <Row title={t('rows.premiumRooms')} images={premiumRooms} />
      <Row title={t('rows.gallery')} images={gallery} />
      
      <Facilities />
      <Pricing />
      <Reviews />
      <LocationAdvantage />
      <GettingHereEasy />
      <ContactMap />
      <FloatingActions />
    </>
  )
}

export default App
