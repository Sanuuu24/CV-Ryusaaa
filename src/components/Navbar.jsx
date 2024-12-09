import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#profile' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Project', href: '#projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-black">
          Satria Ibnu Safarudin
        </div>

        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-Text hover:text-pink-700 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-grey shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-Text hover:text-pink-700 transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
