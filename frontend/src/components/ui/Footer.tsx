import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import './Fotter.css'; 

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-gray-400">
            At Ayurvedic Advisor, we blend the ancient wisdom of Ayurveda with cutting-edge technology to provide personalized health guidance, encompassing diet, exercise, mental well-being, and more.
          </p>
          <p className="text-gray-400 italic">"Embracing tradition, transforming wellness."</p>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-white" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <ul>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/ayurveda" className="text-gray-400 hover:text-white">Ayurveda</Link>
            </li>
            <li>
              <Link to="/yoga" className="text-gray-400 hover:text-white">Yoga</Link>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-400">Email: info@ayurvedicadvisor.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};
