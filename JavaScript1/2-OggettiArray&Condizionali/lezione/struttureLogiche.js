let age = 20;
let number = 20;
let studentName = "Mario";
let vote = 18;

if (age < 18) {
    console.log("Non puoi entrare");
    document.getElementById("verifyAge").innerText = "Non puoi entrare";
} else
    document.getElementById("verifyAge").innerText = "Puoi entrare";

if (number >= 10 && number < 15)
    document.getElementById("getPrice").innerText = "Prezzo nel range indicato";
else
    document.getElementById("getPrice").innerText = "Prezzo al di fuori del range indicato";

if (vote > 18 || studentName == "Mario")
    document.getElementById("verifyStudent").innerText = "Complimenti 👌";
else
    document.getElementById("verifyStudent").innerText = "Non ce l'hai fatta, io passarei prima all' anagrafe";

const products = [
    {
        prodName: "Monitor 17",
        prodQt: 25,
        prodPrice: 210
    },
    {
        prodName: "Monitor 21",
        prodQt: 87,
        prodPrice: 85
    },
    {
        prodName: "Monitor 24",
        prodQt: 20,
        prodPrice: 130
    }
];
console.log(products);

const prod1 = document.getElementById("product1");
const prod2 = document.getElementById("product2");
const prod3 = document.getElementById("product3");
let valutazione;

if (products[0].prodPrice < 100) {
    valutazione = "economico";
} else if (products[0].prodPrice < 150) {
    valutazione = "nella media";
} else {
    valutazione = "caro";
}

prod1.innerText = "Il prodotto " + products[0].prodName + ", giacenza pezzi " + products[0].prodQt + ", ha un prezzo " + valutazione;

if (products[1].prodPrice < 100) {
    valutazione = "economico";
} else if (products[1].prodPrice < 150) {
    valutazione = "nella media";
} else {
    valutazione = "caro";
}

prod2.innerText = "Il prodotto " + products[1].prodName + ", giacenza pezzi " + products[1].prodQt + ", ha un prezzo " + valutazione;

if (products[2].prodPrice < 100) {
    valutazione = "economico";
} else if (products[2].prodPrice < 150) {
    valutazione = "nella media";
} else {
    valutazione = "caro";
}

prod3.innerText = "Il prodotto " + products[2].prodName + ", giacenza pezzi " + products[2].prodQt + ", ha un prezzo " + valutazione;

// if lungo
const dayName = 2;
const thisDay = document.getElementById("thisDay");

if (dayName === 0) {
    thisDay.innerText += " Domenica";
} else if (dayName === 1) {
    thisDay.innerText += " Lunedi";
}
else if (dayName === 2) {
    thisDay.innerText += " Martedi";
}
else if (dayName === 3) {
    thisDay.innerText += " Mercoledi";
}
else if (dayName === 4) {
    thisDay.innerText += " Giovedi";
}
else if (dayName === 5) {
    thisDay.innerText += " Venerdi";
}
else {
    thisDay.innerText += " Sabato";
}
