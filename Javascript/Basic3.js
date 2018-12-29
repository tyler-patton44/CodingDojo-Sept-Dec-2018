//1
function NtoS(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i] = "big";
        }
    }
    return arr;
}
NtoS([-1,2,3,4,5,-6,7,8]);

//2 
function LowHigh(arr){
    var high = arr[0];
    var low = arr[0];
    for(var i=0; i<arr.length; i++){
        if(high<arr[i]){
            high = arr[i];
        }
        if(low>arr[i]){
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}
LowHigh([1,2,3,4,5,6,1,10,15]);

//3
function wierd(arr){
    var odd = 0;
    console.log(arr[arr.length - 2]);
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 != 0){
            odd = arr[i];
            return odd;
        }
    }
}
wierd([1,2,5,10,2,4]);

//4
function squares(arr){
    var arrnew = []
    for(var i=0; i<arr.length; i++){
        arr[i] *= arr[i];
        arrnew.push(arr[i]);
    }
    return arrnew;
}
squares([5,10,3,6]);

//5
function NumPos(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            count += 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}
NumPos([-1,2,-3,-4,-5]);

//6
function OorE(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 != 0 && arr[i+1]%2 != 0 && arr[i+2]%2 != 0){
            console.log("That's odd!");
    }
    if(arr[i]%2 == 0 && arr[i+1]%2 == 0 && arr[i+2]%2 == 0){
        console.log("Even more so!");
}
}
}
OorE([1,1,1,6,6,6]);

//7
function second(arr){
    for(var i=0; i<arr.length; i++){
        if(i%2 != 0){
            arr[i] += 1;
        }
    }
    return arr;
}
second([1,2,3,4,5,6,7,8]);

//8
function StringToNum(arr){
    for(var i=arr.length-1; i>0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
StringToNum(["tyler", "dojo", "hello"]);

//9 
function addSeven(arr){
    var arrnew = []
    for(var i=1; i<arr.length; i++){
        arr[i] += 7;
        arrnew.push(arr[i]);
    }
    return arrnew;
}
addSeven([1,2,3,4,5]);

//10
function swap(arr){
    for(var i=0; i<(arr.length-1)/2;i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
swap([8,7,6,5,4,3,2,1]);

//11
function turnNeg(arr){
    arrnew = []
    for(var i=0; i<arr.length; i++){
        if(arr[i]>=0){
            arr[i] = (arr[i]/arr[i]) - (arr[i] + 1);
        }
        arrnew.push(arr[i]);
    }
    return arrnew;
}
turnNeg([-4,-8,22,35,10]);

//12
function alwaysHungry(arr){
    var full = false;
    for(var i=0; i<arr.length; i++){
        if(arr[i] === "food"){
            console.log("Yummy!");
            full = true;
        }
    }
    if(full === false){
        console.log("I'm Hungry!")
    }
}
alwaysHungry(["food", "not", "not"]);

//13
function swapCenter(arr){
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    temp2 = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2; 
    return arr;
}
swapCenter([1,2,3,4,5,6]);

//14
function scale(Y, arr){
    for(var i=0; i<arr.length; i++){
        arr[i] *= Y;
    }
    return arr;
}
scale(5, [1,2,3,4,5]);