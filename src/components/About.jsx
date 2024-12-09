import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="about">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">About ME!</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-Container p-8 rounded-lg shadow-md">
          <div className="text-center">
            <p className="leading-relaxed text-left">
              Perkenalkan, saya <strong>Satria Ibnu Safarudin</strong>, seorang <strong>Junior Backend Developer</strong> dan <strong>Junior Game Developer</strong> berbakat yang sedang menjalani perjalanan pendidikan di <strong>SMK Prakarya Internasional</strong> di Bandung, Jawa Barat, Indonesia. 
            </p>
            <p className="mt-4 leading-relaxed text-left">
              Dengan semangat yang membara dan tekad yang kuat, saya terus mengasah kemampuan dalam dunia pengembangan backend. Setiap baris kode yang saya tulis adalah refleksi dari hasrat saya untuk <strong>menciptakan solusi teknologi yang inovatif dan efisien</strong>.
            </p>
            <p className="mt-4 leading-relaxed text-left">
              Perjalanan saya di SMK bukan sekadar tentang pendidikan, melainkan tentang <strong>mewujudkan mimpi</strong> untuk menjadi seorang developer handal yang dapat memberikan kontribusi nyata dalam dunia teknologi. Saya selalu haus akan pengetahuan baru, siap menerima tantangan, dan terus mengembangkan keterampilan profesional saya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;