import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* Using Hello with a custom greeting, name, and showing an emoji */}
      <Hello greeting="Welcome" name="Alice" number={100} showEmoji={true} style={{ color: 'blue' }} />

      {/* Using Hello with only a name and default values */}
      <Hello name="Bob" />

      {/* Using Hello with custom styles and a hidden emoji */}
      <Hello greeting="Good day" number={2024} showEmoji={false} style={{ fontSize: '24px', color: 'green' }} />

      {/* Using Hello without any props (defaults will be used) */}
      <Hello />
    </div>
  );
}

export default App;
