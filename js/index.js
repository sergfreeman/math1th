var teacherEmail, studentName, password;
export let expStudentName = studentName;

let menuOptions = document.querySelectorAll('a');
menuOptions.forEach(element => {
    element.addEventListener('click', function () {
        let nameOfFile = String(element.className) + '.html';
        window.open(`./${nameOfFile}`, "_blank");
    })
});


let studentNameField = document.querySelector('.student-name');
studentNameField.addEventListener('change', set_student_name);

function set_student_name() {

    studentName = studentNameField.value;
    // export var expStudentName = studentName ;
    alert(expStudentName);

}

