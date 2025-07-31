'use client';

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
};

type CartProps = {
  items: CartItem[];
  onUpdateItem: (item: CartItem) => void;
  onClearCart: () => void;
  onCheckout: () => void;
};

export default function Cart({ items, onUpdateItem, onClearCart, onCheckout }: CartProps) {
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
                </div>
                {/* continue your logic here... */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
