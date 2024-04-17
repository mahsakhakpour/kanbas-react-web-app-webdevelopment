import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz, deleteQuiz, updateQuiz, setQuiz, setQuizzes } from "./reducer";
import { createQuiz, findQuizzesForCourse } from "./client";
import { KanbasState } from "../../store";
import * as client from "./client";

function QuizList() {
  const { courseId } = useParams();

  const [handleQuizDelete, setQuizIdToDelete] = useState(null);


  const quizList = useSelector((state: KanbasState) => state.quizzesReducer.quizzes);
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const dispatch = useDispatch();

  const handleAddQuiz = () => {
    createQuiz(courseId, quiz).then((quiz: any) => {
      dispatch(addQuiz(quiz));
    });
  };

  const handleDeleteQuiz = (quizId: any) => {
    client.deleteQuiz(quizId).then((status) => {
      dispatch(deleteQuiz(quizId));
    });
  };

  const handleUpdateQuiz = async () => {
    const status = await client.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  };

  useEffect(() => {
    client.findQuizzesForCourse(courseId)
      .then((quizzes) =>
        dispatch(setQuizzes(quizzes))
    );
  }, [courseId]);


 

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input
          value={quiz.name}
          onChange={(e) => dispatch(setQuiz({ ...quiz, name: e.target.value }))} />
        <br />
        <br />
        <textarea
          value={quiz.description}
          onChange={(e) => dispatch(setQuiz({ ...quiz, description: e.target.value }))} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <button
            onClick={handleAddQuiz}
            style={{ backgroundColor: 'green', color: 'white', marginLeft: '5px' }}>Add</button>
          <button
            onClick={handleUpdateQuiz}
            style={{ backgroundColor: 'blue', color: 'white', marginLeft: '5px' }}>Update</button>

            
        </div>
      </li>
      {quizList
        // .filter((quiz) => quiz.course === courseId)
        // .map((quiz, index) => (
          .filter((quiz: { course: string | undefined; }) => quiz.course === courseId)
          .map((quiz: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; _id: React.SetStateAction<null>; }, index: React.Key | null | undefined) => (
          <li key={index} className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3>{quiz.name}</h3>
              <p>{quiz.description}</p>
            </div>
            <div>
              <button
                onClick={() => dispatch(setQuiz(quiz))}
                style={{ backgroundColor: 'yellow', color: 'black', marginRight: '5px' }}>Edit</button>
               {/* <button
                onClick={() => handleDeleteQuiz(quiz)}
                style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>  */}

<button onClick={() => setQuizIdToDelete(quiz._id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default QuizList;