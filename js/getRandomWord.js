//Рандомный выбор

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

const resFront = Object.keys(possibleWords);
const resBack = Object.values(possibleWords);
const resExmp = Object.values(exampleWords);

export function getRandomWord() {

    const randomWord = Math.floor(Math.random() * (resFront.length));
    front.innerHTML = (resFront[randomWord]);
    back.innerHTML = (resBack[randomWord]);
    backExample.innerHTML = (resExmp[randomWord]);
    return resFront[randomWord];
}