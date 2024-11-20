# Higher Order Components Guide

## Overview
This guide provides detailed information about the Higher Order Components (HOCs) used in the HR Management System.

## Available HOCs

### 1. withAuthentication
Handles user authentication and role-based access control.

#### Usage
```typescript
import { withAuthentication } from '../hoc/withAuthentication';

const ProtectedComponent = withAuthentication(YourComponent, 'HR_ADMIN');
```

#### Props Injected
```typescript
interface WithAuthenticationProps {
  isAuthenticated: boolean;
  userRole: string;
  userName: string;
}
```

#### Example
```typescript
const UserProfile: React.FC<WithAuthenticationProps> = ({ 
  isAuthenticated, 
  userRole, 
  userName 
}) => {
  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <p>Role: {userRole}</p>
    </div>
  );
};

export default withAuthentication(UserProfile, 'HR_ADMIN');
```

### 2. withDataFetching
Manages data fetching, loading states, and error handling.

#### Usage
```typescript
import { withDataFetching } from '../hoc/withDataFetching';

const DataComponent = withDataFetching(YourComponent, fetchFunction);
```

#### Props Injected
```typescript
interface WithDataFetchingProps<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}
```

#### Example
```typescript
const EmployeeList: React.FC<WithDataFetchingProps<Employee[]>> = ({ 
  data, 
  isLoading, 
  error, 
  refetch 
}) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {data?.map(employee => (
        <div key={employee.id}>{employee.name}</div>
      ))}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
};

export default withDataFetching(EmployeeList, fetchEmployees);
```

### 3. withPermissions
Controls feature-level permissions and access rights.

#### Usage
```typescript
import { withPermissions } from '../hoc/withPermissions';

const PermissionComponent = withPermissions(YourComponent, {
  view: true,
  edit: true,
  delete: false
});
```

#### Props Injected
```typescript
interface WithPermissionsProps {
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canCreate: boolean;
}
```

#### Example
```typescript
const EmployeeActions: React.FC<WithPermissionsProps> = ({ 
  canEdit, 
  canDelete 
}) => {
  return (
    <div>
      {canEdit && <button>Edit</button>}
      {canDelete && <button>Delete</button>}
    </div>
  );
};

export default withPermissions(EmployeeActions, {
  edit: true,
  delete: true
});
```

## Best Practices

### 1. Order of HOC Application
When using multiple HOCs, consider the order of application:
```typescript
// Recommended order
export default withAuthentication(
  withDataFetching(
    withPermissions(BaseComponent)
  )
);
```

### 2. Type Safety
Always define proper interfaces for your components:
```typescript
interface Props extends WithAuthenticationProps, WithPermissionsProps {
  customProp: string;
}

const Component: React.FC<Props> = (props) => {
  // Implementation
};
```

### 3. Error Handling
Implement proper error boundaries and error states:
```typescript
if (error) {
  return (
    <ErrorBoundary>
      <ErrorMessage error={error} onRetry={refetch} />
    </ErrorBoundary>
  );
}
```

## Common Patterns

### 1. Conditional Rendering
```typescript
const SecureComponent = ({ isAuthenticated, canView, children }) => {
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!canView) return <UnauthorizedMessage />;
  return children;
};
```

### 2. Permission Composition
```typescript
const AdminDashboard = compose(
  withAuthentication,
  withPermissions({ view: true, edit: true }),
  withDataFetching(fetchAdminData)
)(Dashboard);
```

### 3. Loading States
```typescript
const LoadingWrapper = ({ isLoading, children }) => {
  if (isLoading) return <LoadingSpinner />;
  return children;
};
```

## Troubleshooting

### Common Issues

1. **Infinite Redirect Loops**
   - Problem: Component keeps redirecting to login
   - Solution: Check authentication state management and conditions

2. **Props Not Being Passed**
   - Problem: HOC props not reaching component
   - Solution: Ensure proper type definitions and prop spreading

3. **Permission Conflicts**
   - Problem: Unexpected permission behavior
   - Solution: Check HOC order and permission requirements

## Advanced Usage

### 1. Dynamic Permissions
```typescript
const DynamicPermissions = withPermissions(Component, () => ({
  view: checkViewPermission(),
  edit: checkEditPermission()
}));
```

### 2. Custom HOC Composition
```typescript
const withEnhancedAuth = (requiredRole: string) => 
  compose(
    withAuthentication,
    withPermissions({ view: true }),
    withLogging
  );
```

### 3. Performance Optimization
```typescript
const MemoizedComponent = React.memo(withAuthentication(Component));
```

## Testing

### 1. Testing HOC-wrapped Components
```typescript
describe('withAuthentication', () => {
  it('redirects when not authenticated', () => {
    const Component = withAuthentication(TestComponent);
    render(<Component />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
```

### 2. Mocking HOC Behavior
```typescript
jest.mock('../hoc/withAuthentication', () => ({
  withAuthentication: (Component) => (props) => (
    <Component {...props} isAuthenticated={true} />
  )
}));
```

## Resources

- [React HOC Documentation](https://reactjs.org/docs/higher-order-components.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Testing Library](https://testing-library.com/docs/)
