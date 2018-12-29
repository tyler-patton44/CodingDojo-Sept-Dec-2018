//1
function NegNumber(arr){
for(var i=0; i<arr.length; i++){
    if(arr[i]<0){
        arr[i] = 0;
    }
}
return arr;
}
NegNumber([1,2,-1, -3]);

//2
function moveForward(arr){
    for(var i=0; i<1; i++){
        temp = arr[i];
        arr[i]=arr[arr.length-1];
        arr[arr.length-1] = 0;
}
return arr;
}
moveForward([1,2,3,5,6,7,8,9,10]);

//3
function returnReversed(arr){
for(var i=0; i<=(arr.length-1)/2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
return arr;
}
returnReversed([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]);

//4
function doubArray(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]);        
        newArr.push(arr[i]);
    }
    return newArr;
}
doubArray([4,"Ulysses", 42, false]);