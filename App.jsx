import React from "react";

function App() {
  const time = new Date().toString();
  const a = 10, b = 20;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Congratulation, You completed first react app</h1>
      <p>Hello Time = {time}</p>
      <p>{a} + {b} = {a + b}</p>

      <h2>Home Component</h2>
      <h2>About Component</h2>
      <h2>Contact Component</h2>
      <h3>Hello DINESH REDDY🤌</h3>
    </div>
  );
}

export default App;
