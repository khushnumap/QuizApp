import React from "react";
import "./styles.css";
import Quiz from "../src/Components/Quiz";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Quiz</h1>
      <h2>Select correct answer and click on submit</h2>
      <Quiz />
    </div>
  );
}
