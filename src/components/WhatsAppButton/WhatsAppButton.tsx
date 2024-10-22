import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/+5492613377921"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="/images/iconswhatsapp.png" 
        alt="WhatsApp" 
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;