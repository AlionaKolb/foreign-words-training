import { createGameMenu } from "./gameMenue.js";

const studyCards = document.querySelector('.study-cards');
const card = document.querySelector('.flip-card');
const results = document.querySelector('.results-modal');
const front = document.querySelector('.flip-card-front h1');
const back = document.querySelector('.flip-card-back h1');
const backExample = document.querySelector('.flip-card-back span');
const backButton = document.querySelector('#back');
const examButton = document.querySelector('#exam');
const nextButton = document.querySelector('#next');
let wordsProgress = document.querySelector('#words-progress');
let currentWord = document.querySelector('#current-word');
let totalWord = document.querySelector('#total-word');
const shuffleWords = document.querySelector('#shuffle-words');
const examCards = document.querySelector('#exam-cards');
const studyMode = document.querySelector('#study-mode');
const examMode = document.querySelector('#exam-mode');

front.innerHTML = getRandomWord();

function getRandomWord() {
    const possibleWords = {
        apple: 'apple',
        candy: 'candy',
        family: 'family',
        popcorn: 'popcorn',
        smartphone: 'smartphone',
        weather: 'weather',
        fridge: 'fridge',
        carrot: 'carrot',
        cake: 'cake'
    };

    const translationWords = {
        apple: 'яблоко',
        candy: 'конфета',
        family: 'семья',
        popcorn: 'попкорн',
        smartphone: 'смартфон',
        weather: 'погода',
        fridge: 'холодильник',
        carrot: 'морковь',
        cake: 'пирожное'
    };

    const exampleWords = {
        apple: 'The captain looked as if he wanted to go sit under a shady apple tree',
        candy: 'Now here is some money for the candy',
        family: 'Since he is the family doctor, I would suggest you speak with him',
        popcorn: 'Anybody bring any popcorn?',
        smartphone: 'You just use your smartphone, take a picture of the equation and bam!',
        weather: 'I see you are having some rough weather there',
        fridge: 'You just broke my fridge!',
        carrot: 'You must have wonderful eyesight, eating all those carrots',
        cake: 'Вы вовсе не пирожное, Рейчел, а всего-навсего крем, взбитые сливки'
    };

    const randomWord = Math.floor(Math.random() * (Object.keys(possibleWords).length))

    const res = Object.keys(possibleWords);
    const result = Object.values(translationWords);
    const results = Object.values(exampleWords);

    front.innerHTML = (res[randomWord]);
    back.innerHTML = (result[randomWord]);
    backExample.innerHTML = (results[randomWord]);

    return res[randomWord]; // не потерялся
}

card.addEventListener('click', function() {
    card.classList.toggle("active");
});

currentWord.value = 1;
totalWord.value = 5;

function countWords() {
    currentWord.value++;
    currentWord.innerHTML = currentWord.value * 1;
}

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

});

backButton.addEventListener('click', function() {
    card.classList.remove("active");
    setTimeout(() => {
        getRandomWord(); //как вернуться к предыдущему слову (не рандомному)?
    }, 150);
});


wordsProgress.value = 20;

function countProgress() {
    wordsProgress.value += 20;
    wordsProgress.value.style = wordsProgress.value + '%';
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