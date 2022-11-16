//создаем карты
export const createGameCard = (flippedCardName, defaultIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const flippedCardTag = document.createElement('h1');
    const notFlippedCardI = document.createElement('span');


    flippedCardTag.innerHTML = `${flippedCardName}`;
    notFlippedCardI.classList.add(); // тут хочу найти название соответствующего ключа, чтоб потом сравнивать span-ы

    card.append(flippedCardTag, notFlippedCardI);

    return card;
}