import { useState } from 'react';
import { IEmployee } from './useEmployees';

type EmployeeFormData = Omit<IEmployee, 'id'>;

interface ValidationErrors {
    [key: string]: string;
}

/**
 * Custom hook for managing employee form state and validation
 * Provides form handling functionality for employee data
 * @param initialData - Initial employee data (optional)
 * @returns {Object} Object containing form state and handlers
 */
const useEmployeeForm = (initialData?: Partial<EmployeeFormData>) => {
    const [formData, setFormData] = useState<Partial<EmployeeFormData>>(initialData || {});
    const [errors, setErrors] = useState<ValidationErrors>({});

    /**
     * Validates employee form data
     * @returns {boolean} Whether the form data is valid
     */
    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};

        // Required field validation
        const requiredFields: (keyof EmployeeFormData)[] = [
            'firstName',
            'lastName',
            'email',
            'position',
            'department',
            'hireDate'
        ];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        });

        // Email validation
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Date validation
        if (formData.hireDate) {
            const hireDate = new Date(formData.hireDate);
            if (isNaN(hireDate.getTime())) {
                newErrors.hireDate = 'Invalid date format';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Handles input change events
     * @param field - Form field name
     * @param value - New field value
     */
    const handleInputChange = (field: keyof EmployeeFormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error for the field being updated
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    /**
     * Resets form to initial state
     */
    const resetForm = () => {
        setFormData(initialData || {});
        setErrors({});
    };

    /**
     * Prepares form data for submission
     * @returns {EmployeeFormData | null} Validated form data or null if invalid
     */
    const prepareSubmission = (): EmployeeFormData | null => {
        if (validateForm()) {
            return formData as EmployeeFormData;
        }
        return null;
    };

    return {
        formData,
        errors,
        handleInputChange,
        resetForm,
        validateForm,
        prepareSubmission,
    };
};

export default useEmployeeForm;
