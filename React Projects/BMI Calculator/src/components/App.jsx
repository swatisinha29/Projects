import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heading, setHeading] = useState("");

  function handleWeight(event) {
    setWeight(event.target.value);
  }

  function handleHeight(event) {
    setHeight(event.target.value);
  }

  function resultTitle() {
    let result = weight / (height * height);
    return (
      <h1>
        Your BMI is {result} kg/m<sup>2</sup>
      </h1>
    );
  }

  function handleClick(event) {
    setHeading(resultTitle);
    event.preventDefault();
  }
  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>BMI Calculator</h1>
        <h1>{heading}</h1>
        <input
          onChange={handleWeight}
          value={weight}
          placeholder="Enter weight in kg"
        />
        <input
          onChange={handleHeight}
          value={height}
          placeholder="Enter height in metre"
        />
        <button type="submit">Submit</button>
      </form>
      <footer>Copyright &copy; 2020</footer>
    </div>
  );
}

export default App;
