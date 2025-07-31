
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InventoryPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [showAddProduct, setShowAddProduct] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'groceries', name: 'Groceries' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'household', name: 'Household' },
    { id: 'personal-care', name: 'Personal Care' },
    { id: 'snacks', name: 'Snacks' }
  ];

  useEffect(() => {
    // Sample inventory data
    const sampleProducts = [
      {
        id: '001',
        name: 'Bread - White Loaf',
        barcode: '1234567890123',
        price: 55,
        stock: 24,
        minStock: 10,
        category: 'groceries',
        supplier: 'Local Bakery',
        lastRestocked: '2024-01-15'
      },
      {
        id: '002',
        name: 'Milk - 500ml',
        barcode: '1234567890124',
        price: 65,
        stock: 18,
        minStock: 20,
        category: 'beverages',
        supplier: 'Dairy Farm Ltd',
        lastRestocked: '2024-01-14'
      },
      {
        id: '003',
        name: 'Rice - 2kg',
        barcode: '1234567890125',
        price: 180,
        stock: 12,
        minStock: 15,
        category: 'groceries',
        supplier: 'Grain Suppliers',
        lastRestocked: '2024-01-12'
      },
      {
        id: '004',
        name: 'Coca Cola - 300ml',
        barcode: '1234567890126',
        price: 40,
        stock: 36,
        minStock: 25,
        category: 'beverages',
        supplier: 'Coca Cola Kenya',
        lastRestocked: '2024-01-15'
      },
      {
        id: '005',
        name: 'Cooking Oil - 1L',
        barcode: '1234567890127',
        price: 240,
        stock: 3,
        minStock: 10,
        category: 'groceries',
        supplier: 'Oil Processors',
        lastRestocked: '2024-01-10'
      }
    ];
    setProducts(sampleProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (stockFilter === 'low') {
      filtered = filtered.filter(product => product.stock <= product.minStock);
    } else if (stockFilter === 'out') {
      filtered = filtered.filter(product => product.stock === 0);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.barcode.includes(searchQuery) ||
        product.id.includes(searchQuery.toUpperCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, stockFilter]);

  const updateStock = (productId, newStock) => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, stock: newStock } : product
    ));
  };

  const getStockStatus = (product) => {
    if (product.stock === 0) return { status: 'Out of Stock', color: 'red' };
    if (product.stock <= product.minStock) return { status: 'Low Stock', color: 'orange' };
    return { status: 'In Stock', color: 'green' };
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/pos" 
                className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <i className="ri-arrow-left-line text-white"></i>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
                <p className="text-gray-600">Manage products and stock levels</p>
              </div>
            </div>

            <button
              onClick={() => setShowAddProduct(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap flex items-center space-x-2"
            >
              <i className="ri-add-line"></i>
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Products
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name, barcode, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                />
                <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock Status
              </label>
              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
                className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
              >
                <option value="all">All Stock Levels</option>
                <option value="low">Low Stock Only</option>
                <option value="out">Out of Stock</option>
              </select>
            </div>

            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                <p>Total Products: <strong>{filteredProducts.length}</strong></p>
                <p>Low Stock: <strong>{products.filter(p => p.stock <= p.minStock && p.stock > 0).length}</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Barcode/ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Stock
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Supplier
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => {
                  const stockStatus = getStockStatus(product);
                  return (
                    <tr key={product.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-600 capitalize">{product.category}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        <div>
                          <p>{product.barcode}</p>
                          <p className="text-xs">ID: {product.id}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-green-600">
                        KES {product.price}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateStock(product.id, Math.max(0, product.stock - 1))}
                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            <i className="ri-subtract-line text-xs"></i>
                          </button>
                          <span className="font-semibold text-lg min-w-[3rem] text-center">
                            {product.stock}
                          </span>
                          <button
                            onClick={() => updateStock(product.id, product.stock + 1)}
                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            <i className="ri-add-line text-xs"></i>
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Min: {product.minStock}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          stockStatus.color === 'green' ? 'bg-green-100 text-green-800' :
                          stockStatus.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {stockStatus.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        <div>
                          <p>{product.supplier}</p>
                          <p className="text-xs">Last: {product.lastRestocked}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <i className="ri-edit-line"></i>
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-archive-line text-6xl text-gray-400 mb-4 block"></i>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
