import React, { useState } from "react";
function Counter() {
  //let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button style={{backgroundColor: "green", color: "white"}} onClick={() => setCount(count + 1)}>Up</button>
      <button style={{backgroundColor: "red", color: "white"}} onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;

