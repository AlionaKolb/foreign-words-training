//Режим проверки знаний. Начало игры

import { createGameCard } from "./gameCard.js";
import { createGameMenu, stopInterval } from "./gameMenue.js";
import { createIconsArray, shuffle } from "./utils.js";
import { countExamProgress } from "./progress.js";
import { results, timer } from "./script.js";



export const startGame = (difficult) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector('.game-section_container');
    const gameTable = document.createElement('div');

    const array = createIconsArray(difficult);

    const restartBtn = document.createElement('btn');

    gameSection.innerHTML = '';
    restartBtn.textContent = 'Рестарт';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');

    shuffle(array);

    array.forEach(words => gameTable.append(createGameCard(words)));

    gameSection.append(gameTable, restartBtn);

    const cards = document.querySelectorAll('.game-card');

    restartBtn.addEventListener('click', createGameMenu);

    cards.forEach((card, index) => card.addEventListener('click', () => {
        let correctPercent = document.querySelector('#correct-percent');

        //если кликнутая карта = null, то мы ей присваиваем индекс. Сможем работать только с 2 карточками
        if (firstCard == null) {
            firstCard = index;
            cards[firstCard].classList.add('correct');

        } else {
            if (index != firstCard) {
                secondCard = index;
                clickable = false;
            }
        }

        if (firstCard != null && secondCard != null && firstCard != secondCard) {
            if (cards[firstCard].firstElementChild.textContent === cards[secondCard].lastElementChild.textContent || cards[firstCard].lastElementChild.textContent === cards[secondCard].firstElementChild.textContent) {
                cards[firstCard].classList.add('fade-out');
                cards[secondCard].classList.add('fade-out');

                countExamProgress(difficult);
                document.querySelector('#exam-progress').innerHTML = document.querySelector('#exam-progress').value + '%';
                correctPercent.innerHTML = Math.round(document.querySelector('#exam-progress').value) + '%';

                firstCard = null;
                secondCard = null;
                clickable = true;
            } else {
                cards[secondCard].classList.add('wrong');
                setTimeout(() => {
                    cards[secondCard].classList.remove('wrong');
                }, 500);
            }
        }
        if (Array.from(cards).every(card => card.className.includes('fade-out'))) {
            stopInterval();

            setTimeout(() => {
                //alert('Браво!');
                results.classList.remove('hidden');
                const time = document.querySelector("#timer");
                time.textContent = `${timer.textContent}`;
                //createGameMenu();
            }, 500);
        };

    }));
    document.querySelector('#exam-progress').value = 0;
}