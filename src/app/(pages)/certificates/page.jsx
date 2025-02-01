'use client'
import React from 'react';
import Wrapper from '@/app/_components/Wrapper';
import Certificates from '@/app/_components/Certificates';

export default function CertificatesPage() {
  return (
    <Wrapper className='py-8'>
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
            Certificates
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic and Extracurricular Achievements
          </p>
        </div>
        <Certificates />
      </div>
    </Wrapper>
  );
}