import React from "react";

const Pricing = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-[#627382] mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 mt-12">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body space-y-6 bg-[#F9FAFC] rounded-xl">
            <div className="">
              <h2 className="text-2xl font-bold">Starter</h2>
              <p className="text-[#627382]">Perfect for getting started</p>
            </div>
            <p className="text-xl text-[#627382]">
              <span className="font-bold text-3xl text-black">$0</span>/month
            </p>
            <ul className="flex flex-col gap-2 text-[#627382]">
              <li>
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
                <span>Access to 10 free tools</span>
              </li>
              <li>
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
                <span>Basic templates</span>
              </li>
              <li>
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
                <span>Community support</span>
              </li>
              <li>
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
                <span>1 project per month</span>
              </li>
            </ul>
            <div className="mt-23">
              <button className="btn bg-linear-to-r from-indigo-700 to-purple-600  text-white rounded-full btn-block">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="relative card-body space-y-6 bg-linear-to-r from-indigo-700 to-purple-600  text-white rounded-xl">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#BB4D00] bg-[#FEF3C6] rounded-full py-1 px-3">
              Most Popular
            </span>
            <div className="">
              <h2 className="text-2xl font-bold">Pro</h2>
              <p className="">Best for professionals</p>
            </div>
            <p className="text-xl">
              <span className="font-bold text-3xl">$29</span>/month
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 me-2 inline-block text-white"
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
                <span>Access to all premium tools</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 me-2 inline-block text-white"
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
                <span>Unlimited templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 me-2 inline-block text-white"
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
                <span>Priority support</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 me-2 inline-block text-white"
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
                <span>Unlimited projects</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 me-2 inline-block text-white"
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
                <span>Cloud sync</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 me-2 inline-block text-white"
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
                <span>Advanced analytics</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn bg-white text-purple-600 rounded-full btn-block">
                Start Pro Trial
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body space-y-6 bg-[#F9FAFC] rounded-xl">
            <div className="">
              <h2 className="text-2xl font-bold">Enterprise</h2>
              <p className="text-[#627382]">For teams and businesses</p>
            </div>
            <p className="text-xl text-[#627382]">
              <span className="font-bold text-3xl text-black">$99</span>/month
            </p>
            <ul className="flex flex-col gap-2 text-[#627382]">
              <li>
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
                <span>Everything in Pro</span>
              </li>
              <li>
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
                <span>Team collaboration</span>
              </li>
              <li>
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
                <span>Custom integrations</span>
              </li>
              <li>
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
                <span>Dedicated support</span>
              </li>
              <li>
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
                <span>SLA guarantee</span>
              </li>
              <li>
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
                <span>Custom branding</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn bg-linear-to-r from-indigo-700 to-purple-600  text-white rounded-full btn-block">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
