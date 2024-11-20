import React, { useState } from 'react';
import TernaryComponent from './components/TernaryComponent';
import LifecycleDemo from './components/LifecycleDemo/LifecycleDemo';
import './components/LifecycleDemo/LifecycleDemo.css';

function App() {

  // State for toggling the LifecycleDemo component
  const [showLifecycle, setShowLifecycle] = useState(true);

  // Change these values to test the ternary operator behavior
  const userLoggedIn = true;
  const currentUserName = 'Alice';

  return (
    <div className="App">
      <h1>React Component Lifecycle & Props Demo</h1>
      
      {/* Toggle button for mounting/unmounting LifecycleDemo */}
      <button 
        onClick={() => setShowLifecycle(!showLifecycle)}
        style={{ margin: '1rem', padding: '0.5rem 1rem' }}
      >
        {showLifecycle ? 'Unmount' : 'Mount'} LifecycleDemo
      </button>

      {/* Conditionally render LifecycleDemo to demonstrate mounting/unmounting */}
      {showLifecycle && (
        <LifecycleDemo 
          title="Component Lifecycle Example"
          initialCount={0}
        />
      )}

      {/* Render the TernaryComponent with the specified props */}
      <TernaryComponent isLoggedIn={userLoggedIn} userName={currentUserName} />
    </div>
  );
}

export default App;
