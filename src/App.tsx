import ActiveEmployees from './components/ActiveEmployees';

function App() {

  // Example array of employee items
  const employeeList = [
    { id: 1, name: 'Alice Johnson', isActive: true },
    { id: 2, name: 'Bob Smith', isActive: false },
    { id: 3, name: 'Charlie Brown', isActive: true },
    { id: 4, name: 'Diana Prince', isActive: false },
    { id: 5, name: 'Ethan Hunt', isActive: true },
  ]

  return (
    <div className="App">
      
      <h1>Human Resource Management Dashboard</h1>
      {/* Render the ActiveEmployees component with the array of employees */}
      <ActiveEmployees employees={employeeList} />
      
    </div>
  );
}

export default App;
