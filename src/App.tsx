import TernaryComponent from './components/TernaryComponent';

function App() {

  // Change these values to test the ternary operator behavior
  const userLoggedIn = true;
  const currentUserName = 'Alice';

  return (
    <div className="App">

      <h1>Welcome to the Ternary Operator Demo App</h1>
      {/* Render the TernaryComponent with the specified props */}
      <TernaryComponent isLoggedIn={userLoggedIn} userName={currentUserName} />
    </div>
  );
}

export default App;
