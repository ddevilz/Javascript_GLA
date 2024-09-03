const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Kolkata", correct: false },
      { text: "Chennai", correct: false },
    ],
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Subhas Chandra Bose", correct: false },
      { text: "Sardar Vallabhbhai Patel", correct: false },
    ],
  },
  {
    question: "Which is the largest state in India by area?",
    answers: [
      { text: "Uttar Pradesh", correct: false },
      { text: "Rajasthan", correct: true },
      { text: "Maharashtra", correct: false },
      { text: "Madhya Pradesh", correct: false },
    ],
  },
  {
    question: "Which river is considered the holiest in India?",
    answers: [
      { text: "Ganga", correct: true },
      { text: "Yamuna", correct: false },
      { text: "Godavari", correct: false },
      { text: "Narmada", correct: false },
    ],
  },
  {
    question: "Who was the first Prime Minister of India?",
    answers: [
      { text: "Indira Gandhi", correct: false },
      { text: "Mahatma Gandhi", correct: false },
      { text: "Jawaharlal Nehru", correct: true },
      { text: "Sardar Vallabhbhai Patel", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  answerButtonsElement.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hidden");
  } else {
    showResult();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.style.backgroundColor = "#28a745";
  } else {
    element.style.backgroundColor = "#dc3545";
  }
}

function clearStatusClass(element) {
  element.style.backgroundColor = "";
}

function showResult() {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.textContent = `${score} out of ${questions.length}`;
  nextButton.textContent = "Restart";
  nextButton.addEventListener("click", startQuiz);
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextButton.classList.add("hidden");
  showQuestion(questions[currentQuestionIndex]);
});

startQuiz();
