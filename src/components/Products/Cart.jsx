import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { toast } from "react-toastify";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0,
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4 bg-[#F9FAFC] py-20 px-6 mb-4 rounded-3xl border-2 border-dashed border-gray-200">
          <div className="bg-white p-6 rounded-full shadow-sm">
            <IoTrashBin className="text-6xl text-gray-300" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </p>
            <p className="text-gray-500 mt-1">
              Looks like you haven't added anything yet.
            </p>
          </div>
        </div>
      ) : (
        <ul className="space-y-3">
          {cart.map((item) => (
            <li key={item.id}>
              <div className="bg-[#F9FAFC] p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="border-2 border-gray-200 bg-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    removeFromCart(item);
                    toast.error("Product removed ❌");
                  }}
                  className="btn btn-error btn-ghost rounded-full"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <>
          <div className="flex justify-between text-xl md:text-2xl font-bold mt-6 px-2">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button
            onClick={() => {
              clearCart();
              toast.success("Order placed successfully 🎉");
            }}
            className="btn w-full rounded-full bg-linear-to-r from-indigo-700 to-purple-600 text-white mt-4 border-none hover:opacity-90"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
