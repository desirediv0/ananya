import React from 'react'
import Wrapper from './Wrapper'
import { FaMapMarkerAlt, FaUsers, FaGraduationCap, FaMusic } from 'react-icons/fa'

export default function Intro() {
    const introPoints = [
        {
            icon: <FaMapMarkerAlt className="w-5 h-5" />,
            title: "Cultural Background",
            text: "Born in Mumbai and raised across different cities in North and Western India, experiencing rich and diverse cultural environments"
        },
        {
            icon: <FaUsers className="w-5 h-5" />,
            title: "Family Background",
            text: "Raised in a close knitted family with grandparents & parents being educators and admirers of music and arts inspired me for all round development"
        },
        {
            icon: <FaGraduationCap className="w-5 h-5" />,
            title: "Academic Excellence",
            text: "Excelled in Senior Secondary examination with top percentile performance and pursuing B.Tech in Computer Science at DTU"
        },
        {
            icon: <FaMusic className="w-5 h-5" />,
            title: "Extra-Curricular",
            text: "Passionate about dance and leading extra-curricular activities alongside academic achievements"
        }
    ];

    return (
        <div>
            <Wrapper className='max-w-4xl mx-auto space-y-5 py-5 md:py-0'>
                <div className='bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 md:p-8 space-y-8'>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent'>
                        Introduction
                    </h2>
                    <div className='grid gap-6 md:grid-cols-2'>
                        {introPoints.map((point, idx) => (
                            <div key={idx} className="group space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400 p-2.5 rounded-lg bg-purple-400/10 group-hover:text-purple-300">
                                        {point.icon}
                                    </span>
                                    <h3 className="text-xl font-medium text-white group-hover:text-purple-200">
                                        {point.title}
                                    </h3>
                                </div>
                                <p className='text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors pl-12'>
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}