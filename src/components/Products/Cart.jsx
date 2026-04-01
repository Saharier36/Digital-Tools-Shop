import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { toast } from "react-toastify";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-2 bg-[#F9FAFC] p-20 mb-2 rounded-xl">
          <IoTrashBin className="text-6xl text-gray-500" />
          <p className="text-xl font-semibold">No items in cart</p>
        </div>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <div key={index} className="bg-[#F9FAFC] p-4 mb-2 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.icon}
                    className="border-2 border-gray-200 rounded-full p-4 w-16 h-16 flex items-center justify-center"
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      removeFromCart(item);
                      toast.error("Product removed ❌");
                    }}
                    className="btn btn-error btn-ghost"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}

      <div className=" flex justify-between text-2xl font-bold mt-4">
        <p>Total:</p>
        <p>
          $
          {cart.reduce(
            (total, item) => total + item.price * (item.quantity || 1),
            0,
          )}
        </p>
      </div>
      <button
        onClick={()=> {
            clearCart();
            toast.success("Order placed successfully 🎉");
        }}
        className="btn btn-block rounded-full bg-linear-to-r from-indigo-700 to-purple-600 text-white mt-4"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
