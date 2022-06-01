import { randomizer } from './random.js';
import { currentYear, currentMonth, currentDate, currentHour, currentMinute, currentSecond } from './get_current_time.js';


let firstValue;
let secondValue;
let result;
let attempt = 1;
let totalReport = [];
let score = 0;

let attemptCounter = document.querySelector('span');
let taskField = document.querySelector('.label-tasc-one');
let answer = document.querySelector('.answer');

//response params (name and email) from index.html
const urlParams = new URLSearchParams(window.location.search);
const nameParam = urlParams.get('name');

//create Report on load page
window.addEventListener("load", function () {
    totalReport.push(`  Учень: ${nameParam} \n`);
    totalReport.push
        (`- початок уроку ([${(currentYear(new Date()))}:${currentMonth(new Date())}:${currentDate(new Date())}] [${currentHour(new Date())}:${currentMinute(new Date())}:${currentSecond(new Date())}]) - \n`);
});

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



//create task value like as: ` 1 + 5 = `
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
//check on correct answer value, write check report
function checkTask() {
    if (result == answer.value) {
        totalReport.push(`      ${taskField.innerHTML} ${result} : вірно\n`);
        score++;
    } else {
        totalReport.push(`      ${taskField.innerHTML} ${answer.value} : помилка, має бути (${result})\n`);
    };


    if (attempt > 10) {
        totalReport.push(`- кінець уроку ([${(currentYear(new Date()))}:${currentMonth(new Date())}:${currentDate(new Date())}] [${currentHour(new Date())}:${currentMinute(new Date())}:${currentSecond(new Date())}]) - \n`);
        totalReport.push(`      Оцінка: ${score} балів.`);
        document.querySelector('.wrapper').remove();
        let reportArea = document.createElement('textarea');
        reportArea.className = 'reportAreaClass';
        reportArea.rows = '14';
        for (let row of totalReport) {
            reportArea.innerHTML += row;
        }

        document.body.appendChild(reportArea);
        
        document.body.addEventListener('click', function(){window.close();})
        window.onkeydown = function(event){
            if (event.key == 'Escape') window.close();
        }
        
    }
}

