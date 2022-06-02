
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

