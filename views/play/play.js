// DOM ELEMENTS ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");

// EVENT LISTENER ------------------------------------------------------
dom_start.addEventListener("click", onStart);

// DATA ---------------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets",
    choiceD: "I don't know!",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS -----------------------------------------------------------

// Hide an element
function hide(element) {
  element.style.display = "none";
}

// Show an element
function show(element) {
  element.style.display = "block";
}

// Start the quiz
function onStart() {
  hide(dom_start);
  show(dom_quiz);

  runningQuestionIndex = 0;
  score = 0;

  renderQuestion();
}

// Render the current question
function renderQuestion() {
  const q = questions[runningQuestionIndex];

  dom_question.textContent = q.title;
  dom_choiceA.textContent = q.choiceA;
  dom_choiceB.textContent = q.choiceB;
  dom_choiceC.textContent = q.choiceC;
  dom_choiceD.textContent = q.choiceD;
}

// Handle answer click
function onPlayerSubmit(answer) {
  const correctAnswer = questions[runningQuestionIndex].correct;

  if (answer === correctAnswer) {
    score++;
  }

  runningQuestionIndex++;

  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    hide(dom_quiz);
    show(dom_score);
    renderScore();
  }
}

// Render final score
function renderScore() {
  const scorePercent = Math.round((score / questions.length) * 100);

  let emoji = "😐";
  if (scorePercent < 20) emoji = "😡";
  else if (scorePercent < 40) emoji = "😢";
  else if (scorePercent < 60) emoji = "😐";
  else if (scorePercent < 80) emoji = "🙂";
  else emoji = "😄";

  dom_score.innerHTML = `
    <h2>Your score: ${scorePercent}%</h2>
    <h1>${emoji}</h1>
  `;
}

// INITIAL STATE -------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
