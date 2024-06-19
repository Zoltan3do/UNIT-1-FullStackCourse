let stop = 1;

while (stop < 10) {
    console.log(stop);
    stop++;
}

do {
    console.log(stop);
    stop++;
} while (stop < 10);

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

//iterazione di un array 
const studenti = ["Io", "tu", "egli", "noi", "voi", "essi"];
const listastudenti = document.getElementById("studenti");
for (let i = 0; i < studenti.length; i++) {
    listastudenti.innerHTML += "<li>" + studenti[i] + "</li>";
}

//table array di oggetti
const usersList = document.getElementById("usersList");
const usersTotal = document.getElementById("usersTotal");
const users = [
    {
        name: "Mario",
        surname: "Rossi",
        age: 25,
        email: "mariorossi@gmail.com"
    },
    {
        name: "Aldo",
        surname: "Moro",
        age: 22,
        email: "Aldfo@gmail.com"
    },
    {
        name: "Maria",
        surname: "Rebibbia",
        age: 21,
        email: "maria@gmail.com"
    }
];

for (let i = 0; i < users.length; i++) {
    usersList.innerHTML +=
        "<tr>" +
        "<td>" + users[i].name + "</td>" +
        "<td>" + users[i].surname + "</td>" +
        "<td>" + users[i].age + "</td>" +
        "<td>" + users[i].email + "</td>" +
        "</tr>";
}

usersTotal.innerText += users.length;