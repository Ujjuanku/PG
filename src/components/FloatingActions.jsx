import './FloatingActions.css';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  const { t } = useTranslation();

  return (
    <>
      <a href="https://wa.me/919652282229" target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp-btn" aria-label={t('floating.whatsapp')}>
        <MessageCircle size={28} />
      </a>
      
      <a href="tel:9652282229" className="floating-btn call-btn" aria-label={t('floating.call')}>
        <Phone size={24} />
      </a>
    </>
  );
};

export default FloatingActions;
