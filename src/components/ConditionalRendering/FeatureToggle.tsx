import React from 'react';

interface Feature {
  id: string;
  name: string;
  enabled: boolean;
  description: string;
}

interface FeatureToggleProps {
  features: Feature[];
  onToggle: (featureId: string) => void;
}

/**
 * FeatureToggle Component
 * 
 * Demonstrates conditional rendering with feature flags and dynamic content:
 * 1. List rendering with conditions
 * 2. Dynamic className assignment
 * 3. Conditional UI states
 * 
 * @param {FeatureToggleProps} props - Component props containing features data and toggle handler
 * @returns {JSX.Element} Rendered component with feature toggles
 */
const FeatureToggle: React.FC<FeatureToggleProps> = ({ features, onToggle }) => {
  // Early return pattern for empty features
  if (features.length === 0) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-600">No features available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Conditional list rendering */}
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`p-4 rounded-lg transition-colors ${
            feature.enabled
              ? 'bg-green-50 border border-green-200'
              : 'bg-gray-50 border border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">{feature.name}</h3>
              {/* Conditional rendering with && operator */}
              {feature.description && (
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              )}
            </div>

            {/* Toggle switch with conditional styling */}
            <button
              onClick={() => onToggle(feature.id)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                feature.enabled ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  feature.enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Conditional content based on feature state */}
          {feature.enabled && (
            <div className="mt-3 pt-3 border-t border-green-200">
              <p className="text-sm text-green-700">
                This feature is currently active and available to users
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Summary section with conditional count */}
      <div className="mt-4 text-sm text-gray-600">
        {features.filter((f) => f.enabled).length === features.length ? (
          <p>All features are enabled</p>
        ) : (
          <p>
            {features.filter((f) => f.enabled).length} of {features.length} features
            enabled
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureToggle;
