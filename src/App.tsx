import Hello from './components/Hello';
import Fruits from './components/Fruits';

function App() {
  // Example array of greetings
  const greetings = ["Hello", "Hi", "Welcome", "Greetings"];

  // Example user object
  const user = {
    name: "Alice",
    age: 30,
  };

  // Array of fruits to be passed as props
  const fruitList = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

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

      <h1>Welcome to the Fruits App</h1>
      {/* Render the Fruits component with the array of fruits */}
      <Fruits fruits={fruitList} />
    </div>
  );
}

export default App;
