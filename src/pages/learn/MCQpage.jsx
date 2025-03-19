import { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Layout",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to define an internal stylesheet?",
    options: ["<style>", "<css>", "<script>", "<head>"],
    answer: "<style>"
  },
  {
    question: "Which property is used to change the text color in CSS?",
    options: ["font-color", "color", "text-color", "foreground"],
    answer: "color"
  },
  {
    question: "What is the correct HTML tag for the largest heading?",
    options: ["<h6>", "<h1>", "<heading>", "<head>"],
    answer: "<h1>"
  }
];

const MCQPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="text-lg mt-2">Your Score: {score} / {questions.length}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">{questions[currentQuestion].question}</h2>
            <div className="mt-4 space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedOption === option
                      ? option === questions[currentQuestion].answer
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOption && (
              <button
                onClick={handleNextQuestion}
                className="mt-4 w-full px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all"
              >
                {currentQuestion + 1 < questions.length ? "Next Question" : "Finish Quiz"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MCQPage;
