
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ReportsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [salesData, setSalesData] = useState([]);
  const [summary, setSummary] = useState({
    totalSales: 0,
    totalTransactions: 0,
    averageTransaction: 0,
    topProduct: '',
    lowStockItems: 0
  });

  useEffect(() => {
    // Generate sample sales data
    const sampleSales = [
      {
        id: 'TXN001',
        time: '09:15',
        items: 5,
        total: 450,
        paymentMethod: 'cash',
        cashier: 'John Doe'
      },
      {
        id: 'TXN002', 
        time: '09:32',
        items: 3,
        total: 320,
        paymentMethod: 'mpesa',
        cashier: 'Mary Smith'
      },
      {
        id: 'TXN003',
        time: '10:08',
        items: 8,
        total: 680,
        paymentMethod: 'cash',
        cashier: 'John Doe'
      },
      {
        id: 'TXN004',
        time: '10:45',
        items: 2,
        total: 150,
        paymentMethod: 'mpesa',
        cashier: 'Mary Smith'
      },
      {
        id: 'TXN005',
        time: '11:20',
        items: 6,
        total: 520,
        paymentMethod: 'cash',
        cashier: 'John Doe'
      }
    ];

    setSalesData(sampleSales);
    
    const totalSales = sampleSales.reduce((sum, sale) => sum + sale.total, 0);
    const totalTransactions = sampleSales.length;
    
    setSummary({
      totalSales,
      totalTransactions,
      averageTransaction: totalTransactions > 0 ? totalSales / totalTransactions : 0,
      topProduct: 'Bread - White Loaf',
      lowStockItems: 3
    });
  }, [selectedDate]);

  const printReport = () => {
    window.print();
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
                <h1 className="text-2xl font-bold text-gray-900">Sales Reports</h1>
                <p className="text-gray-600">Daily sales summary and analytics</p>
              </div>
            </div>

            <button
              onClick={printReport}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap flex items-center space-x-2"
            >
              <i className="ri-printer-line"></i>
              <span>Print Report</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Date Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4">
            <label className="font-semibold text-gray-700">Select Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <span className="text-gray-600">
              {new Date(selectedDate).toLocaleDateString('en-KE', { 
                weekday: 'long',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Sales</p>
                <p className="text-2xl font-bold text-green-600">
                  KES {summary.totalSales.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-2xl text-green-600"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Transactions</p>
                <p className="text-2xl font-bold text-blue-600">
                  {summary.totalTransactions}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-shopping-cart-line text-2xl text-blue-600"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Transaction</p>
                <p className="text-2xl font-bold text-purple-600">
                  KES {Math.round(summary.averageTransaction)}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-bar-chart-line text-2xl text-purple-600"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Low Stock Alert</p>
                <p className="text-2xl font-bold text-red-600">
                  {summary.lowStockItems} items
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <i className="ri-error-warning-line text-2xl text-red-600"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Transactions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Today's Transactions</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Transaction ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Time
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Items
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Total
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Payment
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Cashier
                  </th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((sale) => (
                  <tr key={sale.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {sale.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {sale.time}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {sale.items} items
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">
                      KES {sale.total}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        sale.paymentMethod === 'cash' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {sale.paymentMethod.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {sale.cashier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {salesData.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-file-list-3-line text-6xl text-gray-400 mb-4 block"></i>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No transactions found</h3>
              <p className="text-gray-500">No sales recorded for the selected date</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
