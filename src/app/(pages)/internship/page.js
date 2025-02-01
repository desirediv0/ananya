import React from "react";
import Wrapper from "@/app/_components/Wrapper";
import { Building2, Calendar, LineChart, MapPin } from "lucide-react";

export default function Page() {
  return (
    <Wrapper className="py-8">
      <div className="max-w-4xl mx-auto px-2 md:px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
            Internship Experience
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional experience and learning outcomes from industry exposure
          </p>
        </div>

        {/* Company Card */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl overflow-hidden mb-4">
          <div className="p-8 space-y-6">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Haleon</h2>
              <div className="flex items-center gap-2 text-purple-400">
                <MapPin className="w-4 h-4" />
                <span>London & Bangalore</span>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-lg bg-purple-900/20">
                  <Building2 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Company</div>
                  <div>Haleon</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-lg bg-purple-900/20">
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Duration</div>
                  <div>1 Month</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 rounded-lg bg-purple-900/20">
                  <LineChart className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Domain</div>
                  <div>Data Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-4">
          {/* Overview */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl p-8">
            <h3 className="text-xl font-medium text-white mb-4">Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              During my time at Haleon (London and Bangalore), I focused on Business Intelligence Data Analytics, specifically working with PowerBI to create comprehensive reports and visualizations. This experience enhanced my understanding of data integration and visualization techniques.
            </p>
          </div>

          {/* Key Learnings */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl p-8">
            <h3 className="text-xl font-medium text-white mb-4">Key Learnings</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                <p className="text-gray-300 leading-relaxed flex-1">
                  Developed expertise in connecting multiple data sources and creating intuitive visualizations that facilitate effective decision-making.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                <p className="text-gray-300 leading-relaxed flex-1">
                  Gained practical experience in translating complex data sets into user-friendly PowerBI reports, supporting data-driven business strategies.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                <p className="text-gray-300 leading-relaxed flex-1">
                  Enhanced understanding of business analytics workflow and corporate data management practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}