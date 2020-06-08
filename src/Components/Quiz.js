import React, { useState } from "react";
import Questions from "./Questions";
import questionlist from "../question.json";

const Quiz = props => {
  console.log("data=", questionlist);
  const [data, setdata] = useState(questionlist);
  return (
    <div>
      {data.map(q => {
        return <Questions question={q.question} options={q.options} />;
      })}

      <button className="btn primary">Prev</button>
      <button>Next</button>
    </div>
  );
};
export default Quiz;
