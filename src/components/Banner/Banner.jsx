import React from 'react';

const Banner = () => {
    return (
      <div>
        <div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="/src/assets/banner.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <a
                  href=""
                  className="bg-[#E1E7FF] text-purple-600 font-semibold rounded-full py-1 px-3 inline-flex items-center gap-2"
                >
                  <img src="/src/assets/Group 5 (1).png" alt="" />
                  <span>New: AI-Powered Tools Available</span>
                </a>
                <h1 className="text-5xl font-bold mt-4">
                  Supercharge Your
                  <br />
                  Digital Workflow
                </h1>
                <p className="text-[#627382] py-6">
                  Access premium AI tools, design assets, templates, and
                  productivity <br /> software—all in one place. Start creating
                  faster today. <br /> Explore Products
                </p>
                <button className="btn rounded-full bg-linear-to-r from-indigo-700 to-purple-600 text-white mr-3.5">
                  Explore Products
                </button>
                <button className="btn rounded-full btn-outline btn-primary">
                    <img src="/src/assets/Play.png" alt="" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;