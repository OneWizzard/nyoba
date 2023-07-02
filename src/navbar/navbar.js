'use client';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/name" className="text-white ml-4">Name</Link>
            <Link to="/biodata1" className="text-white ml-4">About Pannur</Link>
            <Link to="/biodata2" className="text-white ml-4">About Iwan</Link>
            <Link to="/contact" className="text-white ml-4">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


