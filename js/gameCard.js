//создание карт

import { possibleWords } from "./getRandomWord.js";

export const createGameCard = (flippedCardName, defaultIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const flippedCardTag = document.createElement('h1');
    const notFlippedCardI = document.createElement('span');


    flippedCardTag.innerHTML = `${flippedCardName}`;
    notFlippedCardI.style.display = "none";

    const conformityCard = Object.keys(possibleWords).find(key => (possibleWords[key] === `${flippedCardName}`))
    notFlippedCardI.innerHTML = conformityCard;

    card.append(flippedCardTag, notFlippedCardI);

    return card;
}