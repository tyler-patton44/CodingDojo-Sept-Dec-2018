//1 
var arr = [1,2,3,4,5,6,7,8,9]
var y = 5;
for(var i=0; i<arr.length; i++){
    if(arr[i]>y){
        console.log(arr[i])
    }
}

//2
function MaxMinAvg(arr){
max = arr[0];
min = arr[0];
sum = arr[0];
for(var i=1; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
    if(min>arr[i]){
        min = arr[i];
    }
    sum = sum + arr[i];
}
avg = sum/arr.length;
console.log(max, min, avg);
}
MaxMinAvg([5,4,8,9,6]);

//3
function NegNumbers(arr2){
    for(var i=0; i<arr2.length; i++){
        if(arr2[i]<0){
            arr2[i] = "Dojo"
        }
    }
    return arr2;
}
NegNumbers([1,2,-3,-5,5]);

//4
function removeVals(arr3){
    arr3.splice(2,3);
    return arr3;
}
removeVals([20,30,40,50,60,70]);
