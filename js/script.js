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

/* ora si genera un ciclo while per chiedere all'utente i numeri da inserire nell' array
e poi per far in modo da non far ripetere il numero selezionato.
*/
while (numUtente.length < 5) {
    // inPut utente:
    var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
    // to do : e se l'utente inserisce un numero > di 100 o minore di 1??

    // controllo del numero inserito dell'utente se è all'interno dell'array, e che non sia anche lo stesso generato dal computer:
    if (!numUtente.includes(numeroUtente)) {
        // se il numero dell'utente non c'è nella lista dei numeri generati dal computer allora si continua:
        if (!numComputer.includes(numeroUtente)) {
            numUtente.push(numeroUtente);
            alert('Hai vinto');
        // se il numero è presente nella lista generata dal computer si trova la bomba e quindi si perde: 
        }else{
            alert('Hai perso');
        }        
    }
}

console.log('Numeri utente', numUtente);
