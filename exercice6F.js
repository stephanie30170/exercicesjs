// Faire une fonction qui prend trois paramètres : nom, prenom et age. Elle doit renvoyer une chaine de la forme : "Bonjour" + nom + prenom + ", tu as " + age + "ans".

function concat (nom, prenom, age){
    return ("Bonjour " + nom +' '+ prenom + ", tu as " + age + " ans");
}
let resultat = concat ('boissiere', 'stephanie', 25)
let resultat2 = concat ('Perrot',' Pascal',48)
console.log(resultat + resultat2);