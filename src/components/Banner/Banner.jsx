import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaRegDotCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="../../assets/banner.png" />
            <div>
              <a
                href=""
                className="bg-[#E1E7FF] text-purple-600 font-semibold rounded-full py-1 px-3 inline-flex items-center gap-2"
              >
                <FaRegDotCircle className="text-lg" />
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
                <CiPlay1 className="text-2xl" />
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
