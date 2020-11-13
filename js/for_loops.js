function showMultiplicationTable(num){
    for(let i=1; i<=10; i++){
       console.log(num + " X " + i + " = " + (num * i));
    }
}
//showMultiplicationTable(9)
function randomNumbers(){
    for(var i=1; i<=10; i++) {
        var randomNum = Math.floor(Math.random() * (200 - 20) + 20);
        if (randomNum % 2 == 0) {
            console.log(randomNum + " is even");
        } else
            console.log(randomNum + " is odd");
    }
}
//randomNumbers()
function printNumbers() {
    var output = " ";
    for (var i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
        // for (var j=1; j<=i; j++){
        //     output += i + ' ';
        // }
        // console.log(output);
        // output = ' ';
    }
}
//printNumbers();
function mutipleOfFive(){
    for(var i=100; i>0; i--){
       if(i % 5== 0)
           console.log(i +' \n');
    }
}
//mutipleOfFive();