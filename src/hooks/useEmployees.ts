import { useState, useCallback, useMemo } from 'react';
import { Employee, EmployeeFilters } from '../types/hr.types';

/**
 * Custom hook for managing employee data and operations
 * Demonstrates proper use of useState, useCallback, and useMemo hooks
 */
export const useEmployees = () => {
  // State management using useState
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoized statistics using useMemo to prevent unnecessary recalculations
  const statistics = useMemo(() => {
    return {
      totalEmployees: employees.length,
      activeEmployees: employees.filter(emp => emp.status === 'ACTIVE').length,
      averageSalary: employees.reduce((acc, emp) => acc + emp.salary, 0) / employees.length || 0
    };
  }, [employees]);

  // Memoized filtering function using useCallback
  const filterEmployees = useCallback((filters: EmployeeFilters): Employee[] => {
    return employees.filter(employee => {
      const matchesDepartment = !filters.department || employee.departmentId === filters.department;
      const matchesStatus = !filters.status || employee.status === filters.status;
      const matchesSearch = !filters.searchTerm || 
        employee.firstName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(filters.searchTerm.toLowerCase());
      
      return matchesDepartment && matchesStatus && matchesSearch;
    });
  }, [employees]);

  // API operations using useCallback to maintain reference stability
  const addEmployee = useCallback(async (employee: Omit<Employee, 'id'>) => {
    try {
      setLoading(true);
      // Simulated API call
      const newEmployee = { ...employee, id: Date.now().toString() };
      setEmployees(prev => [...prev, newEmployee as Employee]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add employee');
    } finally {
      setLoading(false);
    }
  }, []);

  const updateEmployee = useCallback(async (id: string, updates: Partial<Employee>) => {
    try {
      setLoading(true);
      setEmployees(prev => 
        prev.map(emp => emp.id === id ? { ...emp, ...updates } : emp)
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update employee');
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteEmployee = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setEmployees(prev => prev.filter(emp => emp.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete employee');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    employees,
    loading,
    error,
    statistics,
    filterEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };
};
