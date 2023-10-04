import { useState, useEffect } from "react";
import { fbAdd, fbGet, fbLogout } from "../config/firebase/firebasemethods";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [quizModel, setQuizModel] = useState<any>({});
  const [questionModel, setQuestionModel] = useState<any>({});
  const [option, setOption] = useState("");
  const [optionsList, setOptionsList] = useState<any>([]);
  const [islock, setIsLock] = useState(false);
  const [correctOption, setCorrectOption] = useState<any>();
  const [questions, setQuestions] = useState<any>([]);
  const [allQuiz, setAllQuiz] = useState<any>([]);

  const navigate = useNavigate();

  const addOption = () => {
    optionsList.push(option);
    setOptionsList([...optionsList]);
  };

  const fillQuizModel = (key: string, val: any) => {
    quizModel[key] = val;
    setQuizModel({ ...quizModel });
  };
  const fillQuestionModel = (key: string, val: any) => {
    questionModel[key] = val;
    setQuestionModel({ ...questionModel });
  };

  const lockQuiz = () => {
    setIsLock(!islock);
  };
  const addQuestion = () => {
    questionModel.options = [...optionsList];
    questionModel.correctAns = correctOption;
    questions.push(questionModel);
    setQuestions([...questions]);
    fillQuestionModel("question", "");
    setCorrectOption("");
    setOption("");
    setOptionsList([]);
  };

  const getQuiz = () => {
    fbGet("quiz")
      .then((res) => {
        console.log(res);
        setAllQuiz([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveQuiz = () => {
    quizModel.questions = [...questions];
    fbAdd("quiz", quizModel)
      .then((res) => {
        console.log(res);
        getQuiz();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logOut = () => {
    fbLogout().then(() => {
      navigate("/login");
    });
  };
  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <>
      <div className="p-0 m-0 row">
        <div className="col-md-2 h-screen bg-dark">
          <div className="p-2">
            <div className="text-center p-2">
              <img
                width={50}
                className="rounded-pill"
                src="https://lh3.googleusercontent.com/ogw/AKPQZvx7-_kQB62ensdz-SYhZoRGk8jxKPLeHpnh8QWeUak=s32-c-mo"
                alt=""
              />
            </div>
            <div className="p-2">
              {allQuiz.map((x: any, i: any) => (
                <button key={i}>{x.question}</button>
              ))}
              <button onClick={logOut} className="btn btn-danger w-100 my-2">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-10 h-screen">
          <div className="d-flex justify-content-between align-items-center p-2">
            <h3>Quiz App</h3>
            <button onClick={saveQuiz} className="btn btn-primary">
              Save Quiz
            </button>
          </div>
          <div className="p-2">
            <div className="row">
              <div className="col-md-4">
                <div className="p-2">
                  <input
                    disabled={islock}
                    className="form-control"
                    placeholder="Question"
                    value={quizModel.question}
                    onChange={(e) => fillQuizModel("question", e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2">
                  <input
                    disabled={islock}
                    className="form-control"
                    placeholder="Duration"
                    value={quizModel.duration}
                    onChange={(e) => fillQuizModel("duration", e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2">
                  <input
                    disabled={islock}
                    className="form-control"
                    placeholder="Secret Key"
                    value={quizModel.secretKey}
                    onChange={(e) => fillQuizModel("secretKey", e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="p-2">
                  <input
                    disabled={islock}
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={quizModel.description}
                    onChange={(e) =>
                      fillQuizModel("description", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2">
                  <button onClick={lockQuiz} className="btn btn-primary">
                    {islock ? "Unlock" : "Lock"} Quiz
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="p-2">
                  <input
                    disabled={!islock}
                    className="form-control"
                    placeholder="Question"
                    value={questionModel.question}
                    onChange={(e) =>
                      fillQuestionModel("question", e.target.value)
                    }
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-10">
                <div className="p-2">
                  <input
                    disabled={!islock}
                    className="form-control"
                    placeholder="Question"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="p-2">
                  <button onClick={addOption} className="btn btn-danger">
                    Add Option
                  </button>
                </div>
              </div>
              <div className="col-md-8">
                <div className="p-2">
                  {optionsList.map((x: any, i: any) => (
                    <button
                      className="btn mb-2 btn-info w-100"
                      onClick={() => setCorrectOption(x)}
                      key={i}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2">
                  {correctOption && (
                    <button className="btn w-100 btn-danger">
                      {correctOption}
                    </button>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-2">
                  <button onClick={addQuestion} className="btn btn-info">
                    Add Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
