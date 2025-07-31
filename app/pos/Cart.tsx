
'use client';

export default function Cart({ items, onUpdateItem, onClearCart, onCheckout }) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.16; // 16% VAT in Kenya
  const total = subtotal + tax;

  return (
    <div className="h-full flex flex-col">
      <div className="bg-green-600 text-white p-4">
        <h2 className="text-xl font-bold">Current Sale</h2>
        <p className="text-green-100">{items.length} items in cart</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {items.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <i className="ri-shopping-cart-line text-6xl mb-4 block"></i>
            <p>Cart is empty</p>
            <p className="text-sm">Add products to start a sale</p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-sm text-gray-900 flex-1">
                    {item.name}
                  </h4>
                  <button
                    onClick={() => onUpdateItem(item.id, 0)}
                    className="text-red-600 hover:text-red-800 ml-2"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onUpdateItem(item.id, Math.max(1, item.quantity - 1))}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      <i className="ri-subtract-line text-sm"></i>
                    </button>
                    
                    <span className="font-semibold text-lg min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => onUpdateItem(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      <i className="ri-add-line text-sm"></i>
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      KES {item.price} × {item.quantity}
                    </p>
                    <p className="font-bold text-green-600">
                      KES {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="border-t bg-white p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>KES {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>VAT (16%):</span>
              <span>KES {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t">
              <span>Total:</span>
              <span>KES {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={onCheckout}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg whitespace-nowrap"
            >
              <i className="ri-money-dollar-circle-line mr-2"></i>
              Checkout
            </button>
            
            <button
              onClick={onClearCart}
              className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              <i className="ri-delete-bin-line mr-2"></i>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
