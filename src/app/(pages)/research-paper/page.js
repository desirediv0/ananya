import Image from "next/image";
import Wrapper from "@/app/_components/Wrapper";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

export default function ResearchPaperPage() {
  const methodologyPoints = [
    "Comprehensive literature review of existing banking techniques",
    "Field surveys with street vendors and small business owners",
    "Analysis of modern technological solutions in banking",
    "Documentary creation for public awareness"
  ];

  return (
    <Wrapper className="py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
        <div className="flex items-center gap-3 mb-4 flex-col md:flex-row justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Research Paper
            </h1>
            <Link 
              href="https://www.ijariit.com/manuscript/role-of-technology-in-finding-planned-defaulters/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 md:mt-0 px-3 py-1 text-sm text-purple-400 hover:text-purple-300 border border-purple-400 hover:border-purple-300 rounded-full transition-colors"
            >
              Read Full Paper <FaExternalLinkAlt size={12} />
            </Link>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Role of Technology in finding Planned Defaulters
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Smaller Images */}
          <div className="lg:w-[20%]">
            <div className="sticky top-24 space-y-4">
              <div className="group relative w-[200px] h-[150px] mx-auto overflow-hidden rounded-xl">
                <Image
                  src="/images/research1.jpg"
                  alt="Research methodology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="group relative w-[200px] h-[150px] mx-auto overflow-hidden rounded-xl">
                <Image
                  src="/images/research2.jpg"
                  alt="Data analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right Column - Highlighted Content */}
          <div className="lg:w-[80%] space-y-3">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4">Publication Details</h2>
              <p className="text-gray-300 leading-relaxed">
                Published in International Journal of Advance Research, Ideas and Innovations in Technology 
                (Volume 10, Issue 1 - V10I1-1192)
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4">Research Overview</h2>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  In this research paper, I explored the concept of defaulters, their identification methods, 
                  and how traditional banking techniques integrated with modern technologies can expedite 
                  the detection of planned defaulters.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4">Methodology</h2>
              <div className="space-y-3">
                {methodologyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <BsCheck2Circle className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}