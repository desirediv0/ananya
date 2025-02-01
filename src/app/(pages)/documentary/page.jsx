'use client'
import React, { useState } from 'react';
import Wrapper from '@/app/_components/Wrapper';
import { CirclePlay } from "lucide-react";

const documentaries = [
  {
    title: "Role of Technology in Finding Planned Defaulters",
    description: "An in-depth investigation into the evolving landscape of online payment systems and how advanced technology can be leveraged to identify potential defaulters. This documentary explores cutting-edge solutions, real-world case studies, and expert insights into financial risk management.",
    videoUrl: "https://drive.google.com/file/d/1l7IuYrgcxfI8Hd6irTK5eqWZeLoSdOLA/preview"
  }
];

export default function DocumentaryPage() {
  const [videoModal, setVideoModal] = useState({ isOpen: false, url: '' });

  return (
    <Wrapper className='py-8'>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-2">
            Documentaries
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            In-depth explorations of technology&apos;s role in modern financial systems
          </p>
        </div>

        {/* Documentaries Grid */}
        <div className="grid gap-4">
          {documentaries.map((doc, idx) => (
            <div 
              key={idx}
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {doc.title}
                </h2>
             
                <p className="text-gray-400 text-lg leading-relaxed">
                  {doc.description}
                </p>
                <button 
                  onClick={() => setVideoModal({ isOpen: true, url: doc.videoUrl })}
                  className="inline-flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-all duration-300 text-base font-medium group/btn"
                >
                  <CirclePlay size={24} className="group-hover/btn:scale-110 transition-transform" />
                  Watch Documentary
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {videoModal.isOpen && (
                <div 
                  className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 md:p-8"
                  onClick={() => setVideoModal({ isOpen: false, url: '' })}
                >
                  <div className="relative w-full max-w-5xl aspect-video">
                    <iframe
                      src={videoModal.url}
                      allow="autoplay"
                      className="w-full h-full rounded-xl shadow-2xl"
                      allowFullScreen
                    />
                    <button 
                      className="absolute -top-12 right-0 text-white hover:text-purple-400 text-4xl transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setVideoModal({ isOpen: false, url: '' });
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
    </Wrapper>
  );
}