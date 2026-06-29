import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Row.css';

const Row = ({ title, images }) => {
  const rowRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const openModal = (img) => {
    setSelectedImage(img);
    setIsClosing(false);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setIsClosing(true);
    // Wait for animation to finish before unmounting
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
      document.body.style.overflow = '';
    }, 300);
  };

  // Close on Escape key for desktop compatibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="row" id="rooms">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <button className="slider-btn left" onClick={() => handleScroll('left')} aria-label="Scroll left">
          <ChevronLeft size={40} />
        </button>
        
        <div className="row-posters" ref={rowRef}>
          {images.map((img, index) => (
            <img 
              key={index}
              className="row-poster"
              src={img} 
              alt={`${title} image ${index + 1}`}
              onClick={() => openModal(img)}
              loading="lazy"
            />
          ))}
        </div>

        <button className="slider-btn right" onClick={() => handleScroll('right')} aria-label="Scroll right">
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div 
          className={`image-modal-overlay ${isClosing ? 'closing' : ''}`} 
          onClick={closeModal}
        >
          <button 
            className="modal-close-btn" 
            onClick={closeModal} 
            aria-label="Close image"
          >
            <X size={28} />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="modal-image" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;
