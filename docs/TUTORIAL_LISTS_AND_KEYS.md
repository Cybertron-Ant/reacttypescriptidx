# Tutorial: Building a User Directory with React Lists and Keys

## Introduction
In this tutorial, we'll build a responsive user directory using React, TypeScript, and Tailwind CSS. You'll learn how to properly implement lists and keys, handle different screen sizes, and manage component types.

## Prerequisites
- Basic knowledge of React and TypeScript
- Node.js installed on your machine
- Code editor (VS Code recommended)

## Step 1: Project Setup

First, ensure you have all dependencies installed:
```bash
npm install
```

## Step 2: Creating the User Interface

### 2.1 Define Types
Create the User interface in `UserList.tsx`:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface UserListProps {
  users: User[];
}
```

### 2.2 Create Sample Data
In `UserData.ts`:

```typescript
export const sampleUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin'
  },
  // ... more users
];
```

## Step 3: Building the UserList Component

### 3.1 Basic Component Structure
```typescript
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        User Directory
      </h2>
      {/* Grid container will go here */}
    </div>
  );
};
```

### 3.2 Adding the Grid Layout
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {users.map((user) => (
    // User card will go here
  ))}
</div>
```

### 3.3 Implementing User Cards
```typescript
{users.map((user) => (
  <div
    key={user.id}
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
  >
    {/* Avatar */}
    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
      <span className="text-primary-600 font-semibold text-lg">
        {user.name.charAt(0)}
      </span>
    </div>
    
    {/* User details */}
    <h3 className="text-lg font-semibold text-gray-800">
      {user.name}
    </h3>
    <p className="text-gray-600 text-sm mt-1">
      {user.email}
    </p>
    
    {/* Role badge */}
    <span className={`
      inline-block px-2 py-1 mt-2 text-xs font-semibold rounded-full
      ${user.role === 'Admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}
    `}>
      {user.role}
    </span>
  </div>
))}
```

## Step 4: Handling Edge Cases

### 4.1 Empty State
Add a condition to handle when no users are present:

```typescript
{users.length === 0 && (
  <div className="text-center py-8 text-gray-500">
    No users found in the directory.
  </div>
)}
```

### 4.2 Loading State (Optional)
```typescript
interface UserListProps {
  users: User[];
  loading?: boolean;
}

// In the component:
if (loading) {
  return <div>Loading users...</div>;
}
```

## Step 5: Integration with App Component

Update `App.tsx`:
```typescript
import React from 'react';
import UserList from './components/lists/UserList';
import { sampleUsers } from './components/lists/UserData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-primary-600">React Lists and Keys Demo</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <UserList users={sampleUsers} />
      </main>
    </div>
  );
}
```

## Step 6: Testing Your Implementation

1. Start the development server:
```bash
npm start
```

2. Open your browser to `http://localhost:3000`
3. Verify that:
   - Users are displayed in a responsive grid
   - Each user has an avatar, name, email, and role badge
   - Role badges have different colors for Admin/User
   - Hover effects work on user cards
   - Layout responds to different screen sizes

## Common Pitfalls to Avoid

1. **Key Usage**
   - Don't use array index as keys
   - Ensure keys are unique and stable
   - Place keys on the outermost element in the map

2. **Performance**
   - Don't create new functions inside the map
   - Use proper memoization for expensive operations
   - Avoid unnecessary re-renders

3. **TypeScript**
   - Always define proper interfaces
   - Use strict type checking
   - Avoid using 'any' type

## Next Steps

1. Add sorting functionality
2. Implement search/filter features
3. Add pagination for large lists
4. Implement user details view
5. Add animations for list updates

## Conclusion
You've now built a fully functional user directory with proper implementation of React lists and keys. The component is type-safe, responsive, and follows React best practices for key usage and performance.
