import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenue.js";
import { createIconsArray, shuffle } from "./utils.js";

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


    // Вот на этом этапе я сильно запуталась и не знаю что делть или к каким методам обращаться. подскажи, плз(((

    /*cards.forEach((card, index) => card.addEventListener('click', () => {

                if (clickable == true && !card.classList.contains('fade-out')) { ///????

                    //если кликнутая карта = null, то мы ей присваиваем индекс. Сможем развернуть только 2 карточки
                    if (firstCard == null) {
                        firstCard = index;
                    } else {
                        if (index != firstCard) {
                            secondCard = index;
                            //clickable = false;
                        }
                    }

                    //if (firstCard != null && secondCard != null & firstCard != secondCard) { 
                    if ( //делаем проверку. Если у первой кликнутой карты есть свойство firstElementChild
                        cards[firstCard].firstElementChild.className === cards[secondCard].firstElementChild.className
                    ) {
                        setTimeout(() => {//если 1я и 2я карты одинаковые - скрываем
                            cards[firstCard].classList.add('fade-out');
                            cards[secondCard].classList.add('fade-out');

                            clickable = true;
                        }, 500);
                    } else {
                        setTimeout(() => { //если 1я и 2я карты разные - подсвечиваем
                            cards[firstCard].classList.add('wrong');
                            cards[secondCard].classList.add('wrong');

                            clickable = true;
                        }, 500);
                    }
                }
    }));*/
}