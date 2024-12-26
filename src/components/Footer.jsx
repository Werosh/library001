import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-4 text-center text-white bg-gray-800">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} KiraSofty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;