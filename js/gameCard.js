export const createGameCard = (defaultIcon, flippedCardIcon) => { //создаем карты
    const card = document.createElement('div');
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('i');
    const flippedCardI = document.createElement('i');

    notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
    flippedCardI.classList.add('fa', `fa-${defaultIcon}`);

    card.append(flippedCardI, notFlippedCardI);

    return card;
}