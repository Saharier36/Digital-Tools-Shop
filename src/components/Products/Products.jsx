import React from "react";
import { use } from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";
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
    <div className="mx-auto py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-[#627382] mt-2">
          Choose from our curated collection of premium digital products
          designed
          <br />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="tabs tabs-box justify-center mb-8 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full ${
            activeTab === "products"
              ? "bg-linear-to-r from-indigo-700 to-purple-600 font-semibold text-white"
              : ""
          }`}
          aria-label="Products"
          onClick={() => setActiveTab("products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full ${
            activeTab === "cart"
              ? "bg-linear-to-r from-indigo-700 to-purple-600 font-semibold text-white"
              : ""
          }`}
          aria-label={`Cart (${cart.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            ></ProductCard>
          ))}
        </div>
      )}
      {activeTab === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        ></Cart>
      )}
    </div>
  );
};

export default Products;
