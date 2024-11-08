import Hello from './components/Hello';

function App() {
  // Example array of greetings
  const greetings = ["Hello", "Hi", "Welcome", "Greetings"];

  // Example user object
  const user = {
    name: "Alice",
    age: 30,
  };

  return (
    <div className="App">
      {/* Using Hello with an array of greetings and a user object */}
      <Hello greeting="Welcome to the app!" number={100} showEmoji={true} greetingsArray={greetings} user={user} />

      {/* Using Hello with only the array of greetings */}
      <Hello greetingsArray={["Good Morning", "Good Afternoon", "Good Evening"]} />

      {/* Using Hello with only the user object */}
      <Hello user={{ name: "Bob", age: 25 }} />

      {/* Using Hello without any additional props (defaults will be used) */}
      <Hello />
    </div>
  );
}

export default App;
