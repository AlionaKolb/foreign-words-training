// таймер в режиме проверки знаний

import { timer } from "./script.js";

export let timerFunction = () => {

    let [minutes, seconds] = timer.textContent.split(":").map(Number);
    if (seconds < 59) {
        seconds++;
    } else {
        minutes++;
        seconds = 0;
    }

    timer.textContent = `${format(minutes)}:${format(seconds)}`;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    function format(val) {
        if (val < 10) {
            return `0${val}`;
        }
        return val;
    }
}