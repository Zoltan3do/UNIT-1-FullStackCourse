const names = ["Dario", "Ciao", "Antonio", "Buongiorno", "Giovanni", "Mucciaccia"];
const listaDinamica = document.getElementById("dinamicList");

const persons = [
    {
        name: "Mario",
        surname: "Rossi",
        email: "MarioRossio@gmail.com"
    },
    {
        name: "Mario",
        surname: "Bianchi",
        email: "MarioBianchi@gmail.com"
    },
    {
        name: "Maria",
        surname: "Verdi",
        email: "MariaRVerdi@gmail.com"
    }
]
const rubrica = document.getElementById("rubrica");
const buttons = document.getElementsByClassName(".letters");
const surnames = persons.map(item => {
    return item.surname
});

document.addEventListener("load", init());

function init() {
    printList();
}

function printList() {
    listaDinamica.innerHTML = "";
    names.forEach((item, index) => listaDinamica.innerHTML += `<li><button id="clear" onclick = elimina(${index})>❌</button>${item}</li>`);
}

function elimina(index) {
    names.splice(index, 1);
    printList();
}

function search(letter) {
    rubrica.innerHTML = "";
    persons.forEach(item => {
        if (item.surname.startsWith(letter.toUpperCase())) {
            rubrica.innerHTML += `<li>${item.surname} ${item.name}</li>`
        }
    });
}