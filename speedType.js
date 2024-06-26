// Levels
const levels = [
  { name: "easy", value: 7 },
  { name: "medium", value: 5 },
  { name: "hard", value: 3 },
];

// change levels
let currentLevel = levels[0];
let currentTime = currentLevel.value;

// Global Veriables
let time = currentTime;
let score = 0;
let isPlaying;

// DOM Elements selections
const wordInput = document.querySelector("#input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const modalScore = document.querySelector("#modal-score");
const timeDisplay = document.getElementById("time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const btnEasy = document.querySelector(".easy");
const btnMedium = document.querySelector(".easy");
const btnHard = document.querySelector(".hard");
const startBtn = document.getElementById("start-btn");
const replay = document.querySelector("#replay-btn");
const modal = document.querySelector(".result-modal-container");
const reset = document.querySelector("#reset");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");

// Some EventListeners
startBtn.addEventListener("click", initialize);
reset.addEventListener("click", resetfn);
easy.addEventListener("click", () => changeLevel(0));
medium.addEventListener("click", () => changeLevel(1));
hard.addEventListener("click", () => changeLevel(2));

// Words Array
const words = [
  "hat",
  "river",
  "status",
  "generate",
  "stubborn",
  "cocktil",
  "monkey",
  "elephant",
  "establishment",
  "congratulation",
  "investigate",
  "conquror",
  "jacket",
  "jocker",
  "master",
  "relationship",
  "greatfullness",
  "buggati",
  "lamborghini",
  "aeroplane",
  "magic",
  "defination",
  "courage",
  "document",
  "javascript",
  "object",
  "engineer",
  "software",
];

// Some Default Values
message.innerHTML = currentLevel.name + " level";
timeDisplay.innerHTML = currentTime;
seconds.innerHTML = currentTime;

// Initializing game function
function initialize() {
  currentTime = currentLevel.value;
  startBtn.style.display = "none";
  timeDisplay.innerHTML = currentTime;
  // show numbers of seconds in UI
  seconds.innerHTML = currentTime;
  // Load word form Game
  showWord(words);
  // start mathcing input
  wordInput.addEventListener("input", startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 500);
}

// start match function
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentTime + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // if score is -1 display 0;
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!!";
    return true;
  } else {
    message.innerHTML = "Hurry Up!";
    return false;
  }
}

// Pick & Show random word
function showWord(words) {
  // Generate random array index
  const randomIndex = Math.floor(Math.random() * words.length);
  // output the random word
  currentWord.innerHTML = words[randomIndex];
}

// Countdown timer
function countdown() {
  if (time > 0) {
    time--;
  } else {
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// check game status function
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    message.className = "text-danger";
    currentWord.textContent = "....";
    startBtn.classList.remove("d-none");
    startBtn.classList.add("d-block");
    modal.classList.remove("d-none");
    modal.classList.add("d-block");
    modalScore.textContent = score;
    console.log({ score, modalScore });
    // score = -1;
    return;
  }
}

// Re-start Function (simply reloads the window)
function resetfn() {
  window.location.reload();
}

// Select Levels
function changeLevel(level) {
  currentLevel = levels[level];
  currentTime = currentLevel.value;
  time = currentTime;
  timeDisplay.innerHTML = currentTime;
  seconds.innerHTML = currentTime;
  message.innerHTML = currentLevel.name + " level";
  message.className = "text-success";
}

console.log("beat the word😼");
