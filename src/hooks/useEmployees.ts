import { useState, useEffect } from 'react';

// Define interfaces for our employee data
export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    department: string;
    hireDate: string;
}

// Dummy data for initial employees
const dummyEmployees: IEmployee[] = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@company.com',
        position: 'Software Engineer',
        department: 'Engineering',
        hireDate: '2023-01-15'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@company.com',
        position: 'HR Manager',
        department: 'Human Resources',
        hireDate: '2022-08-20'
    },
    {
        id: 3,
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael.j@company.com',
        position: 'Product Manager',
        department: 'Product',
        hireDate: '2023-03-10'
    },
    {
        id: 4,
        firstName: 'Sarah',
        lastName: 'Williams',
        email: 'sarah.w@company.com',
        position: 'UX Designer',
        department: 'Design',
        hireDate: '2023-05-01'
    }
];

/**
 * Custom hook for managing employee data and operations
 * This hook provides functionality for fetching, adding, updating, and deleting employees
 * @returns {Object} Object containing employee data and CRUD operations
 */
const useEmployees = () => {
    // State for storing employee data
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Initialize with dummy data
    useEffect(() => {
        fetchEmployees();
    }, []);

    /**
     * Fetches all employees from dummy data
     */
    const fetchEmployees = async () => {
        try {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));
            setEmployees(dummyEmployees);
            setError(null);
        } catch (err) {
            setError('Failed to fetch employees');
            console.error('Error fetching employees:', err);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Adds a new employee to the system
     * @param employee - The employee data to add
     */
    const addEmployee = async (employee: Omit<IEmployee, 'id'>) => {
        try {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Generate new ID (in a real app, this would be handled by the backend)
            const newId = Math.max(...employees.map(emp => emp.id), 0) + 1;
            const newEmployee = { ...employee, id: newId };
            
            setEmployees(prev => [...prev, newEmployee]);
            setError(null);
            return newEmployee;
        } catch (err) {
            setError('Failed to add employee');
            console.error('Error adding employee:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    /**
     * Updates an existing employee's information
     * @param id - The ID of the employee to update
     * @param updates - The updated employee data
     */
    const updateEmployee = async (id: number, updates: Partial<IEmployee>) => {
        try {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            setEmployees(prev =>
                prev.map(emp => (emp.id === id ? { ...emp, ...updates } : emp))
            );
            setError(null);
        } catch (err) {
            setError('Failed to update employee');
            console.error('Error updating employee:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    /**
     * Deletes an employee from the system
     * @param id - The ID of the employee to delete
     */
    const deleteEmployee = async (id: number) => {
        try {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            setEmployees(prev => prev.filter(emp => emp.id !== id));
            setError(null);
        } catch (err) {
            setError('Failed to delete employee');
            console.error('Error deleting employee:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        employees,
        loading,
        error,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        fetchEmployees,
    };
};

export default useEmployees;
