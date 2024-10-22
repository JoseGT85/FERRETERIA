import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Martillo de carpintero',
    description: 'Martillo de acero forjado con mango ergonómico',
    price: 29.99,
    image: '/images/products/hammer.jpg',
  },
  {
    id: 2,
    name: 'Destornillador Phillips',
    description: 'Juego de destornilladores de precisión',
    price: 15.99,
    image: '/images/products/screwdriver.jpg',
  },
  {
    id: 3,
    name: 'Sierra circular',
    description: 'Sierra eléctrica para cortes precisos',
    price: 129.99,
    image: '/images/products/circular-saw.jpg',
  },
  {
    id: 4,
    name: 'Taladro inalámbrico',
    description: 'Taladro potente con batería de larga duración',
    price: 89.99,
    image: '/images/products/drill.jpg',
  },
  {
    id: 5,
    name: 'Cinta métrica',
    description: 'Cinta métrica resistente de 5 metros',
    price: 9.99,
    image: '/images/products/tape-measure.jpg',
  },
  {
    id: 6,
    name: 'Nivel láser',
    description: 'Nivel láser profesional con trípode',
    price: 79.99,
    image: '/images/products/laser-level.jpg',
  },
];

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products = initialProducts }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                <button
                  className={`bg-blue-500 text-white px-4 py-2 rounded-full transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;