'use client';

import { useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type PaymentModalProps = {
  cart: CartItem[];
  onClose: () => void;
  onPaymentComplete: () => void;
};

export default function PaymentModal({
  cart,
  onClose,
  onPaymentComplete
}: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'mpesa'>('cash');
  const [cashReceived, setCashReceived] = useState('');
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [processing, setProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  const change =
    paymentMethod === 'cash' ? Math.max(0, parseFloat(cashReceived || '0') - total) : 0;

  const handlePayment = async () => {
    setProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProcessing(false);
    setPaymentComplete(true);

    setTimeout(() => {
      printReceipt();
      onPaymentComplete();
      onClose();
    }, 1500);
  };

  const printReceipt = () => {
    const receiptData = {
      items: cart,
      subtotal,
      tax,
      total,
      paymentMethod,
      change: paymentMethod === 'cash' ? change : 0,
      timestamp: new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })
    };
    console.log('Printing receipt:', receiptData);
  };

  if (paymentComplete) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-check-line text-2xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
          <p className="text-gray-600 mb-4">Receipt is printing...</p>
          <div className="animate-spin w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Payment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Order Summary */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>KES {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal:</span>
                    <span>KES {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>VAT (16%):</span>
                    <span>KES {tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>KES {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>

              <div className="space-y-3 mb-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'cash')}
                    className="w-4 h-4 text-green-600"
                  />
                  <div className="flex items-center space-x-2">
                    <i className="ri-money-dollar-circle-line text-xl text-green-600"></i>
                    <span className="font-medium">Cash</span>
                  </div>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="mpesa"
                    checked={paymentMethod === 'mpesa'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'mpesa')}
                    className="w-4 h-4 text-green-600"
                  />
                  <div className="flex items-center space-x-2">
                    <i className="ri-smartphone-line text-xl text-green-600"></i>
                    <span className="font-medium">M-PESA</span>
                  </div>
                </label>
              </div>

              {paymentMethod === 'cash' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cash Received
                    </label>
                    <input
                      type="number"
                      value={cashReceived}
                      onChange={(e) => setCashReceived(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    />
                  </div>

                  {cashReceived && parseFloat(cashReceived) >= total && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-green-800">Change:</span>
                        <span className="text-xl font-bold text-green-600">
                          KES {change.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {paymentMethod === 'mpesa' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Phone Number
                  </label>
                  <input
                    type="tel"
                    value={mpesaPhone}
                    onChange={(e) => setMpesaPhone(e.target.value)}
                    placeholder="254XXXXXXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Customer will receive M-PESA prompt on their phone
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold whitespace-nowrap"
            >
              Cancel
            </button>

            <button
              onClick={handlePayment}
              disabled={
                processing ||
                (paymentMethod === 'cash' && (!cashReceived || parseFloat(cashReceived) < total)) ||
                (paymentMethod === 'mpesa' && !mpesaPhone)
              }
              className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {processing ? (
                <>
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Processing...
                </>
              ) : (
                <>
                  <i className="ri-check-line mr-2"></i>
                  Complete Payment
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
