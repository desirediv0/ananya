import React from 'react'
import Banner from './_components/Banner'
import Intro from './_components/Intro'
import Testimonial from './_components/Quotes'

export default function page() {
  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <Banner/>
      <Intro/>
      <Testimonial/>
    </div>
  )
}