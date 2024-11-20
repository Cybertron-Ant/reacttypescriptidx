# Conditional Rendering Tutorial

Welcome to this hands-on tutorial about implementing conditional rendering in React with TypeScript! We'll build a feature-rich application step by step, learning various conditional rendering patterns along the way.

## Table of Contents
1. [Setup](#setup)
2. [Basic Conditional Rendering](#basic-conditional-rendering)
3. [Advanced Patterns](#advanced-patterns)
4. [Feature Flags Implementation](#feature-flags-implementation)
5. [Final Integration](#final-integration)

## Setup

### 1. Create the Project Structure
```bash
mkdir src/components/ConditionalRendering
cd src/components/ConditionalRendering
```

### 2. Install Dependencies
Make sure you have these dependencies in your package.json:
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^4.9.0"
  }
}
```

## Basic Conditional Rendering

### Step 1: Create UserProfile Component
Create a new file `UserProfile.tsx`:

```tsx
import React from 'react';

interface UserProfileProps {
  username: string;
  role: 'admin' | 'user';
  isActive: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, role, isActive }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Basic conditional rendering using && */}
      {isActive && (
        <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
          Active
        </span>
      )}

      <h2 className="text-2xl font-bold">{username}</h2>
      
      {/* Try it: Add role-based content here */}
    </div>
  );
};

export default UserProfile;
```

### Step 2: Add Ternary Operator
Add this inside your UserProfile component:

```tsx
{/* Ternary operator example */}
<div className="mt-4">
  <span className="font-medium">Status: </span>
  {isActive ? (
    <span className="text-green-600">Online</span>
  ) : (
    <span className="text-gray-600">Offline</span>
  )}
</div>
```

## Advanced Patterns

### Step 1: Create FeatureToggle Component
Create a new file `FeatureToggle.tsx`:

```tsx
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

const FeatureToggle: React.FC<FeatureToggleProps> = ({ features, onToggle }) => {
  // Try it: Implement the early return pattern here
  return (
    <div className="space-y-4">
      {/* Add your feature list rendering here */}
    </div>
  );
};

export default FeatureToggle;
```

### Step 2: Add Early Return Pattern
Add this at the beginning of your FeatureToggle component:

```tsx
if (features.length === 0) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg text-center">
      <p className="text-gray-600">No features available</p>
    </div>
  );
}
```

### Step 3: Implement Feature List
Add this inside your FeatureToggle component's return statement:

```tsx
{features.map((feature) => (
  <div
    key={feature.id}
    className={`p-4 rounded-lg ${
      feature.enabled
        ? 'bg-green-50 border border-green-200'
        : 'bg-gray-50 border border-gray-200'
    }`}
  >
    {/* Try it: Add feature details here */}
  </div>
))}
```

## Feature Flags Implementation

### Step 1: Set Up Feature State
In your App.tsx:

```tsx
const [features, setFeatures] = useState([
  {
    id: '1',
    name: 'Dark Mode',
    enabled: true,
    description: 'Enable dark mode across the application'
  },
  // Add more features here
]);
```

### Step 2: Implement Toggle Handler
Add this function to App.tsx:

```tsx
const handleFeatureToggle = (featureId: string) => {
  setFeatures(features.map(feature =>
    feature.id === featureId
      ? { ...feature, enabled: !feature.enabled }
      : feature
  ));
};
```

## Final Integration

### Step 1: Update App.tsx
Replace your App.tsx content:

```tsx
import React, { useState } from 'react';
import './styles/main.css';
import UserProfile from './components/ConditionalRendering/UserProfile';
import FeatureToggle from './components/ConditionalRendering/FeatureToggle';

function App() {
  // Add your state and handlers here
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Try it: Add the header and main content here */}
    </div>
  );
}

export default App;
```

### Step 2: Add Components to App
Add this inside your App's return statement:

```tsx
<main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <section>
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <UserProfile
        username={user.username}
        role={user.role}
        isActive={user.isActive}
      />
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-4">Feature Toggles</h2>
      <FeatureToggle
        features={features}
        onToggle={handleFeatureToggle}
      />
    </section>
  </div>
</main>
```

## Practice Exercises

1. **Basic Conditional Rendering**
   - Add a "VIP" badge that only shows for admin users
   - Implement a maintenance mode banner using the && operator

2. **Ternary Operators**
   - Add different color schemes for active/inactive states
   - Create a welcome message that changes based on user role

3. **Advanced Patterns**
   - Implement a loading state using early return
   - Create a feature group system with nested conditions

## Next Steps

1. Add error boundaries to your components
2. Implement loading states
3. Add animations for state changes
4. Write unit tests for conditional logic

## Troubleshooting Tips

1. **Component Not Rendering?**
   - Check your boolean conditions
   - Verify prop types
   - Console.log your state values

2. **TypeScript Errors?**
   - Ensure proper interface definitions
   - Check for null/undefined handling
   - Verify union types

3. **Performance Issues?**
   - Use React.memo for expensive components
   - Implement useMemo for complex conditions
   - Check for unnecessary re-renders

## Additional Resources

- [React Documentation](https://reactjs.org/docs/conditional-rendering.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
