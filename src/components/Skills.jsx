import React from 'react';
import { 
  SiPython, SiJavascript, SiNodedotjs, SiReact, SiGit, 
  SiLaravel, SiGo, SiCplusplus, SiUnity
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { TbBrandBlender } from "react-icons/tb";


const programmingSkills = [
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiCplusplus, name: 'C++', color: '#00599C' },
  { icon: SiGo, name: 'Go', color: '#00ADD8' },
  { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
  { icon: SiGit, name: 'Git', color: '#F05032' }
];

const developmentTools = [
  { icon: BiLogoVisualStudio, name: 'VS Code', color: '#007ACC' },
  { icon: DiVisualstudio, name: 'VS 2022', color: '#5C2D91' },
  { icon: SiUnity, name: 'Unity', color: '#000000' },
  { icon: TbBrandBlender, name: 'Blender', color: '#000000' }
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="skills">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Skills & Tools</h2>
      
      <div className="space-y-8">
        {/* Programming Languages & Frameworks */}
        <div className="bg-Container p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Programming Languages & Frameworks</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-center">
            {programmingSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-110 transition-transform"
              >
                <skill.icon
                  className="text-4xl mb-2"
                  color={skill.color}
                />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-sm italic">
            Mahir dalam berbagai bahasa pemrograman dan framework modern
          </p>
        </div>

        {/* Development Tools */}
        <div className="bg-Container p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Development Tools</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-center">
            {developmentTools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-110 transition-transform"
              >
                <tool.icon
                  className="text-4xl mb-2"
                  color={tool.color}
                />
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-sm italic">
            Terampil menggunakan berbagai alat pengembangan terkini
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;