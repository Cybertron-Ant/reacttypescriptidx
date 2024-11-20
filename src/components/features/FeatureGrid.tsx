import React from 'react';
import FeatureCard from './FeatureCard';

/**
 * Feature interface defining the structure of a feature item
 */
interface Feature {
  id: number;
  title: string;
  description: string;
}

/**
 * FeatureGrid Component
 * 
 * Displays a responsive grid of feature cards
 * Automatically adjusts layout based on screen size
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Feature[]} props.features - Array of features to display
 */
interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;
