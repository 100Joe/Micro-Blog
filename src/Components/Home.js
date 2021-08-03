import React from 'react';

const handleClick = (e) => {
  console.log(` Hello `, e)
}

const handleClickAgain = (name, e) => {
  console.log(` Hello ${name}`, e.target)
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome Home!</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) =>
        handleClickAgain('Joseph', e)
      }>Click me again</button>
    </div>
  )
}

export default Home
