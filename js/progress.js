//шкала прогресса тренировка

let wordsProgress = document.querySelector('#words-progress');

wordsProgress.value = 0;

export function countProgress() {
    wordsProgress.value += 20;
    wordsProgress.innerHTML = wordsProgress.value * 1 + '%';
};

//шкала прогресса проверка знаний

export function countExamProgress(procent) {
    let examProgress = document.querySelector('#exam-progress');

    switch (procent) {
        case 6:
            return (examProgress.value += 33.3);
        case 8:
            return (examProgress.value += 25);
        case 10:
            return (examProgress.value += 20);
        case 12:
            return (examProgress.value += 16.7);
        default:
            break;
    }
};