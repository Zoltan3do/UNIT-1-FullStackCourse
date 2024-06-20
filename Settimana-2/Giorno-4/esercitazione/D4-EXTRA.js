// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console.
 se il suo valore è maggiore di 5 o no. ( i numeri devono essere univoci).
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
console.log("**********ESERCIZIO 1***********");
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let arr = [];
    let rand;
    for (let i = 0; i < n; i++) {
        rand = Math.round(Math.random() * 10);
        if (arr.includes(rand))
            i--;
        else
            arr.push(rand);
    }
    return arr;
}

function checkArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            console.log("Il numero " + arr[i] + " è maggiore di 5");
            sum += arr[i];
        }
        else
            console.log("Il numero " + arr[i] + " non è maggiore di 5");
    }
    return sum;
}
console.log(checkArray(giveMeRandom(5)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
console.log("**********ESERCIZIO 2***********");
/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
    {
        price: 50,
        name: "forbice",
        id: 0,
        quantity: 3
    },
    {
        price: 30,
        name: "matita",
        id: 1,
        quantity: 3
    },
    {
        price: 20,
        name: "penna",
        id: 2,
        quantity: 3
    }
];

function shoppingCartTotal() {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return total;
}
console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
console.log("**********ESERCIZIO 3***********");
/* SCRIVI QUI LA TUA RISPOSTA */
const na = [
    {
        price: 50,
        name: "forbice",
        id: 0,
        quantity: 3
    },
    {
        price: 30,
        name: "matita",
        id: 1,
        quantity: 3
    },
    {
        price: 20,
        name: "penna",
        id: 2,
        quantity: 3
    }
];

function addToShoppingCart(newArr) {
    let scProperties = JSON.stringify(Object.keys(shoppingCart));
    let naProperties = JSON.stringify(Object.keys(newArr));
    if (scProperties === naProperties) {
        for (let i = 0; i < newArr.length; i++) {
            shoppingCart.push(newArr[i]);
        }
        return shoppingCart.length;
    } else {
        console.log("Gli oggetti dell'array sono diversi da quelli in shopping cart")
    }
}
console.log(addToShoppingCart(na));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log("**********ESERCIZIO 4***********");
/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(arr) {
    let moreExpensive = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price > moreExpensive)
            moreExpensive = arr[i];
    }
    return moreExpensive;
}
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
console.log("**********ESERCIZIO 5***********");
/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(arr) {
    return arr[arr.length - 1];
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

console.log("**********ESERCIZIO 6***********");
/* SCRIVI QUI LA TUA RISPOSTA */
function loopeUntil(x) {
    let stamp = "";
    if (x < 0 || x > 9)
        console.log("ERROR");
    else {
        let count = 0;
        while (count < 3) {
            let rand = Math.round(Math.random() * 10) - 1;
            if (rand === x)
                rand++;

            if (rand > x) {
                stamp += (rand + " è maggiore di " + x + "\n");
                count++;
            }
            else {
                stamp += (rand + "\n");
            }
        }
    }
    return stamp;
}

console.log(loopeUntil(Math.round(Math.random() * 10) - 1));
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

console.log("**********ESERCIZIO 7***********");
/* SCRIVI QUI LA TUA RISPOSTA */
function average(arr) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}
console.log(average([1, 2, 3, " ", 5, " ", 9]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
console.log("**********ESERCIZIO 8***********");
/* SCRIVI QUI LA TUA RISPOSTA */
function longest(arr) {
    let long = "";
    for (let i = 0; i < arr.length; i++)
        if (long.length < arr[i].length)
            long = arr[i];
    return long;
}
console.log(longest(["ciao", "sono ", "manuel", "barone"]));


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

console.log("**********ESERCIZIO 9***********");
/* SCRIVI QUI LA TUA RISPOSTA */
function antiSpam(emailContent) {
    let spam = "SPAM";
    let scam = "SCAM";
    let arr = emailContent.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toUpperCase() === spam || arr[i].toUpperCase() === scam) {
            return false;
        }
    }
    return true;
}
console.log(antiSpam("ciao mi chiamo manuel e questo è uno spam "));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

console.log("**********ESERCIZIO 10***********");
/* SCRIVI QUI LA TUA RISPOSTA */
const data = new Date(2024, 5, 15, 10, 20, 30, 123);
function daysAgo(date) {
    let today = new Date().getTime();
    let before = date.getTime();
    let millisecondi = today - before;
    let giorni = millisecondi / (1000 * 60 * 60 * 24);
    return Math.floor(giorni);
}
console.log(daysAgo(data));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

console.log("**********ESERCIZIO 11***********");
/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < y; j++) {
            matrix[i].push(j + "" + i);
        }
    }
    return matrix;
}
console.log(matrixGenerator(3, 2));
