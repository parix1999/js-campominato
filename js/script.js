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
listComputerNum = [];
listInputUtente = [];

for (var i = 1; i <= 5; i++) {
    var utenteNumber = parseInt(prompt('Inserisci numero'));
}
var numbersUtente = utenteNumber[i].push(listInputUtente);

var computerNumber = randomNumber(1, 100);
for (var x = 1; x <= 16; x++){
    var computersNumbers = computerNumber[x].push(listComputerNum);
}
console.log(computerNumber)


var onlyOneNumberComputer = listComputerNum.push(computerNumber);


console.log(listComputerNum)
console.log(listInputUtente)            // Fino a qua funziona 

/* Devo trovare il modo di usare la funzione checkNumber per 
controllare se è gia presente nella lista il numero, e far in modo che l'input duri 84 volte */




