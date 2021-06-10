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
var utenteNumber = parseInt(prompy('Inserisci numero'));
var computeNumber = randomNumber(1, 100);

var onlyOneNUmberComputer = listComputerNum.push(computeNumber);
var onlyOneNUmberUtente = listInputUtente.push(utenteNumber);

listComputerNum = [];
listInputUtente = [];

