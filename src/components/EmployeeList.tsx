import React from 'react';
import { withAuthentication, WithAuthenticationProps } from '../hoc/withAuthentication';
import { withDataFetching, WithDataFetchingProps } from '../hoc/withDataFetching';
import { withPermissions, WithPermissionsProps } from '../hoc/withPermissions';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

type EmployeeListProps = WithAuthenticationProps &
  WithDataFetchingProps<Employee[]> &
  WithPermissionsProps;

/**
 * EmployeeList component that displays a list of employees
 * Enhanced with authentication, data fetching, and permissions
 */
const EmployeeList: React.FC<EmployeeListProps> = ({
  data,
  isLoading,
  error,
  refetch,
  userName,
  canView,
  canEdit,
  canDelete
}) => {
  if (!canView) {
    return <div className="text-center p-4">You don't have permission to view employees.</div>;
  }

  if (isLoading) {
    return <div className="text-center p-4">Loading employees...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-4">
        Error loading employees: {error.message}
        <button 
          onClick={refetch}
          className="ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Employee List</h2>
        <p>Welcome, {userName}!</p>
      </div>

      <div className="grid gap-4">
        {data?.map((employee) => (
          <div key={employee.id} className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">{employee.name}</h3>
            <p>{employee.position}</p>
            <p>{employee.department}</p>
            
            <div className="mt-2 space-x-2">
              {canEdit && (
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
              )}
              {canDelete && (
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Mock function to fetch employees
const fetchEmployees = async (): Promise<Employee[]> => {
  // Simulate API call
  return [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', position: 'HR Manager', department: 'Human Resources' },
    { id: 3, name: 'Mike Johnson', position: 'Product Manager', department: 'Product' },
  ];
};

// Apply HOCs in the correct order: permissions -> data fetching -> authentication
export default withAuthentication(
  withDataFetching(
    withPermissions(
      EmployeeList,
      { view: true, edit: true, delete: true }
    ),
    fetchEmployees
  ),
  'HR_ADMIN'
);
