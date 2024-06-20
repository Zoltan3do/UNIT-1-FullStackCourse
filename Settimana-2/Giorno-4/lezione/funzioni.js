function sum(v, v2) {
    return v + v2;
}
console.log(3 + " ciao");

sumParameters = (x, y) => {
    return x + y;
}
console.log(sumParameters(1, 2));
console.log(sum(10, sumParameters(5, 5)));


const btn = document.getElementById("btn");
const age = document.getElementById("eta");
const v = document.getElementById("verify");

document.addEventListener("load", init()); //obbligatorio

function init() {
    btn.addEventListener("click", function (e) {
        e.preventDefault(); // obbligatorio
        if (chackAge(age.value)) {
            printAge(age.value);
            clearForm();
        } else {
            printError();
            return;
        }
    });
}

function chackAge(value) {
    if (value)
        return true;
    else
        return false;
}

function printAge(value) {
    v.innerText = "La tua eta è " + value;
}

function printError() {
    v.innerHTML = "<span style =' color: red;'>devi compilare l'eta</span>";
}

function clearForm() {
    v.value.innerText = "";
}