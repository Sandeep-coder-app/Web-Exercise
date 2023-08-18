const calculate = () => { 
//Getting input from user into height variables.
let chemistry = document.querySelector("#chemistry").value;
let hindi = document.querySelector("#hindi").value;
let english = document.querySelector("#english").value;
let physics = document.querySelector("#physics").value;
let computer = document.querySelector("#computer").value;
let Gk = document.querySelector("#gk").value;

let grades = '';

let total = parseFloat(chemistry) + parseFloat(hindi) + parseFloat(english) + parseFloat(physics) + parseFloat(computer) + parseFloat(Gk);

let percentage = (total/600) * 100;

if(percentage <= 100 && percentage >= 80) {
    grades = 'A';
} else if(percentage <= 79 && percentage >= 60) {
        grades = 'B';
    } else if(percentage <= 59 && percentage >= 40) {
        grades = 'C';
    } else {
        grades = 'D';
    }


if(chemistry == '' || hindi == '' || english == '' || physics == '') {
    alert("Please enter all the fields");
} else  {
    alert("Percentage: "+percentage);
}

}
