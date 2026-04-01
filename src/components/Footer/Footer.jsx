import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <footer className="footer sm:footer-horizontal p-10">
        <aside>
          <h1 className="text-3xl font-bold">DigiTools</h1>
          <p className="text-gray-400">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="">
              <AiFillInstagram className="text-3xl"></AiFillInstagram>
            </a>
            <a href="">
              <FaFacebookSquare className="text-3xl"></FaFacebookSquare>
            </a>
            <a href="">
              <RiTwitterXFill className="text-3xl"></RiTwitterXFill>
            </a>
          </div>
        </nav>
      </footer>
      <div className="w-11/12 mx-auto">
        <hr className="opacity-35" />
        <div className="md:flex justify-between items-center py-7">
          <p className="text-gray-400">
            &copy; 2026 Digitools. All rights reserved.
          </p>
          <div className="space-x-5 md:space-x-10 text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
