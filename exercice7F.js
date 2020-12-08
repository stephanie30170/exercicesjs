// Faire une fonction qui prend deux paramètres : age et genre. Le paramètre genre peut prendre comme valeur Homme ou Femme. La fonction doit renvoyer en fonction des paramètres (gérer tous les cas) : Vous êtes un homme et vous êtes majeur Vous êtes un homme et vous êtes mineur Vous êtes une femme et vous êtes majeur Vous êtes une femme et vous êtes mineur


function genreAge (genre, age){
    if (genre == 'homme' && age >= 18){
    return 'Vous êtes un homme et vous êtes majeur';
    }
    else if (genre == 'homme' && age < 18){
        return 'Vous êtes un homme et vous êtes mineur';
    }
    else if (genre == 'femme' && age >= 18){
        return 'vous êtes une femme et vous êtes majeur';
    }
    else {
        return 'vous êtes une femme et vous êtes majeur';
    }
}
let resultat = genreAge ("femme", 20);
console.log(resultat);