import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-blue-800 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left: Tool Description */}
        <div>
          <h4 className="font-bold text-lg mb-2">SDN AutoConfig Tool</h4>
          <p>
            Automates the configuration and assessment of routing tables in a single administrative domain using FastAPI and React.
          </p>
        </div>

        {/* Middle: Links */}
        <div>
          <h4 className="font-bold text-lg mb-2">Project Info</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link to="/howItWorks" className="hover:underline">How it Works</Link>
            </li>
            <li>
              <a href="#" className="hover:underline">API Docs</a>
            </li>
            <li>
              <a href="https://github.com/biswarup-naha/PROJ-IT-791" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contributors */}
        <div>
          <h4 className="font-bold text-lg mb-2">Contributors</h4>
          <ul className="text-sm space-y-1">
            <li>Biswarup Naha</li>
            <li>Dona Murmu</li>
            <li>Sourav Karmakar</li>
            <li>Avanish</li>
            <li>Hemdatta Das</li>
            <li className="mt-2 font-semibold text-blue-200">Guided by: Mrs. Nabanita Das</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs mt-6 text-blue-200">
        © 2025 Automated SDN Tool – B.Tech Final Year Project, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
