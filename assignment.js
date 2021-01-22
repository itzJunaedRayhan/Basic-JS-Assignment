//  https://github.com/junaedislam158/Basic-JS-Assignment




//      kilometerToMeter function       ==>     For Convert Kilometer to Meter
function kilometerToMeter(kilometer){
    if(kilometer <= 0){
        return "please put a valid Number";
    }else{
        var meter = kilometer * 1000;
        return meter;
    }
}

// var output = kilometerToMeter(6);
// console.log('totall meter : ', output);








//      budgetCalculator function       ==>     For Calculate total Budget to need buy those Electronics
function budgetCalculator(watch,phone,laptop){
    if(watch < 0){
        return "put a valid Number";
    }else if(phone < 0){
        return "put a valid Number";
    }else if(laptop < 0){
        return "put a valid Number";
    }else{
        var watchPrice      =   Math.floor(watch) * 50;
		var phonePrice      =   Math.floor(phone) * 100;
		var laptopPrice     =   Math.floor(laptop) * 500;
		var totallPrice     =   watchPrice + phonePrice + laptopPrice;
		return totallPrice;
    }
}

// var totall = budgetCalculator(4,5,10);
// console.log('totall budget : ', totall);









//  hotelCost function      =>      For Calculate the Hotel cost i want to stay
function hotelCost(days){
    var cost = 0;
    if( days <= 0){
        return "please give a valid Number";
    }else if( days <= 10){
        cost = Math.floor(days) * 100;
    }else if( days <= 20){
        var FirstTenDaysCost    = 10 * 100;
        var RestOfDays          = Math.floor(days) - 10;
        var SecondTenDaysCost       = RestOfDays * 80;
        cost    = FirstTenDaysCost + SecondTenDaysCost;
    }else{
        var FirstTenDaysCost    = 10 * 100;
        var SecondTenDaysCost   = 10 * 80;
        var RestOfDays          = Math.floor(days) - 20;
        var RestOfDaysCost      = RestOfDays * 50;
        cost    = FirstTenDaysCost + SecondTenDaysCost + RestOfDaysCost;
    }
    return cost;
}

// var totallCost = hotelCost(25);
// console.log('Totall Cost : ',totallCost);






//      megaFriend Function     ==>     For Find The Largest Name
var Names = ['Junaed Islam', 'Ragnar Lothbrok', 'Rafi', 'Bappy Rehman', 'NH Pahel', 'Foysol', 'Imran'];
function megaFriend(Names){
    //  For Loop For checking Elements of array are STRING or NOT
    for ( var i=0; i< Names.length; i++ ) {
        if (typeof Names[i] != "string")
            return 'Please Put A String as a Name';
    };


    var NameLength = 0;
    var LongestName = Names[0];
    for(i = 0; i < Names.length; i++){
        var element = Names[i].length;

        if(element > NameLength){
            var NameLength = element;
            LongestName = Names[i];
        }
    }
    return LongestName;
}

// var LargestName = megaFriend(Names)
// console.log('Largest Name is : ',LargestName);





