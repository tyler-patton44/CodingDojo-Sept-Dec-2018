//1 
function makeArray(){
    var arr = []
for(var i=1; i<256; i++){
    arr.push(i)
}
return arr;
}
makeArray();

//2
function even1000(){
    var sum = 0;
    for(var i=1; i<1001; i++){
        if(i%2 == 0){
            sum += i;
        }
    }
    return sum;
}
even1000();

//3
function odd5000(){
    var sum = 0;
    for(var i=1; i<5001; i++){
        if(i%2 != 0){
            sum += i;
        }
    }
    return sum;
}
odd5000();

//4
function arraySum(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
arraySum([1,2,4,5,6,7,8]);

//5
function findMax(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}
findMax([1,2,3,4,5,6,7,8]);

//6
function findAvg(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var avg = sum/arr.length;
    return avg;
}
findAvg([6,2,3,9]);

//7
function oddArray(){
    arr = []
    for(var i=0; i<51; i++){
        if(i%2 != 0){
            arr.push(i);
        }
    }
    return arr;
}
oddArray();

//8
function greaterThan(Y, arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(Y<arr[i]){
            count += 1;
        }
    }
    return count;
}
greaterThan(10, [2,6,9,10,12,15,20]);

//9 
function squares(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}
squares([5,10,3,6]);

//10
function noNeg(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]< 0){
            arr[i] = 0;
        }
    }
    return arr;
}
noNeg([1,5,-8,-1,0,12]);

//11
function maxMinAvg(arr){
    var dict = {
        max: arr[0],
        min: arr[0],
        avg: 0
    }
    var sum = arr[0];
    for(var i=1; i<arr.length; i++){
        sum += arr[i];
        if(dict.max<arr[i]){
            dict.max = arr[i];
        }
        if(dict.min>arr[i]){
            dict.min = arr[i];
        }
    }
    dict.avg = sum/arr.length;
    return dict;
}
maxMinAvg([5,10,2,4,6,8,12]);

//12
function Swap(arr){
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
Swap([1,2,3,4,5,6,7,8]);

//13
function NtoS(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = "T-Hole";
        }
    }
    return arr;
}
NtoS([-1,2,3,4,5,-6,7,8]);