function showMultiplicationTable(num){
    for(let i=1; i<=10; i++){
       console.log(num + " * " +i + " = " + (num * i));
    }
}

function randomNumbers(){
    for(var i=1; i<=20; i++) {
        var randomNum =Math.ceil(Math.random() * 100);
        if (randomNum > 20 && randomNum < 200) {
            if (randomNum % 2 == 0) {
                console.log(randomNum + " is even");
            } else
                console.log(randomNum + " is odd");
        }
    }
}
function printNumbers() {
    var output = " ";
    for (var i = 1; i < 10; i++) {
        for (var j=1; j<=i; j++){
            output += j + ' ';
        }
        console.log(output);
        output = ' ';
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