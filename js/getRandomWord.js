import { front, back, backExample } from "./script.js";
export const possibleWords = {
    apple: 'яблоко',
    candy: 'конфета',
    family: 'семья',
    popcorn: 'попкорн',
    smartphone: 'смартфон',
    weather: 'погода',
    fridge: 'холодильник',
    carrot: 'морковь',
    cake: 'пирожное'
};

export function getRandomWord() {
    const exampleWords = {
        apple: 'The captain looked as if he wanted to go sit under a shady apple tree',
        candy: 'Now here is some money for the candy',
        family: 'Since he is the family doctor, I would suggest you speak with him',
        popcorn: 'Anybody bring any popcorn?',
        smartphone: 'You just use your smartphone, take a picture of the equation and bam!',
        weather: 'I see you are having some rough weather there',
        fridge: 'You just broke my fridge!',
        carrot: 'You must have wonderful eyesight, eating all those carrots',
        cake: 'Вы вовсе не пирожное, Рейчел, а всего-навсего крем, взбитые сливки'
    };

    const randomWord = Math.floor(Math.random() * (Object.keys(possibleWords).length))

    const res = Object.keys(possibleWords);
    const result = Object.values(possibleWords);
    const results = Object.values(exampleWords);

    front.innerHTML = (res[randomWord]);
    back.innerHTML = (result[randomWord]);
    backExample.innerHTML = (results[randomWord]);

    return res[randomWord];
}