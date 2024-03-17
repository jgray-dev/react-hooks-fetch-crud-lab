import React from "react";
import { useState } from "react";

function QuestionItem({ question, deleteFunction, changeAnswer }) {
  const { id, prompt, answers, correctIndex } = question;
  const [currentAnswer, changeCurrentAnswer] = useState(correctIndex);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(e) {
    changeCurrentAnswer(e.target.value);
    changeAnswer(id, e.target.value);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={currentAnswer} onChange={handleChange}>
          {options}
        </select>
      </label>
      <button onClick={() => deleteFunction({ id })}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
