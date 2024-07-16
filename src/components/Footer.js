import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Footer Title</h2>
            <p className="text-sm">Some description about the footer.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Link 1</a>
            <a href="#" className="text-gray-400 hover:text-white">Link 2</a>
            <a href="#" className="text-gray-400 hover:text-white">Link 3</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col px-2 md:px-0 md:justify-between md:flex-row">
          <a href="#" className="mb-2 md:mb-0 text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="mb-2 md:mb-0 text-gray-400 hover:text-white">Terms of Service</a>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <p className="flex flex-row items-center text-gray-400 hover:text-white">
            © 2023 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;