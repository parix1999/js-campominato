function randomNumber (min,max) {
    return Math.floor(Math.random() * (max - min + 1)+ min);
}
function checkNumber (array, numMax) {
    while (array.lengh <= numMax) {
        if (numMax.includes(array.lengh)) {
            return true;
        }else{
            return false;
        }
    }
}
var utenteNumber = parseInt(prompt('Inserisci numero'));
var computeNumber = randomNumber(1, 100);
console.log(computeNumber)

listComputerNum = [];
listInputUtente = [];
var onlyOneNUmberComputer = listComputerNum.push(computeNumber);
var onlyOneNUmberUtente = listInputUtente.push(utenteNumber);

console.log(listComputerNum)
console.log(listInputUtente)            // Fino a qua funziona 

/* Devo trovare il modo di usare la funzione checkNumber per 
controllare se è gia presente nella lista il numero, e far in modo che l'input duri 84 volte */




