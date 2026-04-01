import React from "react";

const Steps = () => {
  return (
    <div className="bg-[#F9FAFC] py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Get Started in 3 Steps</h1>
        <p className="text-[#627382] mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto  gap-8 mt-12">
        <div className="relative bg-white rounded-2xl shadow flex flex-col items-center gap-4 py-25 px-10">
          <span className=" absolute top-4 right-4 w-10 h-10 flex justify-center items-center rounded-full bg-linear-to-r from-indigo-700 to-purple-600  text-white">
            01
          </span>
          <img
            className="p-4 bg-purple-100 rounded-full"
            src="../../assets/user.png"
            alt=""
          />
          <h3 className="font-bold text-2xl">Create Account</h3>
          <p className="text-[#627382] text-center">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="relative bg-white rounded-2xl shadow flex flex-col items-center gap-4 py-25 px-10">
          <span className=" absolute top-4 right-4 w-10 h-10 flex justify-center items-center rounded-full bg-linear-to-r from-indigo-700 to-purple-600  text-white">
            02
          </span>
          <img
            className="p-4 bg-purple-100 rounded-full"
            src="../../assets/package.png"
            alt=""
          />
          <h3 className="font-bold text-2xl">Choose Products</h3>
          <p className="text-[#627382] text-center">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="relative bg-white rounded-2xl shadow flex flex-col items-center gap-4 py-25 px-10">
          <span className=" absolute top-4 right-4 w-10 h-10 flex justify-center items-center rounded-full bg-linear-to-r from-indigo-700 to-purple-600  text-white">
            03
          </span>
          <img
            className="p-4 bg-purple-100 rounded-full"
            src="../../assets/rocket.png"
            alt=""
          />
          <h3 className="font-bold text-2xl">Start Creating</h3>
          <p className="text-[#627382] text-center">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
