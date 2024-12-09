import React from 'react';

const experienceData = [
  {
    company: 'SMK Prakarya Internasional',
    position: 'Backend-Developer',
    period: 'July 2024 - Now',
    description: 'Merancang Back-end Aplikasi Web Konseling.'
  }
];

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="experience">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Experience</h2>
      <div className="max-w-2xl mx-auto">
        {experienceData.map((exp, index) => (
          <div 
            key={index} 
            className="mb-6 p-6 bg-Container rounded-lg shadow-md border-l-4 border-black"
          >
            <h3 className="text-xl font-semibold text-grey-500">{exp.position}</h3>
            <h4 className="text-lg mb-2">{exp.company}</h4>
            <p className="text-sm mb-2 italic">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;