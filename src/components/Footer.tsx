import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ferretería Mendoza</h3>
            <p className="mb-2">Tu tienda de confianza para todas tus necesidades de ferretería y construcción.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul>
              <li className="flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                <span>+54 261 5382326</span>
              </li>
              <li className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@ferreteríamendoza.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Av. Cerro Arco 1939, Mendoza, Argentina</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Ferretería Mendoza. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;