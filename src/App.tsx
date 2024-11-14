import TernaryComponent from './components/TernaryComponent';

function App() {
  // Change these values to test the ternary operator behavior
  const userLoggedIn = true;
  const currentUserName = 'Alice';

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Welcome to the Ternary Operator Demo App
      </h1>
      {/* Render the TernaryComponent with the specified props */}
      <TernaryComponent isLoggedIn={userLoggedIn} userName={currentUserName} />
    </div>
  );
}

export default App;
