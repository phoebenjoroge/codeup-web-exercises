function skipNumber(){
    var num = prompt("Please enter an odd number between 1 and 50");
    for(var num =0; num <50; num++){
        //num = prompt("Please enter an odd number between 1 and 50");
        if(num %2 === 1){
            console.log("Here is an odd number: " + num);
        }else if (num == 27) {
            continue;
        }
    }
}
//skipNumber()