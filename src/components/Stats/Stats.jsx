import React from "react";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 bg-linear-to-r from-indigo-700 to-purple-600 text-center py-14 divide-x divide-white/60">
      <div>
        <h1 className="text-4xl text-white font-bold">50K+</h1>
        <p className="text-white/70 mt-3">Active Users</p>
      </div>
      <div>
        <h1 className="text-4xl text-white font-bold">200+</h1>
        <p className="text-white/70 mt-3">Premium Tools</p>
      </div>
      <div>
        <h1 className="text-4xl text-white font-bold">4.9</h1>
        <p className="text-white/70 mt-3">Rating</p>
      </div>
    </div>
  );
};

export default Stats;
