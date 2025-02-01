"use client"
import React, { useState } from "react";
import Wrapper from "@/app/_components/Wrapper";
import { HandCoins, BookOpen, Users, Sparkles } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";

const societySections = [
  {
    id: 'crowdfunding',
    icon: HandCoins,
    title: 'Crowdfunding Success',
    content: `I have been part of a crowdfunding campaign where the goal was to
      raise Rs 15000, for an underprivileged girl. I managed to raise Rs
      31000 for that girl and this money was able to cover her education
      expenses, her food and her uniform expenses. Nothing made me happier
      than seeing the look of joy in her eyes.`
  },
  {
    id: 'shiksha',
    icon: BookOpen,
    title: 'Shiksha Kendra Program',
    content: `In my school, a program called "Shiksha Kendra" used to run after
      school hours for underprivileged students. I volunteered to teach
      them basic maths and Science at least 2-3 times as well as donated
      some of my clothes and books to them.`
  },
  {
    id: 'menstrual',
    icon: Users,
    title: 'Menstrual Health Awareness',
    content: `In the 4th Semester of my college, I took an elective named
      "Extension and Outreach", where I worked on raising awareness about
      menstrual hygiene among poor women and girls. I visited a few NGOs
      and talked about the importance of menstrual hygiene, made posters
      and conducted a few activities so that the women and girls could
      interact. I talked about the myths and taboos of menstruation, the
      importance of sanitary napkins, the importance of hygiene and many
      more.(Received O grade in this, highest)`
  },
  {
    id: 'girlsgrow',
    icon: Sparkles,
    title: 'Girls Grow Program Mentor',
    content: `Currently, I am also a mentor of a 'Girls Grow Program'. In this program, 
      our main focus is on secondary and senior school girls. Our main aim is to 
      motivate these girls in the field of STEM. Girls are discouraged from pursuing 
      STEM, or they don't have the right/adequate guidance to form the required decision. 
      So we conduct sessions for these girls about various topics like what STEM is, 
      what options they have in STEM, the resources for the STEM fields, women in STEM, 
      colleges, Career options in STEM field and much more.`
  }
];

export default function Page() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(prev => prev === sectionId ? null : sectionId);
  };

  return (
    <Wrapper  className="py-8">
      <div className="max-w-4xl mx-auto px-2 md:px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
            Society Work
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Service before Self — Contributing to positive change through various social initiatives
          </p>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-3">
          {societySections.map((section, index) => (
            <div
              key={section.id}
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center p-6 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-purple-400/50 text-lg font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-3">
                    <section.icon className="w-5 h-5 text-purple-400" />
                    <h2 className="text-xl font-medium text-white text-start group-hover:text-purple-200 transition-colors">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <FaChevronDown 
                  className={`text-purple-400 transform transition-transform duration-300 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  } group-hover:text-purple-300`}
                  size={16}
                />
              </button>

              <div className={`transition-all duration-300 ease-in-out ${
                expandedSection === section.id 
                  ? 'max-h-[500px] opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden backdrop-blur-sm`}>
                <div className="p-6 border-t border-gray-700/30 bg-gray-900/30">
                  <p className="text-gray-300 text-justify leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-5 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl text-gray-400 leading-relaxed">
          Through these initiatives, I strive to address the fundamental rights
          of underprivileged people, particularly in education and empowerment.
          Coming from a privileged position, I feel it&apos;s my responsibility
          to contribute to positive change in society.
        </div>
      </div>
    </Wrapper>
  );
}