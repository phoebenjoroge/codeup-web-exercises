/*This code generates random number between one and fifty and figures is seller has sold
50 cones for the day, which is the minimum.

 */
function sellCones(){
    var allCones = Math.floor(Math.random() * 50) + 50;
    do{
     //   console.log("Cones available for sale today " + allCones); //cones available for sale
        var soldCones= Math.floor(Math.random() * 5) + 1;   //sold cones
        var availableCones = allCones - soldCones;         //cones still available for sale
        console.log(soldCones + " cones sold, you have " + availableCones + " left to sell for the day");
        soldCones++;
    }while(soldCones < allCones);
}
//sellCones();