import React, { useEffect, useState } from "react";

const Questions = props => {
  return (
    <div>
      {props.question}
      {props.options.map(x => {
        return (
          <input type="radio" value={x.option1}>
            {x.option1}
          </input>
        );
      })}
    </div>
  );
};
export default Questions;
