const title = document.querySelector("h1");
const list = document.querySelector("#list");
const oddLi = list.querySelectorAll('#list li:nth-child(odd)');
const realPrice = document.getElementById("realPrice");
const majorPrice = document.getElementById("majorPrice");
const totalPrice = document.getElementById("totalPrice");
let cart = [];
let total = 0;

title.style.color = "red";
oddLi.forEach(item => item.style.color = "brown");
oddLi.forEach(item => item.style.fontWeight = "bold");

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

// DOM VIRTUALIZATION / Virtual DOM
const corpoTabella = document.getElementById("users");
function creazioneTabella() {
    persons.forEach(person => {
        let cellaNome = document.createElement("td");
        let cellaCognome = document.createElement("td");
        let cellaEmail = document.createElement("td");

        cellaNome.textContent = person.name;
        cellaCognome.textContent = person.surname;
        cellaEmail.textContent = person.email;

        const trUser = document.createElement("tr");
        trUser.appendChild(cellaNome);
        trUser.appendChild(cellaCognome);
        trUser.appendChild(cellaEmail);

        corpoTabella.appendChild(trUser);
    });
}
creazioneTabella();


const arrayPrices = [12, 45, 57, 42, 31, 68];
let deliveryPrice = 10;

function createCart() {
    cart = arrayPrices.map((element) => {
        if (element < 40) {
            element = element + deliveryPrice;
        }
        return element;
    });
}
createCart();

function totalCart() {
    return total = cart.reduce((sum, item) => sum += item, 0);
}

realPrice.innerText = `Prezzi netti: ${arrayPrices}`;
majorPrice.innerText = `Con spese spedizione: ${cart}`;
totalPrice.innerText = `Totale carrello: ${totalCart()}`;
