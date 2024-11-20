import React from 'react';

/**
 * Footer Component
 * 
 * Renders the application footer with copyright information
 * Uses Tailwind CSS for styling
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.companyName - The company name to display in the copyright notice
 */
interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center">&copy; {currentYear} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
