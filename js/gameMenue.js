import { startGame } from "./startGame.js";
//import { timerId } from "./timerId.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameContainer = document.querySelector('.game-section_container');

    gameContainer.innerHTML = '';
    title.textContent = 'Выбор сложности';
    title.classList.add('game-content_title');

    const createDifficultButton = (difficult) => {
        const button = document.createElement('button');

        button.classList.add('game-menu_difficult-btn');
        button.textContent = `${difficult} карточек`;

        button.addEventListener('click', () => startGame(difficult));

        return button;
    }



    gameContainer.append(
        title,
        createDifficultButton(6),
        createDifficultButton(8),
        createDifficultButton(10),
        createDifficultButton(12),
    )
}