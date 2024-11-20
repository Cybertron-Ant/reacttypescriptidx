import React from 'react';
import useEmployees from './hooks/useEmployees';
import useEmployeeSearch from './hooks/useEmployeeSearch';
import useEmployeeForm from './hooks/useEmployeeForm';

const App: React.FC = () => {
  const {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployees();

  const {
    searchTerm,
    filteredEmployees,
    handleSearch,
    handleSearchFieldChange,
    sortEmployees,
  } = useEmployeeSearch(employees);

  const {
    formData,
    errors,
    handleInputChange,
    resetForm,
    prepareSubmission,
  } = useEmployeeForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validatedData = prepareSubmission();
    if (validatedData) {
      await addEmployee(validatedData);
      resetForm();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white border-l-4 border-red-500 p-4 shadow-lg rounded" role="alert">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Employee Management</h1>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
            />
            <select 
              onChange={(e) => handleSearchFieldChange(e.target.value as any)}
              className="px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
            >
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
              <option value="department">Department</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredEmployees.map((employee) => (
            <div key={employee.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {employee.firstName} {employee.lastName}
                  </h3>
                  <p className="text-blue-600">{employee.email}</p>
                </div>
                <button 
                  onClick={() => deleteEmployee(employee.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  {employee.position}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  {employee.department}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {new Date(employee.hireDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Employee</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName || ''}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-gray-50"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName || ''}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-gray-50"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                <input
                  type="text"
                  value={formData.position || ''}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-gray-50"
                />
                {errors.position && (
                  <p className="mt-1 text-sm text-red-600">{errors.position}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <input
                  type="text"
                  value={formData.department || ''}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-gray-50"
                />
                {errors.department && (
                  <p className="mt-1 text-sm text-red-600">{errors.department}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hire Date</label>
              <input
                type="date"
                value={formData.hireDate || ''}
                onChange={(e) => handleInputChange('hireDate', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
              {errors.hireDate && (
                <p className="mt-1 text-sm text-red-600">{errors.hireDate}</p>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Employee
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 bg-gray-100 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
