// generatore di numeri randomici
function generateNumber (min, max) {
    var result = Math.floor(Math.random() * (max - min + 1)+ min);
    return result; 
}

// ora si crea la lista vuota dove si mettono i numeri generati dal computer:

numComputer = [];

// si controlla se il numero che si genera sia già presente nella array dato che non deve ripetersi:
while (numComputer.length < 16) {
    // si genera il numero attraverso la funzione, ed è dentro al while perchè deve ripetersi per 16 volte.
    var randomNumber = generateNumber(1, 100);
    // ora se il numero è già presente nella array non me lo pusha, senno si:
    if (!numComputer.includes(randomNumber)){
        // quindi se non è incluso come scritto nella condizione sopra me lo pusha:
        numComputer.push(randomNumber);
    }   
}
console.log('Numeri computer', numComputer);

// si fa la lista che conterrà i numeri inseriti dall'utente; 
numUtente = [];

