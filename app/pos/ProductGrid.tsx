
'use client';

import { useState, useEffect } from 'react';

export default function ProductGrid({ searchQuery, selectedCategory, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Sample product data
  useEffect(() => {
    const sampleProducts = [
      {
        id: '001',
        name: 'Bread - White Loaf',
        barcode: '1234567890123',
        price: 55,
        stock: 24,
        category: 'groceries',
        image: 'https://readdy.ai/api/search-image?query=Fresh%20white%20bread%20loaf%20on%20clean%20background%2C%20commercial%20product%20photography%20style&width=200&height=200&seq=bread-001&orientation=squarish'
      },
      {
        id: '002',
        name: 'Milk - 500ml',
        barcode: '1234567890124',
        price: 65,
        stock: 18,
        category: 'beverages',
        image: 'https://readdy.ai/api/search-image?query=Fresh%20milk%20carton%20500ml%20on%20clean%20white%20background%2C%20commercial%20product%20photography&width=200&height=200&seq=milk-002&orientation=squarish'
      },
      {
        id: '003',
        name: 'Rice - 2kg',
        barcode: '1234567890125',
        price: 180,
        stock: 12,
        category: 'groceries',
        image: 'https://readdy.ai/api/search-image?query=White%20rice%20in%20clear%20packaging%20bag%202kg%20on%20clean%20background%2C%20grocery%20product%20photography&width=200&height=200&seq=rice-003&orientation=squarish'
      },
      {
        id: '004',
        name: 'Coca Cola - 300ml',
        barcode: '1234567890126',
        price: 40,
        stock: 36,
        category: 'beverages',
        image: 'https://readdy.ai/api/search-image?query=Coca%20Cola%20bottle%20300ml%20on%20clean%20white%20background%2C%20commercial%20beverage%20photography&width=200&height=200&seq=coke-004&orientation=squarish'
      },
      {
        id: '005',
        name: 'Cooking Oil - 1L',
        barcode: '1234567890127',
        price: 240,
        stock: 8,
        category: 'groceries',
        image: 'https://readdy.ai/api/search-image?query=Cooking%20oil%20bottle%201%20liter%20on%20clean%20background%2C%20grocery%20product%20photography&width=200&height=200&seq=oil-005&orientation=squarish'
      },
      {
        id: '006',
        name: 'Soap - Laundry Bar',
        barcode: '1234567890128',
        price: 25,
        stock: 45,
        category: 'household',
        image: 'https://readdy.ai/api/search-image?query=Laundry%20soap%20bar%20on%20clean%20white%20background%2C%20household%20product%20photography&width=200&height=200&seq=soap-006&orientation=squarish'
      },
      {
        id: '007',
        name: 'Sugar - 1kg',
        barcode: '1234567890129',
        price: 120,
        stock: 15,
        category: 'groceries',
        image: 'https://readdy.ai/api/search-image?query=White%20sugar%20in%20clear%20packaging%201kg%20on%20clean%20background%2C%20grocery%20product%20photography&width=200&height=200&seq=sugar-007&orientation=squarish'
      },
      {
        id: '008',
        name: 'Tea Leaves - 250g',
        barcode: '1234567890130',
        price: 85,
        stock: 22,
        category: 'beverages',
        image: 'https://readdy.ai/api/search-image?query=Tea%20leaves%20package%20250g%20on%20clean%20white%20background%2C%20beverage%20product%20photography&width=200&height=200&seq=tea-008&orientation=squarish'
      },
      {
        id: '009',
        name: 'Toothpaste - 100ml',
        barcode: '1234567890131',
        price: 95,
        stock: 28,
        category: 'personal-care',
        image: 'https://readdy.ai/api/search-image?query=Toothpaste%20tube%20100ml%20on%20clean%20white%20background%2C%20personal%20care%20product%20photography&width=200&height=200&seq=toothpaste-009&orientation=squarish'
      },
      {
        id: '010',
        name: 'Biscuits - Assorted',
        barcode: '1234567890132',
        price: 45,
        stock: 32,
        category: 'snacks',
        image: 'https://readdy.ai/api/search-image?query=Assorted%20biscuits%20package%20on%20clean%20white%20background%2C%20snack%20product%20photography&width=200&height=200&seq=biscuits-010&orientation=squarish'
      },
      {
        id: '011',
        name: 'Washing Powder - 500g',
        barcode: '1234567890133',
        price: 160,
        stock: 14,
        category: 'household',
        image: 'https://readdy.ai/api/search-image?query=Washing%20powder%20box%20500g%20on%20clean%20white%20background%2C%20household%20product%20photography&width=200&height=200&seq=powder-011&orientation=squarish'
      },
      {
        id: '012',
        name: 'Eggs - 12 pieces',
        barcode: '1234567890134',
        price: 180,
        stock: 16,
        category: 'groceries',
        image: 'https://readdy.ai/api/search-image?query=Fresh%20eggs%20in%20carton%2012%20pieces%20on%20clean%20white%20background%2C%20grocery%20product%20photography&width=200&height=200&seq=eggs-012&orientation=squarish'
      }
    ];
    setProducts(sampleProducts);
  }, []);

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.barcode.includes(searchQuery)
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Products</h2>
        <p className="text-gray-600">
          {filteredProducts.length} products {selectedCategory !== 'all' && `in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <i className="ri-search-line text-6xl text-gray-400 mb-4 block"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or category filter</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onAddToCart(product)}
            >
              <div className="relative mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                {product.stock <= 5 && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Low Stock
                  </div>
                )}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">
                {product.name}
              </h3>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-green-600">
                  KES {product.price}
                </span>
                <span className="text-xs text-gray-500">
                  Stock: {product.stock}
                </span>
              </div>
              
              <div className="text-xs text-gray-400 mb-3">
                {product.barcode}
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                className={`w-full py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  product.stock > 0
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? (
                  <>
                    <i className="ri-add-line mr-1"></i>
                    Add to Cart
                  </>
                ) : (
                  'Out of Stock'
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
