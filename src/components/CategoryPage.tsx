import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from './ProductGrid';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
      <ProductGrid />
    </div>
  );
};

export default CategoryPage;