import React from 'react';

export default function Education() {
  return (
    <div className="space-y-6">
     <div className="flex items-start gap-4">
        <div className="w-2.5 h-2.5 mt-2.5 rounded-full bg-purple-400" />
        <div>
          <h3 className="text-xl text-white font-medium">B.Tech (Computer Engineering) - 3rd Year</h3>
          <p className="text-gray-400 text-base mt-1">Delhi Technological University • 2022-2026</p>
          <p className="text-purple-400 text-base mt-1">CGPA: 7.535</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="w-2.5 h-2.5 mt-2.5 rounded-full bg-purple-400" />
        <div>
          <h3 className="text-xl text-white font-medium">CBSE Class XII</h3>
          <p className="text-gray-400 text-base mt-1">Amity Pushp Vihar, New Delhi • 2022</p>
          <p className="text-purple-400 text-base mt-1">Percentage: 96%</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-2.5 h-2.5 mt-2.5 rounded-full bg-purple-400" />
        <div>
          <h3 className="text-xl text-white font-medium">CBSE Class X</h3>
          <p className="text-gray-400 text-base mt-1">Delhi Public School, Gurgaon • 2020</p>
          <p className="text-purple-400 text-base mt-1">Percentage: 95.6%</p>
        </div>
      </div>
    </div>
  );
}