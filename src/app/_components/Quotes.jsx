'use client'
import React, { useEffect, useState } from 'react'
import { PiQuotesFill } from "react-icons/pi"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import Wrapper from './Wrapper'

const testimonial = [
  {
    name : "-Nelson Mandela" ,
    desc : "Do not judge me by my success, judge me by how many times I fell down and got back up again."
  },
  {
    name : "-Rabindranath Tagore" ,
    desc : "We come nearest to the great when we are great in humility"
  },
  {
    name : "-Pt Birju Maharaj" ,
    desc : "Dance is nature. Listen to your Heart, it dances with its own Rhythm. The biggest thing that classical dance and music does to you is help attain balance between your mind and soul"
  },
  {
    name : "-Henry Wadsworth Longfellow" ,
    desc : "Let us, then, be up and doing, With a heart for any fate; Still achieving, still pursuing, Learn to labor and to wait"
  },
  {
    name : "-Rabbi Hillel" ,
    desc : "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when? "
  },
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transition, setTransition] = useState(false)
  const currentTestimonial = testimonial[currentIndex]

    const prevSlide = () => {
        setTransition(true)
        setCurrentIndex((slide) => (slide - 1 + testimonial.length) % testimonial.length)
    }
    const nextSlide = () => {
        setTransition(true)
        setCurrentIndex((slide) => (slide + 1) % testimonial.length)
    }

    useEffect(() => {
        const transitionTimer = setTimeout(() => {
            setTransition(false)
        }, 500)
        return () => clearTimeout(transitionTimer)
    }, [currentIndex])

    return (
      <div >
          <Wrapper className='relative max-w-4xl mx-auto px-12 py-8'>
              <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 md:p-12 transition-all duration-500 ${
                  transition ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
              }`}>
                  <div className="flex flex-col items-center gap-8">
                      <PiQuotesFill className="text-purple-400/80" size={48} />
                      <p className='text-xl md:text-2xl lg:text-3xl text-center text-gray-300 font-light leading-relaxed'>
                          {currentTestimonial.desc}
                      </p>
                      <h2 className='text-lg md:text-xl text-purple-300/80 font-medium'>
                          {currentTestimonial.name}
                      </h2>
                  </div>
              </div>
              <button 
                  onClick={prevSlide} 
                  className='absolute left-0 top-1/2 -translate-y-1/2 p-3 hover:bg-gray-800/50 rounded-full transition-colors'
              >
                  <MdOutlineArrowBackIosNew className="text-purple-400" size={28}/>
              </button>
              <button 
                  onClick={nextSlide} 
                  className='absolute right-0 top-1/2 -translate-y-1/2 p-3 hover:bg-gray-800/50 rounded-full transition-colors'
              >
                  <MdOutlineArrowForwardIos className="text-purple-400" size={28}/>
              </button>
          </Wrapper>
      </div>
  )
}