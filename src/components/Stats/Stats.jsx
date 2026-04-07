import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-indigo-700 to-purple-600 py-14 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/60 max-w-7xl mx-auto text-center">
        <div>
          <h1 className="text-4xl text-white font-bold">50K+</h1>
          <p className="text-white/70 mt-3">Active Users</p>
        </div>
        <div>
          <h1 className="text-4xl text-white font-bold">200+</h1>
          <p className="text-white/70 mt-3">Premium Tools</p>
        </div>
        <div className="sm:col-span-2 md:col-span-1">
          <h1 className="text-4xl text-white font-bold">4.9</h1>
          <p className="text-white/70 mt-3">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
