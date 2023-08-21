"use strict";

const hangmanImg = document.querySelector(".hangman-box");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guess-text b");
const keyBoardDiv = document.querySelector(".keyboard");
let currentWord;
let wrongGuessCount = 0;
const maxGuesses = 6;

const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  console.log(currentWord);
  document.querySelector(".hint-text").innerText = hint;
  wordDisplay.innerHTML = word
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
};

const updateWordDisplay = (index, letter) => {
  const guessedListItem = wordDisplay.querySelectorAll("li")[index];
  guessedListItem.innerText = letter;
  guessedListItem.classList.add("guessed");
};

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].add("guessed");
      }
    });
  } else {
    wrongGuessCount++;
  }
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
};

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i).toUpperCase();
  keyBoardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

getRandomWord();
