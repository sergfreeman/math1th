let formCheckboxIsCHECK = document.querySelector('.form-checkbox');
let inputNameParam = document.querySelector('.student-name');
let inputEmailParam = document.querySelector('.teacher-email');

//turn ON/OFF input fields into checkbox
formCheckboxIsCHECK.addEventListener('click', function () {
    
    if (formCheckboxIsCHECK.checked) {
        inputNameParam.disabled = true;
        inputEmailParam.disabled = true;
    } 
    else {
        inputNameParam.disabled = false;
        inputEmailParam.disabled = false;
    }
    
})


let menuOptions = document.querySelectorAll('a');

menuOptions.forEach(element => {

    element.addEventListener('click', function () {
        if (formCheckboxIsCHECK.checked) {

            inputNameParam.disabled = true;
            let getNameParam = inputNameParam.value;


            
            let getEmailParam = inputEmailParam.value;
            // alert(getNameParam);


            let nameOfFile = String(element.className) + '.html?name=' + getNameParam + '&email=' + getEmailParam;
            window.open(`./${nameOfFile}`, "_blank");
        }


    })
});


// let studentNameField = document.querySelector('.student-name');
// studentNameField.addEventListener('change', set_student_name);

// function set_student_name() {


//     studentName = studentNameField.value;
//     /two_additions_till10.html?s-name=serg



// }

// let tmp = document.querySelector('.tmp');
// tmp.addEventListener('click', function (e) {

//     e.preventDefault();

//     let form = document.querySelector('.authent-form');
//     form.action = './two_additions_till10.html';
//     form.method = 'GET';

//     // form.innerHTML = '<input name="q" value="test">';

//     // перед отправкой формы, её нужно вставить в документ
//     // document.body.append(form);

//     form.submit();


// })

