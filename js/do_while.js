/*This code generates random number between one and fifty and figures is seller has sold
50 cones for the day, which is the minimum.

 */
function sellCones(){
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Cones available for sale today " + allCones); //cones available for sale
    do{
        if(allCones > 0 ) {
            var soldCones = Math.floor(Math.random() * 5) + 1;   // generate number of cones sold
            allCones = allCones - soldCones;         //cones still available for sale
            console.log(soldCones + " cones sold, you have " + allCones + " left to sell for the day");
        }else if(soldCones <= 0) {
            console.log("Cannot sell you " +(allCones) +" cones, I only have " + (allCones - soldCones));
        }
    }while(allCones > 0);

    console.log("I have " + allCones +" cones left, yay I sold the all!");
}


sellCones();