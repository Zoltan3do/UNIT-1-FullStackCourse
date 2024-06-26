const student = {
    name: "Aldo",
    surname: "Baglio",
    age: 20,
    batch: "fs0522",
    hasWebcam: true
}

console.log(student);
document.getElementById("myObject").innerHTML = student; // l'oggetto apparirà come object Object in quanto non destrutturato
document.getElementById("myObject2").innerHTML = "Studente: " + student.name + " " + student.surname + "<br/ >" +
'Età: ' + student.age + "<br/>" + 'Classe: ' + student.batch + "<br/>" + 'Dotato di webcam: ' + (student.hasWebcam ? "Si" : "No");// oggetto destrutturato

// modifica dell'oggetto
student.name = "Mario";// modifica di una proprietà
student.city = "Napoli";// aggiunta di una proprietà
delete student.batch;// eliminazione di una proprietà

// copia dell'oggetto sulla stessa allocazione di memoria rendendoli gemelli siamesi e se ne cambia uno, cambiano entrambi
const student2 = student;

// copia dell'oggetto tramite spread operator (...), creando due oggetti indipendenti l'uno dall'altro
const student3 = {...student};
student3.name = "Giovanni";
console.log(student);
console.log(student3);

// copia dell'oggetto tramit object assign che trasforma l'oggetto clonato in un modulo nativo 
const student4 = Object.assign(student); 

