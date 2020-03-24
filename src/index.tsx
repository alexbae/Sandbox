import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`rendered ${count}`);
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
