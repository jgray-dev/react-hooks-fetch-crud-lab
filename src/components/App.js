import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  const [updateQuestion, setUpdateQuestion] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((r) => r.json())
      .then((data) => {
        console.log("fetched: ", data);
        setQuestions(data);
      });
  }, [updateQuestion]);

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id.id}`, {
      method: "DELETE",
    }).then((r) => {
      setUpdateQuestion(!updateQuestion);
    });
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm
          updateQuestion={updateQuestion}
          setUpdateQuestion={setUpdateQuestion}
        />
      ) : (
        <QuestionList
          questions={questions}
          handleDelete={handleDelete}
          setUpdateQuestion={setUpdateQuestion}
          updateQuestion={updateQuestion}
        />
      )}
    </main>
  );
}

export default App;
