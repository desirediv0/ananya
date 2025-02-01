import Image from "next/image";
import Wrapper from "@/app/_components/Wrapper";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

export default function CaseStudyPage() {
  const keyFindings = [
    "Sustainable fashion is becoming increasingly important as consumers prioritize environmental consciousness",
    "H&M has implemented various initiatives including recycling programs and sustainable material sourcing",
    "The future of fashion industry lies in circular economy and sustainable practices",
    "Consumer awareness and demand for sustainable products is driving industry change"
  ];

  return (
    <Wrapper className="py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
        <div className="flex items-center gap-3 mb-4 flex-col md:flex-row justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Case Study
            </h1>
            <Link 
              href="https://medium.com/@ananyabh09/case-study-d740e01a73de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 mt-2 md:mt-0 py-1 text-sm text-purple-400 hover:text-purple-300 border border-purple-400 hover:border-purple-300 rounded-full transition-colors"
            >
              Read Full Study <FaExternalLinkAlt size={12} />
            </Link>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sustainable Fashion: H&M&apos;s Approach and Industry Trends
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Smaller Images */}
          <div className="lg:w-[20%]">
            <div className="sticky top-24 space-y-4">
              <div className="group relative w-[200px] h-[150px] mx-auto overflow-hidden rounded-xl">
                <Image
                  src="/images/case1.jpeg"
                  alt="Sustainable fashion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="group relative w-[200px] h-[150px] mx-auto overflow-hidden rounded-xl">
                <Image
                  src="/images/case2.jpg"
                  alt="H&M store"
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
              <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                This case study explores trends in Sustainable fashion and H&M&apos;s approach towards it and future trends for industry. 
                The research delves into how H&M is implementing sustainable practices while maintaining its fast-fashion business model.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4">Key Findings</h2>
              <div className="space-y-2">
                {keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <BsCheck2Circle className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{finding}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700/30 hover:border-purple-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4">Conclusion</h2>
              <div className="text-gray-300">
                <p className="leading-relaxed">
                  Sustainable fashion is not just a trend, but a necessary evolution of the industry. 
                  As consumers continue to prioritize sustainability in their fashion choices, companies 
                  like H&M are adapting their business models to meet these changing demands while 
                  maintaining profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}