import { getRandomWord } from "./getRandomWord.js";
import { createGameMenu } from "./gameMenue.js";

export const front = document.querySelector('.flip-card-front h1');
export const back = document.querySelector('.flip-card-back h1');
export const backExample = document.querySelector('.flip-card-back span');
export const timer = document.querySelector("#timer");


const studyCards = document.querySelector('.study-cards');
const card = document.querySelector('.flip-card');
//const results = document.querySelector('.results-modal');
const backButton = document.querySelector('#back');
const examButton = document.querySelector('#exam');
const nextButton = document.querySelector('#next');
let wordsProgress = document.querySelector('#words-progress');
let currentWords = document.querySelector('#current-word');
let totalWords = document.querySelector('#total-word');
const shuffleWords = document.querySelector('#shuffle-words');
const studyMode = document.querySelector('#study-mode');
const examMode = document.querySelector('#exam-mode');

front.innerHTML = getRandomWord();

card.addEventListener('click', function() {
    card.classList.toggle("active");
});

nextButton.addEventListener('click', function() {
    if (wordsProgress.value >= wordsProgress.max) {
        nextButton.disabled = true; //почему допускает еще один клик?
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
        getRandomWord(); //как вернуться к предыдущему слову (не к другому рандомному, а конкретно к предыдущему)?
    }, 150);
});

currentWords.value = 1;
totalWords.value = 5;

function countWords() {
    currentWords.value++;
    currentWords.innerHTML = currentWords.value * 1;
}

wordsProgress.value = 20;

function countProgress() {
    wordsProgress.value += 20;
    wordsProgress.innerHTML = wordsProgress.value * 1 + '%';
}

shuffleWords.addEventListener('click', function() {
    card.classList.remove("active");
    setTimeout(() => {
        getRandomWord();
    }, 150);
});

examButton.addEventListener('click', function() {
    studyCards.classList.add("hidden");
    studyMode.classList.add("hidden");
    examMode.classList.remove("hidden");

    const cardsApp = () => {
        createGameMenu();
    }
    cardsApp();
});