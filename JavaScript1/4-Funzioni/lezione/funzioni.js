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


// VERIFICA CODICE FISCALE

let codFis = "DLGDRA67R20F839V";
let birthDay = "20";
let birthYear = "1967";
let gender = "M";
let fiscalYear;
let fiscalDay;

checkPositions();
extractFiscalCode();
checkFiscalCode();

function checkPositions() {
    if (gender === "F") {
        birthDay = birthDay + 40;
    }
    const dayPosition = codFis.indexOf(birthDay, 7);
    if (dayPosition === -1) {
        console.log("Il giorno non corrisponde");
        return;
    }
    const yearPosition = codFis.indexOf(birthYear.substring(birthYear, 2), 5);
    if (yearPosition === -1) {
        console.log("L'anno non corrisponde");
        return;
    }
}

function extractFiscalCode() {
    fiscalYear = birthYear.substring(2);
    fiscalDay = codFis.substring(9, 11);
}

function checkFiscalCode() {
    if (fiscalDay === birthDay && birthYear.substring(2) === fiscalYear) {
        console.log("Il codice fiscale è corretto")
    }
    else {
        console.log("codice fiscale errato")
    }
}



