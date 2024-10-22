import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import ProductGrid from './components/ProductGrid';
import MapAndVideoSection from './components/MapAndVideoSection';
import CategoryPage from './components/CategoryPage';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <ImageSlider />
                  <ProductGrid />
                  <MapAndVideoSection />
                </>
              } />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;