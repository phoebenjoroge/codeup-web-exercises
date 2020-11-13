function skipNumber(){
    var num = prompt("Please enter an odd number between 1 and 50");
    while (isNaN(num) || (num % 2 ===0) || (num <1)|| (num >50)){
        num = prompt("Please enter a number between 1 and 50");
    }
    console.log("Number to skip is " + num);
    for(var i =0; i <50; i++){
        if(i == num) {
            console.log("Yikes! Skipping number " + num);
        }else if (num %2 === 1){
            console.log("Here is an odd number: " + num);
        }
    }
}
// skipNumber()


// function skipNumber(){
//     var num = prompt("Please enter an odd number between 1 and 50");
//     for(var num =0; num <50; num++){
//         //num = prompt("Please enter an odd number between 1 and 50");
//         if(num %2 === 1){
//             console.log("Here is an odd number: " + num);
//         }else if (num == 27) {
//             continue;
//         }
//     }
// }