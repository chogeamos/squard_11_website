
'use client';

import { useState, useEffect } from 'react';
import POSHeader from './POSHeader';
import ProductGrid from './ProductGrid';
import Cart from './Cart';
import PaymentModal from './PaymentModal';
import LoginModal from './LoginModal';

export default function POSSystem() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [barcode, setBarcode] = useState('');

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleBarcodeSearch = (barcodeValue) => {
    setBarcode(barcodeValue);
    setSearchQuery(barcodeValue);
  };

  if (!isLoggedIn) {
    return <LoginModal onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <POSHeader 
        userRole={userRole}
        onLogout={() => setIsLoggedIn(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onBarcodeSearch={handleBarcodeSearch}
      />
      
      <div className="flex h-screen pt-16">
        <div className="flex-1 p-6">
          <ProductGrid 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onAddToCart={addToCart}
          />
        </div>
        
        <div className="w-96 bg-white shadow-lg">
          <Cart 
            items={cart}
            onUpdateItem={updateCartItem}
            onClearCart={clearCart}
            onCheckout={() => setShowPayment(true)}
          />
        </div>
      </div>

      {showPayment && (
        <PaymentModal 
          cart={cart}
          onClose={() => setShowPayment(false)}
          onPaymentComplete={clearCart}
        />
      )}
    </div>
  );
}
