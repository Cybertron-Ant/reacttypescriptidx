/**
 * Core types for the HR Management System
 */

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

export interface Department {
  id: string;
  name: string;
  managerId: string;
  budget: number;
  employeeCount: number;
}

export interface EmployeeFilters {
  department?: string;
  status?: Employee['status'];
  searchTerm?: string;
}

export interface HRContextType {
  employees: Employee[];
  departments: Department[];
  loading: boolean;
  error: string | null;
  addEmployee: (employee: Omit<Employee, 'id'>) => Promise<void>;
  updateEmployee: (id: string, employee: Partial<Employee>) => Promise<void>;
  deleteEmployee: (id: string) => Promise<void>;
  filterEmployees: (filters: EmployeeFilters) => Employee[];
}
