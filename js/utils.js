//Рандом карт в зависимости от сложности уровня

import { possibleWords } from "./getRandomWord.js";

export const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

}

export const createIconsArray = (array) => {
    switch (array) {
        case 6:
            return ((Object.keys(possibleWords)).slice(0, 3)).concat(Object.values(possibleWords).slice(0, 3));
        case 8:
            return ((Object.keys(possibleWords)).slice(0, 4)).concat(Object.values(possibleWords).slice(0, 4));
        case 10:
            return ((Object.keys(possibleWords)).slice(0, 5)).concat(Object.values(possibleWords).slice(0, 5));
        case 12:
            return ((Object.keys(possibleWords)).slice(0, 6)).concat(Object.values(possibleWords).slice(0, 6));
        default:
            break;
    }
}