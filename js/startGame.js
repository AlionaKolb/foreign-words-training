import { confetti } from "./confetti.js";
import { createGameCard } from "./gameCard.js";
import { createIconsArray, duplicateArray, shuffle } from "./utils.js";

export const startGame = (difficult) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector('.game-section_container'); //доска с картами
    const gameTable = document.createElement('div');
    const cardsIcons = createIconsArray(difficult);
    const duplicatedCardsIcons = duplicateArray(cardsIcons);
    const restartBtn = document.createElement('button');

    gameSection.innerHTML = '';
    restartBtn.textContent = 'Рестарт';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');

    shuffle(duplicatedCardsIcons);

    duplicatedCardsIcons.forEach(icon => gameTable.append(createGameCard('question-circle', icon)));

    gameSection.append(gameTable, restartBtn);

    const cards = document.querySelectorAll('.game-card');

    cards.forEach((card, index) => card.addEventListener('click', () => {
        if (clickable == true && !card.classList.contains('successfully')) {
            card.classList.add('flip');

            //если кликнутая карта = null, то мы ей присваиваем индекс. Сможем развернуть только 2 карточки
            if (firstCard == null) {
                firstCard = index;
            } else {
                if (index != firstCard) {
                    secondCard = index;
                    clickable = false;
                }
            }

            if (firstCard != null && secondCard != null & firstCard != secondCard) { //если 1я и 2я карты перевернуты и 1я и 2я карты разные
                if ( //делаем проверку. Если у первой кликнутой карты есть свойство firstElementChild
                    cards[firstCard].firstElementChild.className === cards[secondCard].firstElementChild.className
                ) {
                    setTimeout(() => {
                        cards[firstCard].classList.add('successfully');
                        cards[secondCard].classList.add('successfully');

                        firstCard = null; //чтоб дальше могли отгадывать карты
                        secondCard = null;
                        clickable = true;
                    }, 500);
                } else { //переворачиваем обратно
                    setTimeout(() => {
                        cards[firstCard].classList.remove('flip');
                        cards[secondCard].classList.remove('flip');

                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                }
            }

            if (Array.from(cards).every(card => card.className.includes('flip'))) {
                document.querySelector('.confetti').innerHTML = confetti;
            }
        }
    }));
}