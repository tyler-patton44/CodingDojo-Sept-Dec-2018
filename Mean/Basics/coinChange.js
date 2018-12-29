function changeMaker(cash){
    var cashier = {
        "dollars": 0,
        "quarters": 0,
        "dimes": 0,
        "nickles": 0,
        "pennies": 0
    };
    var change = cash;
    while(change > 0){
        if(change >= 100){
            cashier.dollars += 1;
            change -= 100;
        }
        if(change < 100 && change >= 25){
            cashier.quarters += 1;
            change -= 25;
        }
        if(change < 25 && change >= 10){
            cashier.dimes += 1;
            change -= 10;
        }
        if(change < 10 && change >= 5){
            cashier.nickles += 1;
            change -= 5;
        }
        if(change < 5 && change >= 1){
            cashier.pennies += 1;
            change -= 1;
        }
    }
    return cashier;
}
console.log(1223);