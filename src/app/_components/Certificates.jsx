import React, { useState } from 'react';
import Image from 'next/image';

export default function Certificates() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

  const certificates = [
    { id: 'P1', src: '/certificates/P1.png', alt: 'Certificate P1',  },
    { id: 'P2', src: '/certificates/P2.png', alt: 'Certificate P2'},
    { id: 'P3', src: '/certificates/P3.jpg', alt: 'Certificate P3', },
    { id: 'P4', src: '/certificates/P4_1.jpg', alt: 'Certificate P4' },
    { id: 'P5', src: '/certificates/P5.jpg', alt: 'Certificate P5' },
    { id: 'P6', src: '/certificates/P7.png', alt: 'Certificate P6' },
    { id: 'P7', src: '/certificates/P8.png', alt: 'Certificate P7'},
    { id: 'P8', src: '/certificates/P9.png', alt: 'Certificate P8' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="relative h-64 rounded-lg overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all cursor-pointer"
            onClick={() => setSelectedImage(cert)}
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              fill
              className={`object-contain transition-transform duration-300 ${
                hoveredId === cert.id ? 'scale-105' : ''
              }`}
              quality={100}
            />
            {hoveredId === cert.id && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4">
            
                <p className="text-purple-300 text-sm">Click to expand</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              quality={100}
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <h3 className="text-white text-xl font-medium">{selectedImage.title}</h3>
              <button 
                className="text-white hover:text-purple-400 text-2xl"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}