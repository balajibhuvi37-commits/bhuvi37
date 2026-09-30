import { useState } from "react";

const App = () => {
  //  task1
  const [name, setName] = useState("");


  //  task2
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");


  const handleEmailSubmit = (event) => {
    event.preventDefault();

    setSubmittedEmail(email);
  };


  // task3

  const [age, setAge] = useState("");
  const [ageMessage, setAgeMessage] = useState("");


  const handleAgeSubmit = (event) => {
    event.preventDefault();

    if (age === "") {
      setAgeMessage("Age is required");
    } else {
      setAgeMessage(`Your age is: ${age}`);
      setAge("");
    }
  };


    // task4
  const [search, setSearch] = useState("");


  return (
    <div className="container">

      <h1 className="main-title">
        React Form Handling Tasks
      </h1>



      <div className="task-card">

        <h2>Task 1 - Name Input</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <p>
          Entered Name: {name}
        </p>

      </div>



      <div className="task-card">

        <h2>Task 2 - Email Submit</h2>

        <form onSubmit={handleEmailSubmit}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <button type="submit">
            Submit
          </button>

        </form>

        {submittedEmail && (
          <p>
            Submitted Email: {submittedEmail}
          </p>
        )}

      </div>



      <div className="task-card">

        <h2>Task 3 - Age Validation</h2>

        <form onSubmit={handleAgeSubmit}>

          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />

          <button type="submit">
            Submit
          </button>

        </form>

        {ageMessage && (
          <p>
            {ageMessage}
          </p>
        )}

      </div>



      <div className="task-card">

        <h2>Task 4 - Search Input</h2>

        <input
          type="text"
          placeholder="Search something..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <p>
          You are searching for: {search}
        </p>

      </div>

    </div>
  );
};

export default App;