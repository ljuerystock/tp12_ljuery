function calcul_moyenne() {
    var n1 = prompt("Donner la prémière note (/20):");
    var n2 = prompt("Donner la deuxième note (/20):");
    var n3 = prompt("Donner la troisième note (/20):");

    var somme = Number(n1) + Number(n2) + Number(n3);
    document.write("Voici la somme :" + somme + "<br>");
    
    var moyenne = somme/3;
    document.write("Voici la moyenne: " + moyenne +"<br>");

    if (moyenne < 10 ){
        document.write("Redoublant");
    } 
    else if (moyenne < 12 ){
        document.write("Admis – Passable");
    } 
    else if (moyenne < 14 ){
        document.write("Admis – Bien");
    } 
    else {
        document.write("Admis – Très Bien");
    }
}

function test_temp() {
    var n1 = prompt("Saisir la température (°C):");

    if (n1 < 10) {
        document.write("La température est Froide");
    }
    else if (n1 < 25) {
        document.write("La température est Normal");
    }
    else {
        document.write("La température est Chaude");
    }
}

function comp_nmb() {
    var n1 = prompt("Choisir un 1er nombre:");
    var n2 = prompt("Choisir un 2nd nombre:");

    if (n1 < n2) {
        document.write("Le plus grand est le 2nd nombre:" + " " + n2 + "<br>");
        document.write("Le plus petit est le 1er nombre:" + " " + n1 + "<br>");
    }
    else {
        document.write("Le plus grand est le 1er nombre:" + " " + n1 + "<br>");
        document.write("Le plus petit est le 2nd nombre:" + " " + n2 + "<br>")
    }
}