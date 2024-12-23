import { useState } from "react";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";

const CartBox = function () {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "USB Speaker Portable", price: 100.99, quantity: 1 },
    { id: 2, name: "USB Speaker Portable", price: 100.99, quantity: 1 },
    { id: 3, name: "USB Speaker Portable", price: 100.99, quantity: 1 },
  ]);

  // Simulated stock data
  const stockData = { 1: 5, 2: 3, 3: 10 };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <section className="text-sm pt-6 flex ml-20">
        <a href="/">Home</a>
        <p>&nbsp;&gt;&nbsp;</p>
        <a href="#" className="text-red-400">
          My Cart
        </a>
      </section>
      <div className="flex justify-center items-center">
        <div className="max-w-4xl w-full bg-white p-8 rounded-md">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{fontFamily: "montserrat"}}>
              My Cart
            </h1>
            <div className="flex space-x-8">
              <div className="flex items-center space-x-2">
                <span className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center">
                  1
                </span>
                <span className="text-red-400 font-medium">My Cart</span>
              </div>
              <hr className="w-20 mt-4 border-gray-300" />
              <a href="/index/checkout.html">
                <div className="flex items-center space-x-2 opacity-50">
                  <span className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
                    2
                  </span>
                  <span className="text-gray-500">Checkout</span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex mt-8 space-x-12">
            <div className="w-2/3">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="form-checkbox text-red-400 w-3 h-3 mr-2"
                />
                <span className="text-gray-600 text-md">Select All</span>
              </div>
              <div className="space-y-8">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                    availableStock={stockData[item.id]} // Pass available stock for the item
                  />
                ))}
              </div>
            </div>
            <CartSummary total={Number(total.toFixed(2))}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBox;
