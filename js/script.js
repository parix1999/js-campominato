function randomNumber (min,max) {
    return Math.floor(Math.random() * (max - min + 1)+ min);
}


listComputerNum = [];
while (listComputerNum.lengh < 16){
    var numeriComputer = randomNumber(1,100);
    
    if (!numeriComputer.includes(listComputerNum)){
        var numbersComputer = numeriComputer.push(listComputerNum);
    }else{
        alert('no è gia presente')
    }
}
console.log(listComputerNum);




