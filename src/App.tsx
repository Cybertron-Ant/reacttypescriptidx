import EmployeeEventHandler from './components/EmployeeEventHandler';

function App() {

  // Example array of employee items
  const employeeList = [
    { id: 1, name: 'Alice Johnson', isOnLeave: false },
    { id: 2, name: 'Bob Smith', isOnLeave: true },
    { id: 3, name: 'Charlie Brown', isOnLeave: false },
    { id: 4, name: 'Diana Prince', isOnLeave: true },
    { id: 5, name: 'Ethan Hunt', isOnLeave: false },
  ];

  return (
    <div className="App">

      <h1>Human Resource Management Dashboard</h1>
      {/* Render the EmployeeEventHandler component with the array of employees */}
      <EmployeeEventHandler employees={employeeList} />

    </div>
  );
}

export default App;
