import { startGame } from "./startGame.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameContainer = document.querySelector('.game-section_container');

    gameContainer.innerHTML = '';
    title.textContent = 'Выбор сложности';
    title.classList.add('game-content_title'); //game-menu_tittle
    document.querySelector('.confetti').innerHTML = '';

    const createDifficultButton = (difficult) => {
        const button = document.createElement('button');

        button.classList.add('game-menu_difficult-btn');
        button.textContent = `${difficult} карточек`;

        button.addEventListener('click', () => startGame(difficult));

        return button;
    }

    gameContainer.append( //gameSection
        title,
        createDifficultButton(6),
        createDifficultButton(8),
        createDifficultButton(10),
        createDifficultButton(12),
    )
}