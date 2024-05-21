import React, { useState } from "react";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [marks, setMarks] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1905", "1915", "1920"],
      correctAnswer: "1912",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Pb"],
      correctAnswer: "Au",
    },
    {
      question: "Which country is the largest by land area?",
      options: ["Canada", "China", "Russia", "United States"],
      correctAnswer: "Russia",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correctAnswer: "Diamond",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Pablo Picasso",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Oxygen", "Hydrogen", "Helium", "Lithium"],
      correctAnswer: "Hydrogen",
    },
  ];

  const ansCheck = (userAns, corrAns) => {
    if (userAns === corrAns) {
      setMarks(marks + 1);
    }
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(
        "Your Quiz is Done. Your score is: " + marks + "/" + quizData.length
      );
      setCurrentQuestion(0);
      setMarks(0)
    }
  };

  return (
    <>
      <div className="bg-cyan-100 p-5 h-full">
        <div className="font-semibold text-lg flex justify-center items-center">
          <h1>
            Questions {currentQuestion + 1}/{quizData.length}
          </h1>
        </div>
        <div className="font-bold flex justify-center mt-5 text-2xl">
          <h1>{quizData[currentQuestion].question}</h1>
        </div>
        <div>
          {quizData[currentQuestion].options.map((x) => {
            return (
              <div
                key={x}
                className="bg-blue-200 rounded mt-3 p-3 text-xl font-medium"
              >
                <div className="flex justify-center items-center">
                  <button
                    onClick={() =>
                      ansCheck(x, quizData[currentQuestion].correctAnswer)
                    }
                    className="container"
                  >
                    {x}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default QuizApp;
