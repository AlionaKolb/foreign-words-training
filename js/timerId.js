import { timer } from "./script.js";

export let timerId = setInterval(() => {
    let [minutes, seconds] = timer.textContent.split(":").map(Number);
    if (seconds < 59) {
        seconds++;
    } else {
        minutes++;
        seconds = 0;
    }

    timer.textContent = `${format(minutes)}:${format(seconds)}`;

}, 1000);

function format(val) {
    if (val < 10) {
        return `0${val}`;
    }
    return val;
}

//обнуление таймера
export function clearTimer() {
    clearInterval(timerId);
    timer.textContent = `00:00`;
}