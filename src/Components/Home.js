import React, { useState } from 'react';

function Home() {
  // let name = 'Joseph'; Not a reactive value
  const [name, setName] = useState('Joseph');
  const [age, setAge] = useState(27);

  const handleClick = () => {
    setName('Jordan');
    setAge(28)
  }

  return (
    <div className="home">
      <h2>Welcome to Home {name} is {age} years old</h2>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
export default Home;
