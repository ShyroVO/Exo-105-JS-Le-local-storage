const storage = window.localStorage;

storage.setItem('valeur', '18');
storage.setItem('valeur2', 'Material');
storage.setItem('valeur3', 'Black');

function affichage (){
    document.getElementById('result').innerHTML = storage.getItem('valeur3');

    console.log("Thème " + storage.getItem('valeur3') + ", type " + storage.getItem('valeur2') + " et police de caractères " +
        storage.getItem('valeur') + " px");

}

affichage();

storage.setItem('valeur', '16');
storage.setItem('valeur2', 'Wood');
storage.setItem('valeur3', 'White');

affichage();

let tab = [0, 1, 2, 3, 4];

// Tableau dans local storage:
storage.setItem('valeur4', tab);

console.log(storage.getItem('valeur4'));
