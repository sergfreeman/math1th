// import  { studentName }  from './index.js';
import { randomizer } from './random.js';
import { yearIs, monthIs, dateIs, hoursIs, minutesIs, secondsIs } from './get_current_time.js';


// alert(test);

let firstValue;
let secondValue;
let result;
let attempt = 1;
let totalReport = [];
let score = 0;

let attemptCounter = document.querySelector('span');
let taskField = document.querySelector('.label-tasc-one');
let answer = document.querySelector('.answer');
// let resultReport = document.querySelector('.resultReport');



//response params (name and email) from index.html
const urlParams = new URLSearchParams(window.location.search);
const nameParam = urlParams.get('name');


window.addEventListener("load", function () {
    // resultReport.value = `  Учень: ${nameParam} \n`;
    // resultReport.value = resultReport.value + `- початоку уроку ([${yearIs}:${monthIs}:${dateIs}] [${hoursIs}:${minutesIs}:${secondsIs}]) - \n`;
    totalReport.push(`  Учень: ${nameParam} \n`);
    totalReport.push(`- початоку уроку ([${yearIs}:${monthIs}:${dateIs}] [${hoursIs}:${minutesIs}:${secondsIs}]) - \n`);
    // alert(totalReport[1]);

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
//check on correct answer value, write check report
function checkTask() {
    if (result == answer.value) {
        // resultReport.value += `${taskField.innerHTML} ${result} : вірно\n`;
        totalReport.push(`      ${taskField.innerHTML} ${result} : вірно\n`);
    } else {
        // resultReport.value += `${taskField.innerHTML} ${answer.value} : помилка, має бути (${result})\n`;
        totalReport.push(`      ${taskField.innerHTML} ${answer.value} : помилка, має бути (${result})\n`);
    };


    if (attempt > 10) {
        // resultReport.value = resultReport.value + `- кінець уроку ([${yearIs}:${monthIs}:${dateIs}] [${hoursIs}:${minutesIs}:${secondsIs}]) - \n`;
        totalReport.push(`- кінець уроку ([${yearIs}:${monthIs}:${dateIs}] [${hoursIs}:${minutesIs}:${secondsIs}]) - \n`);

        document.querySelector('.wrapper').remove();
        let reportArea = document.createElement('textarea');
        reportArea.className = 'reportAreaClass';
        reportArea.rows ='14';
        for(let row of totalReport){
            reportArea.innerHTML += row;
        }
        
        
        document.body.appendChild(reportArea);

        // window.close();
        alert('close');
    }
}

