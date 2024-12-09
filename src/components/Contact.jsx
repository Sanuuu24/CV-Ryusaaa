import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Pesan terkirim!');
  };

  return (
    <div className="container mx-auto px-4 py-12" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Me!</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-Container p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-black">Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-3 text-black" />
              <span>satriaibnusaparudin@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 text-black" />
              <span>+62 838-2913-8320</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-3 text-black" />
              <span>Bandung, Indonesia</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-Container p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-black">Kirim Pesan</h3>
          <div className="mb-4">
            <label className="block mb-2">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Pesan</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-Button text-white px-6 py-2 rounded hover:bg-Primary/80 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;