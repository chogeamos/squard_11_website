'use client';

import { useState } from 'react';

type LoginModalProps = {
  onLogin: (role: string) => void;
};

export default function LoginModal({ onLogin }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const users = {
    admin: { password: 'admin123', role: 'admin' },
    cashier: { password: 'cashier123', role: 'cashier' },
    manager: { password: 'manager123', role: 'manager' },
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = users[username.toLowerCase() as keyof typeof users];
    if (user && user.password === password) {
      onLogin(user.role);
    } else {
      setError('Invalid username or password');
    }

    setLoading(false);
  };

  const handleQuickLogin = (role: string) => {
    const userCredentials = Object.entries(users).find(([, user]) => user.role === role);
    if (userCredentials) {
      setUsername(userCredentials[0]);
      setPassword(userCredentials[1].password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-store-line text-2xl text-white"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">SuperMarket POS</h1>
          <p className="text-gray-600">Please sign in to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <i className="ri-error-warning-line mr-2"></i>
                {error}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap disabled:bg-gray-400"
          >
            {loading ? (
              <>
                <i className="ri-loader-4-line animate-spin mr-2"></i>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-8">
          <div className="text-center text-sm text-gray-600 mb-4">Quick Login (Demo)</div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleQuickLogin('admin')}
              className="bg-blue-600 text-white px-3 py-2 rounded text-xs hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Admin
            </button>
            <button
              onClick={() => handleQuickLogin('manager')}
              className="bg-purple-600 text-white px-3 py-2 rounded text-xs hover:bg-purple-700 transition-colors whitespace-nowrap"
            >
              Manager
            </button>
            <button
              onClick={() => handleQuickLogin('cashier')}
              className="bg-green-600 text-white px-3 py-2 rounded text-xs hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              Cashier
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Demo Credentials:</p>
          <p>admin/admin123 • manager/manager123 • cashier/cashier123</p>
        </div>
      </div>
    </div>
  );
}
