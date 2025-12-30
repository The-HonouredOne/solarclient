import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F3A2E] text-gray-300 px-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 text-center md:grid-cols-3 gap-12 pb-16">

        {/* BRAND */}
        <div className="text-left">
          <h3 className="text-white text-xl font-semibold mb-4">
            Solvix
          </h3>

          <p className="text-sm mb-4">
            What began as a simple idea grew into a mission—to harness
            nature’s most abundant resources, wind and sunlight, to
            power a brighter tomorrow.
          </p>

          <p className="text-sm">
            123 Solar Drive, Suite 200 <br />
            Los Angeles, CA 90001
          </p>

         
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Facebook">
              <div className="w-9 h-9 rounded-full bg-lime-600 text-[#1F3A2E] flex items-center justify-center hover:bg-lime-500 transition">
                <FaFacebookF size={14} />
              </div>
            </a>

            <a href="#" aria-label="Twitter">
              <div className="w-9 h-9 rounded-full bg-lime-600 text-[#1F3A2E] flex items-center justify-center hover:bg-lime-500 transition">
                <FaTwitter size={14} />
              </div>
            </a>

            <a href="#" aria-label="Instagram">
              <div className="w-9 h-9 rounded-full bg-lime-600 text-[#1F3A2E] flex items-center justify-center hover:bg-lime-500 transition">
                <FaInstagram size={14} />
              </div>
            </a>

            <a href="#" aria-label="LinkedIn">
              <div className="w-9 h-9 rounded-full bg-lime-600 text-[#1F3A2E] flex items-center justify-center hover:bg-lime-500 transition">
                <FaLinkedinIn size={14} />
              </div>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-lime-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-lime-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/schemes" className="hover:text-lime-400 transition">
                Schemes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-lime-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="mailto:info@solvix.com"
                className="hover:text-lime-400 transition"
              >
                info@solvix.com
              </a>
            </li>
            <li>
              <a
                href="tel:+11234567890"
                className="hover:text-lime-400 transition"
              >
                +1 (123) 456–7890
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2025 Solvix Solar Energy – All Rights Reserved.</p>
          <p>
            <Link to="/privacy" className="hover:text-lime-400">
              Privacy Policy
            </Link>
            &nbsp; | &nbsp;
            <Link to="/terms" className="hover:text-lime-400">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
