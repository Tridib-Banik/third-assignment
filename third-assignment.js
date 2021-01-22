//kilometerToMeter

function kilometerToMeter(kilometer){
    if(kilometer<0){
        return 'enter a valid distance value'; //extra-part
    }
    else{
        var meter=kilometer*1000;
        return meter;
    }
}


//budgetCalculator


function budgetCalculator(watch,mobile,laptop){
    var totalWatch =watch*50;
    var totalMobile =mobile*100;
    var totalLaptop =laptop*500;
    var totalElement=totalWatch+totalMobile+totalLaptop;
    return totalElement;
}


//hotel cost

function hotelCost(day){
    var totalAmount=0;

    if(day>0 && day<=10){
         totalAmount=day*100;
        
    }
    else if(day>10 && day<=20){
        var fistTimeCost=10*100;
        var resOfDay=day-10;
        var secondTimeCost=resOfDay*80;
        totalAmount=fistTimeCost+secondTimeCost;
        
    }
    else if(day>=21){
        var fistTimeCost=10*100;
        var secondTimeCost=10*80;
        var restOfDay=day-20;
        var otherDay=restOfDay*50;
        totalAmount=fistTimeCost+secondTimeCost+otherDay;
    }
    else{
        var warning=('enter a valid value'); //extra part
        return warning;
    }
    return totalAmount;
}



//MegaFriend

 function megaFriend(names){
   var largest =names[0];

   if(names.length>0){
       for(var i=1;i<names.length;i++){
           if(largest.length<names[i].length){
               largest=names[i];
           }
       }
       return largest;
   }
   else{
       return("blank array"); //if array is blank it will show blank array.
   }

}


