//Exercice 1
//Créer un tableau mois et l'initialiser avec le nom des douze mois de l'année.
let tabmois =['janvier', 'fevrier' ,'mars', 'avril','mai', 'juin', 'juillet',
 'aout', 'septembre','octobre','novembre','décembre']
 console.log (tabmois);
 console.table (tabmois)

/*Exercice 2
Avec le tableau de l'exercice 1, afficher la valeur de la troisième ligne 
de ce tableau.*/
console.log (tabmois[2]);

/*Exercice 3
Avec le tableau de l'exercice , afficher la valeur de l'index 5.*/

console.log (tabmois[5]);

/*Exercice 4
Avec le tableau de l'exercice 1,
modifier le mois de aout pour lui ajouter l'accent manquant.*/
tabmois.splice(7,1,'août');
console.table(tabmois);

//Exercice 5
//Créer un tableau associatif avec comme index le numéro des départements des Hauts de France et en valeur leur nom.
let hauts = { 02 : "Aisne", 59 : "Nord", 60 : "Oise", 62 : 'Pas de Calais', 80 : 'Somme' };
console.table(hauts);

//Exercice 6
//Avec le tableau de l'exercice 5, afficher la valeur de l'index 59.
console.log (hauts [59]);

//Exercice 7
//Avec le tableau de l'exercice 5, ajouter la ligne correspondant au département de la ville de Reims 51.
hauts [51] ='marne';
console.table (hauts);

//Exercice 8
//Avec le tableau de l'exercice 1 et une boucle, afficher toutes les valeurs de ce tableau.
tabmois.forEach (function(item,index,array){
console.log(item,index);
});

//Exercice 9
//Avec le tableau de l'exercice 5, afficher toutes les valeurs de ce tableau.
for(let key in hauts)
console.log(hauts[key]);


//Exercice 10
//Avec le tableau de l'exercice 5, 
//afficher toutes les valeurs de ce tableau ainsi que les clés associés.
// Cela pourra être, par exemple, de la forme : "Le département" + nom_departement
// + "a le numéro" + num_departement*/
for (let key in hauts) 
console.log ("Le département " + hauts[key] + " à le numéro " + [key])
console.log (`le departement ${hauts[key]} à le numéro ${[key]}`)

