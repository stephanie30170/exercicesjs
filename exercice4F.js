// Faire une fonction qui prend en paramètre deux nombres. La fonction doit retourner : Le premier nombre est plus grand si le premier nombre est plus grand que le deuxième Le premier nombre est plus petit si le premier nombre est plus petit que le deuxième Les deux nombres sont identiques si les deux nombres sont égaux
// si nbre1 > nbre2 alors retourner 'Le premier nombre est plus grand'
// sinon si nbre1< nbre2 alors retourner 'le premier nombre est plus petit'
// alors retourner 'les deux nombres sont identiques'
const nbre1 = 2;
const nbre2 = 2;
if (nbre1 > nbre2){
    console.log('Le premier nombre est plus grand');
    return 'Le premier nombre est plus grand';
} else if (nbre1 < nbre2){
    console.log('le premier nombre est plus petit');
    return 'le premier nombre est plus petit';
} else {
    console.log('les deux nombres sont identiques');
    return 'les deux nombres sont identiques';
}

