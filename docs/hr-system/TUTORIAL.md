# HR Management System Tutorial

## Introduction

This tutorial will guide you through building key features of the HR Management System, demonstrating React Hooks best practices along the way.

## Prerequisites

- Basic knowledge of React and TypeScript
- Node.js and npm installed
- Code editor (VS Code recommended)

## Step 1: Setting Up the Project

1. Create a new React TypeScript project:
   ```bash
   npm create vite@latest my-hr-system -- --template react-ts
   cd my-hr-system
   npm install
   ```

2. Install dependencies:
   ```bash
   npm install tailwindcss postcss autoprefixer
   ```

## Step 2: Creating Type Definitions

Create `src/types/hr.types.ts`:

```typescript
export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  departmentId: string;
  salary: number;
  hireDate: Date;
  status: 'ACTIVE' | 'ON_LEAVE' | 'TERMINATED';
}

export interface EmployeeFilters {
  department?: string;
  status?: Employee['status'];
  searchTerm?: string;
}
```

## Step 3: Implementing Custom Hooks

Create `src/hooks/useEmployees.ts`:

```typescript
import { useState, useCallback, useMemo } from 'react';
import { Employee, EmployeeFilters } from '../types/hr.types';

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add memoized statistics
  const statistics = useMemo(() => ({
    totalEmployees: employees.length,
    activeEmployees: employees.filter(emp => emp.status === 'ACTIVE').length,
    averageSalary: employees.reduce((acc, emp) => acc + emp.salary, 0) / employees.length
  }), [employees]);

  // Implement CRUD operations
  const addEmployee = useCallback(async (employee: Omit<Employee, 'id'>) => {
    try {
      setLoading(true);
      const newEmployee = { ...employee, id: Date.now().toString() };
      setEmployees(prev => [...prev, newEmployee as Employee]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add employee');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    employees,
    loading,
    error,
    statistics,
    addEmployee
  };
};
```

## Step 4: Setting Up Context

Create `src/context/HRContext.tsx`:

```typescript
import React, { createContext, useContext } from 'react';
import { HRContextType } from '../types/hr.types';
import { useEmployees } from '../hooks/useEmployees';

const HRContext = createContext<HRContextType | null>(null);

export const useHR = () => {
  const context = useContext(HRContext);
  if (!context) {
    throw new Error('useHR must be used within an HRProvider');
  }
  return context;
};

export const HRProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const hrState = useEmployees();

  return (
    <HRContext.Provider value={hrState}>
      {children}
    </HRContext.Provider>
  );
};
```

## Step 5: Creating the Employee List Component

Create `src/features/employees/EmployeeList.tsx`:

```typescript
import React, { useState } from 'react';
import { useHR } from '../../context/HRContext';
import { EmployeeFilters } from '../../types/hr.types';

const EmployeeList: React.FC = () => {
  const [filters, setFilters] = useState<EmployeeFilters>({});
  const { employees, loading, error, statistics } = useHR();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3>Total Employees</h3>
          <p className="text-2xl">{statistics.totalEmployees}</p>
        </div>
        {/* Add more statistics cards */}
      </div>
      
      {/* Add employee list */}
      <div className="grid gap-4">
        {employees.map(employee => (
          <div key={employee.id} className="p-4 bg-white rounded-lg shadow">
            <h3>{employee.firstName} {employee.lastName}</h3>
            <p>{employee.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
```

## Step 6: Updating App Component

Update `src/App.tsx`:

```typescript
import React from 'react';
import { HRProvider } from './context/HRContext';
import EmployeeList from './features/employees/EmployeeList';

function App() {
  return (
    <HRProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <h1 className="text-2xl font-bold p-4">HR Management System</h1>
        </header>
        <main className="container mx-auto p-4">
          <EmployeeList />
        </main>
      </div>
    </HRProvider>
  );
}

export default App;
```

## Step 7: Adding Features

### Adding Search Functionality

```typescript
const [searchTerm, setSearchTerm] = useState('');

// Add to JSX
<input
  type="text"
  placeholder="Search employees..."
  className="w-full p-2 border rounded"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

### Adding Status Filters

```typescript
const [status, setStatus] = useState<Employee['status']>();

// Add to JSX
<div className="flex gap-2">
  <button
    onClick={() => setStatus(undefined)}
    className={`px-4 py-2 rounded ${!status ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
  >
    All
  </button>
  <button
    onClick={() => setStatus('ACTIVE')}
    className={`px-4 py-2 rounded ${status === 'ACTIVE' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
  >
    Active
  </button>
</div>
```

## Testing Your Implementation

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

3. Test the following features:
   - View employee list
   - Search functionality
   - Status filters
   - Statistics dashboard

## Next Steps

1. Add more features:
   - Employee creation form
   - Department management
   - Salary reports

2. Implement API integration:
   - Replace mock data with real API calls
   - Add error handling
   - Implement loading states

3. Add tests:
   - Unit tests for hooks
   - Component tests
   - Integration tests

## Common Issues and Solutions

1. **Context Not Found Error**
   - Ensure components are wrapped in HRProvider
   - Check import paths

2. **Type Errors**
   - Verify interface implementations
   - Check for null checks in TypeScript

3. **Performance Issues**
   - Review dependency arrays in hooks
   - Implement proper memoization
   - Use React.memo for expensive components
