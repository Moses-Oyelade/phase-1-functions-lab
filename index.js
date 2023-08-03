// Code your solution in this file!
//distance in Blocks from Hq
function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        someValue = someValue - 42;
    } else {
        someValue = 42 - someValue;
    }
    return someValue;
}
distanceFromHqInBlocks(34);

//distance in Feet from Hq
function distanceFromHqInFeet(someValue){
    
    if (someValue > 42){
        someValue = ((someValue - 42) * 264);
    } else {
        someValue = ((42 - someValue) * 264);
    }
    return someValue;
}
distanceFromHqInFeet(34);

//diatanceTravelledInFeet
function distanceTravelledInFeet(start, destination){
    let distance;
    if (start > destination){
        distance = ((start - destination) * 264);
    } else {
        distance = ((destination - start) * 264);
    }
    return distance;
}
distanceTravelledInFeet(34, 28);

//Fare price
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
     
    if (distance <= 400){
       
        return 0;
        
     } else if (distance >400 && distance <= 2000){
      
     return ((distance - 400)  * 0.02);
     
    
     } else if  (distance > 2000 && distance <= 2500){
       
     return 25
        
     } else {
        return 'cannot travel that far'
     }
        
     
    }
    calculatesFarePrice(34, 24)