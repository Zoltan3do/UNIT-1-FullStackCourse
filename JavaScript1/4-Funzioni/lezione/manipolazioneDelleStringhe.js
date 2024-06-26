const saluto = "Ciao studenti. Salutiamo tutti!";

let pos = saluto.indexOf("studenti");
let lastPos = saluto.lastIndexOf("studenti");
let ricerca = saluto.search("Ciao");
let lunghezza = saluto.length;
let sottostringa = saluto.substring(0, 10);
let slice = saluto.slice(0, 10);
let rimpiazza = saluto.replace("parola da sostutuire", "parola che sostituisce"); //case sensitive
let rimpiazzaTutto = saluto.replaceAll("parole da sostuituire", "parole che sostituiscono");
let concatena = saluto.concat(" ciao ");
let rimuovereGliSpazi = saluto.trim();
let trovaCarattereInUnIndice = saluto.charAt(5);
let creaArray = saluto.split(" ");



