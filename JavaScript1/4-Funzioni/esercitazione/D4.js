/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2;
}
console.log(area(2, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(int1, int2) {
    if (int1 === int2)
        return (int1 + int2) * 3;
    else
        return int1 + int2;
}
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(x, y = 19) {
    if (x > y)
        return (x - y) + " " + (x - y) * 3;
    else
        return (x - y) * - 1 === -0 ? 0 : (x - y) * -1;
}
console.log(crazyDiff(19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    return (n > 20 && n <= 100) || n == 400 ? true : false;
}
console.log(boundary(3));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(str) {
    if (str.substring(0, "EPICODE".length + 1).toUpperCase() === "EPICODE")
        return str;
    else
        return "EPICODE" + " ".concat(str);
}
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(pos) {
    return (pos % 7 == 0 || pos % 3 == 0) ? true : false;
}
console.log(check3and7(3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(s) {
    let app = "";
    for (let i = s.length - 1; i >= 0; i--)
        app += s[i];
    return app;
}
console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
    let s = str.split(" ");
    str = "";
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i][0].toUpperCase() + s[i].substring(1, s[s.length]);
        if (i === s.length - 1)
            str += s[i];
        else
            str += s[i] + " ";
    }
    return str;
}
console.log(upperFirst("ciao come ti chiami"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
    return str.substring(1, str.length - 1);
}
console.log(cutString("ciao"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

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
console.log(giveMeRandom(5));
