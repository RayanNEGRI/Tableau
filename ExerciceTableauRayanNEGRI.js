"use strict"; //signifie on va travailler avec java strict pour avoir aucune erreur

/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 * 
 */




let names=[]; //déclaration d'un tableau names avec aucune valeur
names.push('Vincent',"Paul",'Arthur'); // ajout dans le tableau names avec push des valeurs vincent,paul et arthur

names.forEach(name =>{    //la boucle forEach affiche chaque élément du tableau en ajoutant va a la peche
    name += '  va a la peche ';
    console.log(name)
})
