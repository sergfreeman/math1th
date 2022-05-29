// import {two_additions_till10} from './arithmetic.js'
let taskType, login, password;

window.onload = function () {
    // alert('start');
    let menuOptions = document.querySelectorAll('a');
    menuOptions.forEach(element => {
        // alert(element.className);
        element.addEventListener('click', function(){
            let nameOfFile = String(element.className) + '.html';
            window.open(`./${nameOfFile}`, "_blank");
            // window.open(`./two_additions_till10.html`, "_blank");
      
        })
        
    });
}

