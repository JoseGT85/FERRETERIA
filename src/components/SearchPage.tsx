import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from './ProductGrid';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q') || '';

  useEffect(() => {
    // Aquí simularemos una búsqueda de productos
    // En una aplicación real, esto sería una llamada a una API o base de datos
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Martillo de carpintero',
        description: 'Martillo de acero forjado con mango ergonómico',
        price: 29.99,
        image: '/images/products/hammer.jpg',
        category: 'Herramientas',
      },
      {
        id: 2,
        name: 'Destornillador Phillips',
        description: 'Destornillador de precisión con punta Phillips',
        price: 9.99,
        image: '/images/products/screwdriver.jpg',
        category: 'Herramientas',
      },
      // Añade más productos aquí...
    ];

    const filteredProducts = mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredProducts);
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resultados de búsqueda para: {searchQuery}</h1>
      {searchResults.length > 0 ? (
        <ProductGrid products={searchResults} />
      ) : (
        <p>No se encontraron productos que coincidan con tu búsqueda.</p>
      )}
    </div>
  );
};

export default SearchPage;