import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Carrot as Mirror } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Mirror className="h-8 w-8" />
            <span className="text-xl font-bold">Mirag8</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link>
            <Link to="/founders" className="hover:text-blue-500 transition-colors">Founders</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;