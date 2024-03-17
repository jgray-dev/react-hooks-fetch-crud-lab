import QuestionItem from "./QuestionItem";

function QuestionList({
  questions,
  handleDelete,
  setUpdateQuestion,
  updateQuestion,
}) {
  function changeAnswer(id, newInt) {
    console.log(`http://localhost:4000/questions/${id}`, newInt);
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: newInt,
      }),
    }).then(() => {
      setUpdateQuestion(!updateQuestion);
    });
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            deleteFunction={handleDelete}
            changeAnswer={changeAnswer}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
