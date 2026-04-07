import React, { use, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = ({
  productsPromise,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
}) => {
  const products = use(productsPromise);
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-[#627382] mt-3 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1.5 rounded-full inline-flex items-center shadow-inner">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === "products"
                ? "bg-linear-to-r from-indigo-700 to-purple-600 text-white shadow-md"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === "cart"
                ? "bg-linear-to-r from-indigo-700 to-purple-600 text-white shadow-md"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      <div className="w-full">
        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="w-full">
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
