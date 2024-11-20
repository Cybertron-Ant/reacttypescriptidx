import { useState, useCallback } from 'react';
import { IEmployee } from './useEmployees';

/**
 * Custom hook for searching and filtering employees
 * Provides functionality for searching employees by various criteria
 * @returns {Object} Object containing search state and functions
 */
const useEmployeeSearch = (employees: IEmployee[]) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof IEmployee>('firstName');
    const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>(employees);

    /**
     * Filters employees based on search term and field
     * @param term - Search term to filter by
     * @param field - Field to search in
     */
    const filterEmployees = useCallback((term: string, field: keyof IEmployee) => {
        if (!term.trim()) {
            setFilteredEmployees(employees);
            return;
        }

        const filtered = employees.filter(employee => {
            const value = employee[field];
            if (typeof value === 'string') {
                return value.toLowerCase().includes(term.toLowerCase());
            }
            return String(value).includes(term);
        });

        setFilteredEmployees(filtered);
    }, [employees]);

    /**
     * Updates search term and filters employees
     * @param term - New search term
     */
    const handleSearch = (term: string) => {
        setSearchTerm(term);
        filterEmployees(term, searchField);
    };

    /**
     * Updates search field and reapplies filter
     * @param field - New search field
     */
    const handleSearchFieldChange = (field: keyof IEmployee) => {
        setSearchField(field);
        filterEmployees(searchTerm, field);
    };

    /**
     * Sorts employees by specified field
     * @param field - Field to sort by
     * @param direction - Sort direction ('asc' or 'desc')
     */
    const sortEmployees = (field: keyof IEmployee, direction: 'asc' | 'desc') => {
        const sorted = [...filteredEmployees].sort((a, b) => {
            const valueA = a[field];
            const valueB = b[field];

            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return direction === 'asc'
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            }

            if (valueA < valueB) return direction === 'asc' ? -1 : 1;
            if (valueA > valueB) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredEmployees(sorted);
    };

    return {
        searchTerm,
        searchField,
        filteredEmployees,
        handleSearch,
        handleSearchFieldChange,
        sortEmployees,
    };
};

export default useEmployeeSearch;
