const animali = ["gatto", "cane", "coniglio"];
console.log(animali);
document.getElementById("animali").innerHTML = animali;// stampa array non destrutturato

// stampa array destrutturato
document.getElementById("animal1").innerText = animali[0];
document.getElementById("animal2").innerText = animali[1];
document.getElementById("animal3").innerText = animali[2];

// quick sorting normale e reverse
animali.sort();
console.log(animali);
animali.reverse();
console.log(animali);
