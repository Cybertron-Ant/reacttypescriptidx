import Hello from './components/Hello';

function App() {
  return (
    <div className="App">

      {/* Using the 'Hello' component with both 'message' and 'number' props */}
      <Hello message="Welcome to the Vite + React + TypeScript App!" number={100} />

      {/* Using the 'Hello' component with only the 'message' prop */}
      <Hello message="This is another greeting message!" />

      {/* Using the 'Hello' component with only the 'number' prop */}
      <Hello number={2024} />

      {/* Using the 'Hello' component without any props (defaults will be used) */}
      <Hello />

    </div>
  );
}

export default App;
