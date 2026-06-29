import './FloatingActions.css';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  return (
    <>
      <a href="https://wa.me/919652282229" target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp-btn" aria-label="WhatsApp Us">
        <MessageCircle size={28} />
      </a>
      
      <a href="tel:9652282229" className="floating-btn call-btn" aria-label="Call Us">
        <Phone size={24} />
      </a>
    </>
  );
};

export default FloatingActions;
