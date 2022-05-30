// import  { studentName }  from './index.js';
import { randomizer } from './random.js';
import { yearIs, monthIs, dateIs, hoursIs, minutesIs, secondsIs } from './get_current_time.js';


// alert(test);

let firstValue;
let secondValue;
let result;
let attempt = 1;
let score = 0;

let attemptCounter = document.querySelector('span');
let taskField = document.querySelector('.label-tasc-one');
let answer = document.querySelector('.answer');
let resultReport = document.querySelector('.resultReport');



//response params (name and email) from index.html
const urlParams = new URLSearchParams(window.location.search);
const nameParam = urlParams.get('name');


window.addEventListener("load", function() {
    resultReport.value = `  Учень: ${nameParam} \n`;
    resultReport.value = resultReport.value + `- початоку уроку (`;
    resultReport.value += `[${yearIs}:${monthIs}:${dateIs}] [${hoursIs}:${minutesIs}:${secondsIs}]) -`;
  });

//finish








document.onkeydown = function (event) {
    if (event.key == 'Enter') {
        
        event.preventDefault();
        checkTask();
        setTask();
    }
}


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
        // document.stopPropagation();
        window.close();
        alert('close');
    }

}

