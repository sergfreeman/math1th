// import {taskType} from './index';
import { randomizer } from './random.js'
window.onload = function () {
    
}

let firstValue;
let secondValue;
let result;
let attempt = 1;
let score = 0;

let attemptCounter = document.querySelector('span');
let taskField = document.querySelector('.label-tasc-one');
let answer = document.querySelector('.answer');


let button = document.querySelector('button');

setTask();
button.addEventListener('click', function () {
    checkTask();
    setTask();

});


function setTask() {
    attemptCounter.innerHTML = attempt;
    attempt++;
    answer.value = '';
    answer.focus();


    firstValue = randomizer(0, 10);
    secondValue = randomizer(0, 10 - firstValue);
    result = firstValue + secondValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} =`;

}

function checkTask() {
    if (result == answer.value) {
        alert('ok');

    } else alert('no');


    if (attempt > 10) {
        window.close();
    }

}

