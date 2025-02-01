import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { FaGraduationCap, FaCode, FaChartLine, FaMusic } from 'react-icons/fa'

export default function Banner() {
    const highlights = [
        {
            icon: <FaGraduationCap className="w-5 h-5" />,
            text: "B.Tech in Computer Science at Delhi Technological University"
        },
        {
            icon: <FaCode className="w-5 h-5" />,
            text: "Keen interest in Data Structures, Algorithms & OOPS"
        },
        {
            icon: <FaChartLine className="w-5 h-5" />,
            text: "Passionate about Data Science/Analytics & Finance"
        },
        {
            icon: <FaMusic className="w-5 h-5" />,
            text: "Active performer in Dance and Cultural Activities"
        }
    ];

    return (
        <div className='w-full py-4'>
            <Wrapper className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
                <section className='order-2 md:order-1'>
                    <div className='max-w-[400px] mx-auto mt-4'>
                        <div className='relative h-[350px] rounded-xl overflow-hidden group border border-gray-700/30'>
                            <Image 
                                src="/images/profile4.jpeg"
                                alt="Ananya bhatnagar"
                                fill
                                priority
                                className='object-cover object-center transition-all duration-500 group-hover:scale-110'
                                quality={100}
                            />
                        </div>
                    </div>
                </section>
                <section className='order-1 md:order-2 space-y-6'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent'>
                        Ananya Bhatnagar
                    </h1>
                    <div className='space-y-4'>
                        {highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 group">
                                <span className="text-purple-400 p-2 rounded-lg bg-purple-400/10 group-hover:text-purple-300">
                                    {item.icon}
                                </span>
                                <p className='text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors mt-1'>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </Wrapper>
        </div>
    )
}