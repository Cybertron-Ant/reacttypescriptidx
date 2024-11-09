import RenderListItem from './components/RenderListItem';

function App() {

  // Example array of list items
  const listItems = [
    { id: 1, name: 'Apple', isAvailable: true },
    { id: 2, name: 'Banana', isAvailable: false },
    { id: 3, name: 'Cherry', isAvailable: true },
    { id: 4, name: 'Date', isAvailable: false },
    { id: 5, name: 'Elderberry', isAvailable: true },
  ];

  return (
    <div className="App">

      <h1>Welcome to the Conditional List Rendering App</h1>
      {/* Render the RenderListItem component with the array of items */}
      <RenderListItem items={listItems} />
      
    </div>
  );
}

export default App;
