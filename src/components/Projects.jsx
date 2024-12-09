import React from 'react';

const projectData = [
  {
    name: 'Library Apps',
    description: 'Sistem backend untuk aplikasi perpustakaan sekolah Data Siswa, Peminjaman, Stok Buku, Autentikasi.',
    technologies: ['Node.js', 'Laravel', 'SQL']
  },
  {
    name: 'Horror',
    description: 'Sebuah Game Horror Dirancang Oleh Saya Sendiri',
    technologies: ['Unity', 'Blender', 'Csharp']
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Project</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="bg-Container p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3 text-black">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-black/20 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;