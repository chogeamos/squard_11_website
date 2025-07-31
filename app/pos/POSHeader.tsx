'use client';

import { useState } from 'react';

type POSHeaderProps = {
  userRole: string;
  onLogout: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  onBarcodeSearch: (barcode: string) => void;
};

export default function POSHeader({
  userRole,
  onLogout,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onBarcodeSearch
}: POSHeaderProps) {
  const [barcodeInput, setBarcodeInput] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: 'ri-apps-line' },
    { id: 'groceries', name: 'Groceries', icon: 'ri-shopping-basket-line' },
    { id: 'beverages', name: 'Beverages', icon: 'ri-cup-line' },
    { id: 'household', name: 'Household', icon: 'ri-home-line' },
    { id: 'personal-care', name: 'Personal Care', icon: 'ri-heart-line' },
    { id: 'snacks', name: 'Snacks', icon: 'ri-cake-line' }
  ];

  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (barcodeInput.trim()) {
      onBarcodeSearch(barcodeInput.trim());
      setBarcodeInput('');
    }
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <i className="ri-store-line text-xl text-white"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SuperMarket POS</h1>
              <p className="text-xs text-gray-600 capitalize">{userRole} Dashboard</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleBarcodeSubmit} className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Scan/Enter Barcode"
                value={barcodeInput}
                onChange={(e) => setBarcodeInput(e.target.value)}
                className="w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <i className="ri-qr-scan-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              <i className="ri-search-line"></i>
            </button>
          </form>

          <div className="text-sm text-gray-600">
            {new Date().toLocaleString('en-KE', {
              timeZone: 'Africa/Nairobi',
              hour12: true
            })}
          </div>

          <button
            onClick={onLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap flex items-center space-x-2"
          >
            <i className="ri-logout-box-line"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center space-x-2 transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className={`${category.icon} text-sm`}></i>
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="relative ml-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
          <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>
    </header>
  );
}
