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

    return array;
}
export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createIconsArray = (initialCount) => {
    const cardsIcons = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
    ];

    switch (initialCount) {
        case 6:
            return cardsIcons.slice(0, 3);
        case 8:
            return cardsIcons.slice(0, 4);
        case 10:
            return cardsIcons.slice(0, 5);
        case 12:
            return cardsIcons;
        default:
            break;
    }
}