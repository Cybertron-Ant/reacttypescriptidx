# Employee Status Management System Tutorial

This tutorial will guide you through building the Employee Status Management System step by step.

## Prerequisites

- Node.js 16+ installed
- Basic knowledge of React and TypeScript
- Code editor (VS Code recommended)

## Step 1: Project Setup

1. Create a new Vite project:
```bash
npm create vite@latest my-hr-app -- --template react-ts
cd my-hr-app
npm install
```

2. Install additional dependencies:
```bash
npm install @types/react @types/react-dom typescript
```

## Step 2: Create Type Definitions

Create `src/types/employee.types.ts`:

```typescript
export type EmployeeStatus = 'ACTIVE' | 'ON_LEAVE' | 'TERMINATED' | 'SUSPENDED';

export interface Employee {
  id: string;
  name: string;
  status: EmployeeStatus;
  lastUpdated: Date;
  statusHistory: StatusHistoryEntry[];
}

export interface StatusHistoryEntry {
  status: EmployeeStatus;
  timestamp: Date;
  updatedBy: string;
  notes?: string;
}

export interface StatusUpdatePayload {
  employeeId: string;
  newStatus: EmployeeStatus;
  notes?: string;
}
```

## Step 3: Implement Custom Hook

Create `src/hooks/useEmployeeStatus.ts`:

```typescript
import { useState, useCallback, useMemo } from 'react';
import { Employee, EmployeeStatus, StatusUpdatePayload } from '../types/employee.types';

export const useEmployeeStatus = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const statistics = useMemo(() => ({
    totalEmployees: employees.length,
    statusCounts: employees.reduce((acc, emp) => ({
      ...acc,
      [emp.status]: (acc[emp.status] || 0) + 1
    }), {} as Record<EmployeeStatus, number>)
  }), [employees]);

  const updateEmployeeStatus = useCallback(async (payload: StatusUpdatePayload) => {
    try {
      setLoading(true);
      // Implementation here
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update status');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    employees,
    loading,
    error,
    statistics,
    updateEmployeeStatus
  };
};
```

## Step 4: Create Components

1. Create Status List Component (`src/components/EmployeeStatusManager/StatusList.tsx`):

```typescript
import React from 'react';
import { Employee } from '../../types/employee.types';

interface StatusListProps {
  employees: Employee[];
}

const StatusList: React.FC<StatusListProps> = ({ employees }) => {
  return (
    <div className="status-list">
      {employees.map(employee => (
        <div key={employee.id} className="employee-card">
          <h3>{employee.name}</h3>
          <p>Status: {employee.status}</p>
          <p>Last Updated: {employee.lastUpdated.toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(StatusList);
```

2. Create Status Update Component (`src/components/EmployeeStatusManager/StatusUpdate.tsx`):

```typescript
import React, { useState } from 'react';
import { EmployeeStatus, StatusUpdatePayload } from '../../types/employee.types';

interface StatusUpdateProps {
  onUpdate: (payload: StatusUpdatePayload) => void;
}

const StatusUpdate: React.FC<StatusUpdateProps> = ({ onUpdate }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [newStatus, setNewStatus] = useState<EmployeeStatus>('ACTIVE');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ employeeId, newStatus, notes });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={employeeId}
        onChange={e => setEmployeeId(e.target.value)}
        placeholder="Employee ID"
      />
      <select value={newStatus} onChange={e => setNewStatus(e.target.value as EmployeeStatus)}>
        <option value="ACTIVE">Active</option>
        <option value="ON_LEAVE">On Leave</option>
        <option value="TERMINATED">Terminated</option>
        <option value="SUSPENDED">Suspended</option>
      </select>
      <textarea
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder="Notes"
      />
      <button type="submit">Update Status</button>
    </form>
  );
};

export default StatusUpdate;
```

## Step 5: Main Component Integration

Update `src/App.tsx`:

```typescript
import EmployeeStatusManager from './components/EmployeeStatusManager';

function App() {
  return (
    <div className="App">
      <h1>Human Resource Management Dashboard</h1>
      <EmployeeStatusManager />
    </div>
  );
}

export default App;
```

## Step 6: Add Styling

Create `src/styles/main.css`:

```css
.status-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.employee-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  background: white;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
}

input, select, textarea {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0052a3;
}
```

## Step 7: Testing

1. Create test file `src/components/EmployeeStatusManager/__tests__/EmployeeStatusManager.test.tsx`:

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeStatusManager from '../index';

describe('EmployeeStatusManager', () => {
  it('renders without crashing', () => {
    render(<EmployeeStatusManager />);
    expect(screen.getByText('Employee Status Management')).toBeInTheDocument();
  });

  it('updates employee status', async () => {
    render(<EmployeeStatusManager />);
    
    // Fill form
    fireEvent.change(screen.getByPlaceholderText('Employee ID'), {
      target: { value: '1' }
    });
    
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'ON_LEAVE' }
    });
    
    // Submit form
    fireEvent.click(screen.getByText('Update Status'));
    
    // Assert status update
    await screen.findByText('Status: ON_LEAVE');
  });
});
```

## Step 8: Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

## Next Steps

1. Add API Integration
2. Implement Authentication
3. Add More Features:
   - Bulk status updates
   - Status change notifications
   - Advanced filtering
   - Export functionality

## Troubleshooting

### Common Issues

1. TypeScript Errors
```bash
npm install --save-dev @types/react @types/react-dom
```

2. Module Not Found
```bash
# Check tsconfig.json paths
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

3. Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev/guide)
