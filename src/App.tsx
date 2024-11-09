import Hello from './components/Hello';
import Fruits from './components/Fruits';
import RenderObjects from './components/RenderObjects';
import LoopComponent from './components/LoopComponent';
import ConditionalComponent from './components/ConditionalComponent';

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

  // array of objects
  const itemsList = [
    { id: 1, name: "Apple", description: "A sweet red fruit" },
    { id: 2, name: "Banana", description: "A yellow tropical fruit" },
    { id: 3, name: "Cherry", description: "A small red stone fruit" },
    { id: 4, name: "Date", description: "A sweet brown fruit from the date palm" },
    { id: 5, name: "Elderberry", description: "A dark purple berry used in syrups" },
  ];

  // Change this value to test conditional rendering
  const shouldRenderFruits = true;

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

      {/* Render the RenderObjects component with the array of items */}
      <RenderObjects items={itemsList} />

      <h1>Welcome to the Loop Component App</h1>
      {/* Render LoopComponent with a count of 5 and a custom message */}
      <LoopComponent count={5} message="This is a looped child component" />

      <h1>Welcome to the Conditional Rendering App</h1>
      {/* Render the ConditionalComponent with the flag for conditional rendering */}
      <ConditionalComponent renderFruits={shouldRenderFruits} />
    </div>
  );
}

export default App;
