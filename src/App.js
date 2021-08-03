import './App.css';

function App() {
  // Numbers, strings, and Arrays are fined However Booleans and Objects cannot be output for dynamic values. 
  const title = 'Welcome to JavaScript and Friends';
  const likes = 50;

  return (
    <div className="App">
      {/* Dynamic values can be used in {} */}
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
    </div>
  );
}

export default App;
