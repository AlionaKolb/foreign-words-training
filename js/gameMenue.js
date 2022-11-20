//уровни сложности
import { startGame } from "./startGame.js";
import { examMode, timer, results } from "./script.js";
import { timerFunction } from "./timerId.js";

let startTimer;
export function stopInterval() {
    clearInterval(startTimer)
}

export function createGameMenu() {
    examMode.classList.add("hidden");
    const title = document.createElement('h2');
    const gameContainer = document.querySelector('.game-section_container');

    gameContainer.innerHTML = '';
    title.textContent = 'Выбор сложности';
    title.classList.add('game-content_title');

    const createDifficultButton = (difficult) => {
        const button = document.createElement('button');
        button.classList.add('game-menu_difficult-btn');
        button.textContent = `${difficult} карточек`;

        results.classList.add('hidden');

        button.addEventListener('click', function() {
            startTimer = undefined;

            examMode.classList.remove("hidden");
            startGame(difficult);
            if (startTimer === undefined) {
                startTimer = setInterval(timerFunction, 1000);
            }
        });

        return button;
    }
    stopInterval();
    timer.textContent = `00:00`;
    document.querySelector('#exam-progress').value = 0;
    document.querySelector('#exam-progress').innerHTML = 0;
    document.querySelector('#correct-percent').innerHTML = 0;


    gameContainer.append(
        title,
        createDifficultButton(6),
        createDifficultButton(8),
        createDifficultButton(10),
        createDifficultButton(12),
    )
}