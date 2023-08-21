import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle && <h4>Hello</h4>}
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setToggle(!toggle);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default UseState;
