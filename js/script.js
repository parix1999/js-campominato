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
var numeriComputer = randomNumber(1,100);
listComputerNum = [];
while (listComputerNum.lenght <= 16){
    if (!numeriComputer.includes(listComputerNum)){
        var numbersComputer = numeriComputer.push(listComputerNum);
    }else{
        alert('no è gia presente')
    }
}
console.log(listComputerNum);




