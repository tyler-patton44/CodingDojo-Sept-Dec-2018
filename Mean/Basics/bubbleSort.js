function bubbleSorter(arr){
    for(var i=0; i<arr.length; i++){
        for(var x=0; x<(arr.length - 1 - i); x++){
            if(arr[x]>arr[x+1]){
                var temp = arr[x];
                arr[x] = arr[x+1];
                arr[x+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSorter([9,7,134,4,5,10]));