import React from "react";
import { use } from "react";

const tagClass = {
  "best-seller": "bg-yellow-100 text-yellow-700",
  popular: "bg-indigo-100 text-indigo-700",
  new: "bg-green-100 text-green-700",
};

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);
  console.log(products);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-base-100 shadow-lg rounded-xl py-10 px-6 flex flex-col gap-4 max-w-100 border border-gray-200"
          >
            <span
              className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${tagClass[product.tagType]}`}
            >
              {product.tag}
            </span>

            <div className="border-2 border-gray-200 rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <img src={product.icon} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-[#627382] text-sm">{product.description}</p>
            </div>

            <p className="text-xl text-[#627382]">
              <span className="font-bold text-3xl text-black">
                ${product.price}
              </span>
              /{product.period}
            </p>

            <ul className="flex flex-col gap-2 text-[#627382]">
              {product.features.map((feature, i) => (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button className="btn btn-block rounded-full bg-linear-to-r from-indigo-700 to-purple-600 text-white">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
