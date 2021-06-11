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
// variabile per controllare la fine del gioco
var checkGame = false; 


/* ora si genera un ciclo while per chiedere all'utente i numeri da inserire nell' array
e poi per far in modo da non far ripetere il numero selezionato.
*/
while (numUtente.length < 84) {
    // inPut utente:
    var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
    // to do : e se l'utente inserisce un numero > di 100 o minore di 1 o se non è un numero??
    while ((numeroUtente > 100 || numeroUtente < 1) || (isNaN(numeroUtente))) {
        alert('No devi inserire un NUMERO e che sia maggiore di 1 e minore di 100');
        numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
    }

    // controllo del numero inserito dell'utente se è all'interno dell'array, e che non sia anche lo stesso generato dal computer:
    if (!numUtente.includes(numeroUtente)) {
        // se il numero dell'utente non c'è nella lista dei numeri generati dal computer allora :
        if (!numComputer.includes(numeroUtente)) {
            // me lo aggiungi alla array dell'utente;
            numUtente.push(numeroUtente);
            // mi stampi un all'alert che non c'è e quindi me lo aggiungi:
            alert('niente bomba sei salvo, al momento');
            console.log('Numeri utente', numUtente);
        
        // se il numero è presente nella lista generata dal computer si trova la bomba e quindi si perde: 
        }else{
            // mi avvisi che ho trovato la mina e quindi ho perso:
            alert('Booom');
            // qui il controllo sara falso per via della perdita: 
            checkGame = true;
            // esci dal ciclo e finisce l'iterazione:
            break; 
        }      
    }else{
        alert('Numero già inserito')
    }  
}

if (!checkGame) {
    document.getElementById('result').innerHTML += 'Hai vinto e indovinato tutti i numeri : ' + ' '  + numUtente.length ;
}else{
    document.getElementById('result').innerHTML += 'Hai perso ma hai indovinato: '+ ' '  + numUtente.length ;
}