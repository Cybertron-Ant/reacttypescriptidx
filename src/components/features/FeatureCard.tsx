import React from 'react';

/**
 * FeatureCard Component
 * 
 * Displays a single feature card with title and description
 * Includes hover effects and responsive design
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The feature card title
 * @param {string} props.description - The feature description
 */
interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
