import { getRandomWord } from "./getRandomWord.js";
import { createGameMenu } from "./gameMenue.js";
import { countProgress } from "./progress.js";

export let front = document.querySelector('.flip-card-front h1');
export let back = document.querySelector('.flip-card-back h1');
export let backExample = document.querySelector('.flip-card-back span');
export const timer = document.querySelector("#time");
export const examMode = document.querySelector('#exam-mode');
export const results = document.querySelector('.results-modal');

const studyCards = document.querySelector('.study-cards');
const card = document.querySelector('.flip-card');
const backButton = document.querySelector('#back');
const examButton = document.querySelector('#exam');
const nextButton = document.querySelector('#next');
const shuffleWords = document.querySelector('#shuffle-words');
const studyMode = document.querySelector('#study-mode');

front.innerHTML = getRandomWord();

card.addEventListener('click', function() {
    card.classList.toggle("active");
});


let currentWords = document.querySelector('#current-word');
let totalWords = document.querySelector('#total-word');
currentWords.value = 1;
totalWords.value = 5;

function countWords() {
    currentWords.value++;
    currentWords.innerHTML = currentWords.value * 1;
}

nextButton.addEventListener('click', function() {
    if (currentWords.value >= totalWords.value) {
        nextButton.disabled = true;
    } else {
        card.classList.remove("active");
        backButton.disabled = false;
        setTimeout(() => {
            getRandomWord();
            countProgress();
            countWords();
        }, 150);
    }
    card.classList.remove("active");

});

backButton.addEventListener('click', function() {
    card.classList.remove("active");
    setTimeout(() => {
        getRandomWord();
    }, 150);
});

countProgress();

//перемешать слова
shuffleWords.addEventListener('click', function() {
    card.classList.remove("active");
    setTimeout(() => {
        getRandomWord();
    }, 150);
});

//перейти к тестированию
examButton.addEventListener('click', function() {
    studyCards.classList.add("hidden");
    studyMode.classList.add("hidden");

    function cardsApp() {
        createGameMenu();
    }
    cardsApp();
});