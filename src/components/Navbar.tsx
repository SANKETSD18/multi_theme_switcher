import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const getTextColor = () =>
    theme === 'theme2' || theme === 'theme3' ? 'text-white' : 'text-gray-700';

  return (
    <nav
      className={`w-full z-40 ${theme === 'theme2'
        ? 'fixed bottom-0'
        : theme === 'theme3'
          ? 'sticky top-[60px]'
          : 'fixed top-[60px]'
        } left-0 p-4 shadow ${theme}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className={`${getTextColor()} hover:text-blue-500`}>
          MyLogo
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href="#" className={`${getTextColor()} hover:text-blue-500`}>
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <div
    className={`md:hidden px-4 pb-4 space-y-2 ${
      theme === 'theme2'
        ? 'bg-[#121212]'
        : theme === 'theme3'
        ? 'bg-[#ffe4e1]'
        : 'bg-white'
    } shadow`}
  >
    {['Home', 'About', 'Services', 'Contact'].map((item) => (
      <a key={item} href="#" className={`block ${getTextColor()} hover:text-blue-500`}>
        {item}
      </a>
    ))}
  </div>
)}

    </nav>
  );
};

export default Navbar;
