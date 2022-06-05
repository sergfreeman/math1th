import { randomizer } from './random.js';
import { currentYear, currentMonth, currentDate, currentHour, currentMinute, currentSecond } from './get_current_time.js';


let firstValue;
let secondValue;
let thirdValue;
let result;
let attempt = 1;
let totalReport = [];
let score = 0;

let attemptCounter = document.querySelector('span');
let taskField = document.querySelector('.label-tasc-one');
let answer = document.querySelector('.answer');

//response params (name and email) from index.html
const urlParams = new URLSearchParams(window.location.search);
const taskType = urlParams.get('taskType');
const name = urlParams.get('name');
const email = urlParams.get('email');

//create totalReport array on load page
window.addEventListener("load", function () {
    totalReport.push(`  Учень: ${name} \n`);
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

    switch (taskType) {

        case 'two_additions_till10': two_additions_till10(); break
        case 'two_additions_till100': two_additions_till100(); break
    
        case 'several_additions_till10': several_additions_till10(); break
        case 'several_additions_till100': several_additions_till100(); break

        case 'two_substraction_till10': two_substraction_till10(); break
        case 'two_substraction_till100':two_substraction_till100(); break
    
        case 'several_substraction_till10': several_substraction_till10(); break
        case 'several_substraction_till100': several_substraction_till100(); break
        
        case 'several_combination_till10': several_combination_till10(); break
        case 'several_combination_till100': several_combination_till100(); break
    }

    

}

//check on correct answer value, write check report
function checkTask() {
    if (result == answer.value) {
        totalReport.push(`      ${taskField.innerHTML} ${result} : вірно\n`);
        score++;
    } else {
        totalReport.push(`      ${taskField.innerHTML} ${answer.value} : помилка, має бути (${result})\n`);
    }


    if (attempt > 10) {
        totalReport.push(`- кінець уроку ([${(currentYear(new Date()))}:${currentMonth(new Date())}:${currentDate(new Date())}] [${currentHour(new Date())}:${currentMinute(new Date())}:${currentSecond(new Date())}]) - \n`);
        totalReport.push(`      Оцінка(максимум 10 балів): ${score} балів.`);
        document.querySelector('.wrapper').remove();


        //Create DOM obj <textarea> for totalReport visualisation
        let reportArea = document.createElement('textarea');
        reportArea.className = 'reportAreaClass';
        reportArea.rows = '14';
        reportArea.readOnly = 'true';

        for (let row of totalReport) {
            reportArea.innerHTML += row;
        }
        document.body.appendChild(reportArea);

        //EXIT
        pointOfExit();
    }
}

//Exiting need 'mouse click' or pressing keyboard button 'Escape'
function pointOfExit() {
    document.body.addEventListener('click', function () { window.close(); })
    window.onkeydown = function (event) {
        if (event.key == 'Escape') window.close();
    }
}

//--------------------EXERCISE PART start--------------------

//create task value like as: ` 1 + 5 = `
function two_additions_till10(){
    firstValue = randomizer(0, 10);
    secondValue = randomizer(0, 10 - firstValue);
    result = firstValue + secondValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} =`;
}

//create task value like as: ` 17 + 55 = `
function two_additions_till100(){
    firstValue = randomizer(0, 100);
    secondValue = randomizer(0, 100 - firstValue);
    result = firstValue + secondValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} =`;
}

//create task value like as: ` 1 + 5 + 2 = `
function several_additions_till10(){
    firstValue = randomizer(0, 10);
    secondValue = randomizer(0, 10 - firstValue);
    thirdValue = randomizer(0, 10 - firstValue - secondValue);
    result = firstValue + secondValue + thirdValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} + ${thirdValue} =`;
}

//create task value like as: ` 17 + 55 + 12 = `
function several_additions_till100(){
    firstValue = randomizer(0, 100);
    secondValue = randomizer(0, 100 - firstValue);
    thirdValue = randomizer(0, 100 - firstValue - secondValue);
    result = firstValue + secondValue + thirdValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} + ${thirdValue} =`;
}

//create task value like as: ` 8 - 5 = `
function two_substraction_till10(){
    firstValue = randomizer(0, 10);
    secondValue = randomizer(0, firstValue);
    result = firstValue - secondValue;
    taskField.innerHTML = `${firstValue} - ${secondValue} =`;
}

//create task value like as: ` 33 - 12 = `
function two_substraction_till100(){
    firstValue = randomizer(0, 100);
    secondValue = randomizer(0, firstValue);
    result = firstValue - secondValue;
    taskField.innerHTML = `${firstValue} - ${secondValue} =`;
}

//create task value like as: ` 10 - 5 - 2 = `
function several_substraction_till10(){
    firstValue = randomizer(0, 10);
    secondValue = randomizer(0, firstValue);
    thirdValue = randomizer(0, firstValue - secondValue);
    result = firstValue - secondValue - thirdValue;
    taskField.innerHTML = `${firstValue} - ${secondValue} - ${thirdValue} =`;
}

//create task value like as: ` 17 - 5 - 12 = `
function several_substraction_till100(){
    firstValue = randomizer(0, 100);
    secondValue = randomizer(0, firstValue);
    thirdValue = randomizer(0, firstValue - secondValue);
    result = firstValue - secondValue - thirdValue;
    taskField.innerHTML = `${firstValue} - ${secondValue} - ${thirdValue} =`;
}

//create task value like as: ` 10 + 5 - 2 = `
function several_combination_till10(){
    firstValue = randomizer(0, 10);
    secondValue = randomizer(0, 10 - firstValue);
    thirdValue = randomizer(0, firstValue + secondValue);
    result = firstValue + secondValue - thirdValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} - ${thirdValue} =`;
}

//create task value like as: ` 17 + 55 - 12 = `
function several_combination_till100(){
    firstValue = randomizer(0, 100);
    secondValue = randomizer(0, 100 - firstValue);
    thirdValue = randomizer(0, firstValue + secondValue);
    result = firstValue + secondValue - thirdValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} - ${thirdValue} =`;
}