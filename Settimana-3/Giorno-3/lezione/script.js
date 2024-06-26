// Elementi del form
const myForm = document.getElementById("form");
const regName = document.getElementById("regName");
const regSurname = document.getElementById("regSurname");
const regEmail = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const regPhone = document.getElementById("regPhone");
const regAge = document.getElementById("regAge");
const btnSubmit = document.getElementById("sendForm");
const btnReset = document.getElementById("resetForm");
const formError = document.getElementById("error");
const formThanks = document.getElementById("thnks");

// Variabili per compilare l'oggetto
let formName;
let formSurname;
let formEmail;
let formPassword;
let formAge;
let formPhone;

// Oggetto che conterrà i dati del form
const regUser = {
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    age: 0
}

// Regex di verifica
const regexEmail = /email/i;
const regexPassword = /password/i;

let validEmail = false;
let validPassword = false;
let validSurname = false;
let validAge = false;

window.addEventListener("load", init());

function init() {
    formThanks.style.display = "none";
    btnSubmit.setAttribute("disabled", "true");
}

// EVENTI
// Compilazione dei campi e conseguente verifica
regSurname.addEventListener("blur", function () {
    validSurname = false;
    verify();

    if (regSurname.value === "") {
        formError.innerText = "Il campo cognome è obbligatorio";
        return;
    } else {
        formError.innerText = "";
        validSurname = true;
        verify();
    }
});

regEmail.addEventListener("blur", function () {
    validEmail = false;
    verify();

    if (regEmail === "") {
        formError.innerText = "Il campo email è obbligatorio";
        return;
    } else if (!regexEmail.test(regEmail.value)) {
        formError.innerText = "Inserire un email valida";
        return;
    } else {
        formError.innerText = "";
        validEmail = true;
        verify();
    }
});

regPassword.addEventListener("blur", function () {
    validPassword = false;
    verify();

    if (regPassword === "") {
        formError.innerText = "Il campo password è obbligatorio";
        return;
    } else if (!regexPassword.test(regPassword.value)) {
        formError.innerText = "Inserire una password tra 8  e 20 caratteri che contenga almeno una lettera minuscola, una lettera maiuscola, un numero e un carattere speciale!";
        return;
    } else {
        formError.innerText = "";
        validPassword = true;
        verify();
    }
});

regAge.addEventListener("blur", function () {
    validAge = false;
    verify();

    if (regAge.value < 18) {
        formError.innerText = "Devi essere maggiorenne per registrarti";
        return;
    } else if (regAge.value === "") {
        formError.innerText = "Il campo eta è obbligatorio";
        return;
    }
    else {
        formError.innerText = "";
        validAge = true;
        verify();
    }
});

function verify() {
    if (validAge && validPassword && validEmail && validSurname) {
        btnSubmit.removeAttribute("disabled");
    } else {
        btnSubmit.setAttribute("disabled", "true");
    }
};

btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    compileObject();
    printData();
    myForm.reset();
});

function compileObject() {
    formName = regName.value;
    formSurname = regSurname.value;
    formEmail = regEmail.value;
    formPassword = regPassword.value;
    formAge = regAge.value;
    formPhone = regPhone.value;

    regUser.name = formName;
    regUser.surname = formSurname;
    regUser.email = formEmail;
    regUser.password = formPassword;
    regUser.age = formAge;
    regUser.phone = formPhone;
    console.log(regUser);
};

function printData() {
    formThanks.style.display = "block";

    if (regUser.name !== "") {
        document.getElementById("formName").innerText += regUser.name;
    } else {
        document.getElementById("formName").innerText = "";
    }

    if (regUser.phone !== "") {
        document.getElementById("formPhone").innerText += regUser.phone;
    } else {
        document.getElementById("formPhone").innerText = "";
    }

    document.getElementById("formSurname").innerText += regUser.surname;
    document.getElementById("formEmail").innerText += regUser.email;
    document.getElementById("formPassword").innerText += regUser.password;
    document.getElementById("formAge").innerText += regUser.age;
};



// LISTA DINAMICA
const myList = document.getElementById("listForm");
const insertItem = document.getElementById("insertItem");
const btnList = document.getElementById("btnInsert");
const lista = document.getElementById("list");
const listItems = [];

btnList.addEventListener("click", function (e) {
    e.preventDefault();
    if (!checkInput()) {
        return;
    }
    popolateArray();
    printList();
    myList.reset();
});

function checkInput() {
    if (insertItem.value === "") return false; else return true;
};

function popolateArray() {
    listItems.push(insertItem.value);
};

function printList() {
    lista.innerText = "";
    for (let i = 0; i < listItems.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = listItems[i];
        let btnDelete = document.createElement("button")
        btnDelete.setAttribute("type", "button");
        btnDelete.setAttribute("onclick", `deleteItem(${i})`);
        btnDelete.innerText = "❌";
        newLi.appendChild(btnDelete);
        lista.appendChild(newLi);
    }
};

function deleteItem(index) {
    listItems.splice(index, 1);
    printList();
};