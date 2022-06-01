// export { yearIs, monthIs, dateIs, hoursIs, minutesIs, secondsIs }

// let timeNow = new Date();
// let yearIs = timeNow.getFullYear();
// let monthIs = add_zero(timeNow.getMonth() + 1);
// let dateIs = add_zero(timeNow.getDate());
// let hoursIs = add_zero(timeNow.getHours());
// let minutesIs = add_zero(timeNow.getMinutes());
// let secondsIs = add_zero(timeNow.getSeconds());

export {currentYear, currentMonth, currentDate, currentHour, currentMinute, currentSecond}

function add_zero(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value
}


function currentYear(timeNow){
    return timeNow.getFullYear();
}

function currentMonth(timeNow){
    return add_zero(timeNow.getMonth() + 1);
}

function currentDate(timeNow){
    return add_zero(timeNow.getDate());
}

function currentHour(timeNow){
    return add_zero(timeNow.getHours());
}

function currentMinute(timeNow){
    return add_zero(timeNow.getMinutes());
}

function currentSecond(timeNow){
    return add_zero(timeNow.getSeconds());
}

