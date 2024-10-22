import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';
import Cart from './Cart';
import AuthModal from './AuthModal';
import { useAuth } from '../contexts/AuthContext';

const categories = [
  'Construcción', 'Herramientas', 'Ferretería', 'Hogar', 'Plomería',
  'Pinturería', 'Bulonería', 'Electricidad', 'Grifería'
];

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/">
                <img src="/logo.svg" alt="Logo" className="h-8 w-auto mr-4" />
              </Link>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="bg-gray-700 text-white px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center cursor-pointer" onClick={handleAuthClick}>
                <User className="h-6 w-6 mr-2" />
                {user ? (
                  <span className="text-sm">{user.name}</span>
                ) : (
                  <span className="text-sm">Ingresar</span>
                )}
              </div>
              <ShoppingCart
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              />
            </div>
          </div>
          <div className="flex justify-between py-2 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="text-sm px-3 py-1 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;