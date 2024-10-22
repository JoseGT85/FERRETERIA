import React, { useState } from 'react';
import { MapPin, Play } from 'lucide-react';

const MapAndVideoSection: React.FC = () => {
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          onMouseEnter={() => setIsMapHovered(true)}
          onMouseLeave={() => setIsMapHovered(false)}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894506!2d-58.38375908477038!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1647893577273!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isMapHovered ? 'opacity-100' : 'opacity-0'}`}>
            <MapPin className="text-white w-16 h-16" />
          </div>
        </div>
        <div 
          className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          onMouseEnter={() => setIsVideoHovered(true)}
          onMouseLeave={() => setIsVideoHovered(false)}
        >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FBDGqk5E9vc?si=XgjH8wyRnAylUvYd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
        </div>
      </div>
    </section>
  );
};

export default MapAndVideoSection;