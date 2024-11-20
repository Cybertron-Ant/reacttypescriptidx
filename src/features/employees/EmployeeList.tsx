import React, { useState, useEffect, useMemo } from 'react';
import { useHR } from '../../context/HRContext';
import { EmployeeFilters } from '../../types/hr.types';

/**
 * EmployeeList Component
 * Demonstrates the use of multiple hooks including:
 * - useState for local state management
 * - useEffect for side effects
 * - useMemo for performance optimization
 * - Custom hooks (useHR) for global state management
 */
const EmployeeList: React.FC = () => {
  // Local state management
  const [filters, setFilters] = useState<EmployeeFilters>({});
  const [searchTerm, setSearchTerm] = useState('');

  // Using our custom HR context hook
  const { 
    employees, 
    loading, 
    error, 
    statistics, 
    filterEmployees,
    deleteEmployee 
  } = useHR();

  // Update filters when search term changes
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      searchTerm
    }));
  }, [searchTerm]);

  // Memoized filtered employees list
  const filteredEmployees = useMemo(() => {
    return filterEmployees(filters);
  }, [filterEmployees, filters]);

  // Memoized employee status counts
  const statusCounts = useMemo(() => {
    return {
      active: filteredEmployees.filter(emp => emp.status === 'ACTIVE').length,
      onLeave: filteredEmployees.filter(emp => emp.status === 'ON_LEAVE').length,
      terminated: filteredEmployees.filter(emp => emp.status === 'TERMINATED').length,
    };
  }, [filteredEmployees]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      {/* Statistics Section */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Employees</h3>
          <p className="text-2xl">{statistics.totalEmployees}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Employees</h3>
          <p className="text-2xl">{statistics.activeEmployees}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Average Salary</h3>
          <p className="text-2xl">${statistics.averageSalary.toFixed(2)}</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Status Filter Tabs */}
      <div className="mb-4 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${!filters.status ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilters(prev => ({ ...prev, status: undefined }))}
        >
          All ({filteredEmployees.length})
        </button>
        <button
          className={`px-4 py-2 rounded ${filters.status === 'ACTIVE' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilters(prev => ({ ...prev, status: 'ACTIVE' }))}
        >
          Active ({statusCounts.active})
        </button>
        <button
          className={`px-4 py-2 rounded ${filters.status === 'ON_LEAVE' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilters(prev => ({ ...prev, status: 'ON_LEAVE' }))}
        >
          On Leave ({statusCounts.onLeave})
        </button>
      </div>

      {/* Employees List */}
      <div className="grid gap-4">
        {filteredEmployees.map(employee => (
          <div key={employee.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">
                {employee.firstName} {employee.lastName}
              </h3>
              <p className="text-gray-600">{employee.position}</p>
              <p className="text-sm text-gray-500">{employee.email}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => deleteEmployee(employee.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
