import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const tagClass = {
  "best-seller": "bg-yellow-100 text-yellow-700",
  popular: "bg-indigo-100 text-indigo-700",
  new: "bg-green-100 text-green-700",
};

const ProductCard = ({ product, addToCart }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleBuy = () => {
    setIsBuy(true);
    addToCart(product);
  };

  return (
    <div className="relative bg-base-100 shadow-lg rounded-xl py-10 px-6 flex flex-col gap-4 w-full border border-gray-200">
      {product.tag && (
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${tagClass[product.tagType] || "bg-gray-100"}`}
        >
          {product.tag}
        </span>
      )}

      <div className="border-2 border-gray-200 rounded-full p-4 w-16 h-16 flex items-center justify-center shrink-0">
        <span className="text-2xl">{product.icon}</span>
      </div>

      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-[#627382] text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      <p className="text-xl text-[#627382]">
        <span className="font-bold text-3xl text-black">${product.price}</span>/
        {product.period}
      </p>

      <ul className="flex flex-col gap-2 text-[#627382] grow">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <TiTick className="inline text-green-500 text-2xl mr-2 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button
          className={`btn btn-block rounded-full text-white border-none transition-all ${
            isBuy
              ? "bg-green-500 hover:bg-green-600"
              : "bg-linear-to-r from-indigo-700 to-purple-600 hover:opacity-90"
          }`}
          onClick={handleBuy}
        >
          {isBuy ? "Added to cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
