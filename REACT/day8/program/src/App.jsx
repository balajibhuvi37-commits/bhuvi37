import { useState } from "react";

const App = () => {

  // task1
  const [count, setCount] = useState(0);



// task2
  const [text, setText] = useState("Hello React");


// task3

  const [show, setShow] = useState(true);


  return (
    <div className="container">

      <h1 className="main-title">
        React useState Tasks
      </h1>


  

      <div className="task-card">

        <h2>Task 1 - Counter</h2>

        <h3>Count: {count}</h3>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

      </div>


  

      <div className="task-card">

        <h2>Task 2 - Text Change</h2>

        <h3>{text}</h3>

        <button onClick={() => setText("Welcome to React")}>
          Change Text
        </button>

      </div>



      <div className="task-card">

        <h2>Task 3 - Hide and Show</h2>

        {show && (
          <p>
            Welcome to React! This content can be hidden and shown.
          </p>
        )}

        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>

      </div>

    </div>
  );
};

export default App;