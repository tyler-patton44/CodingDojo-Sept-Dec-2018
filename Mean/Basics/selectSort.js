function selector(arr, num){
    if(arr[(arr.length-1)/2] > num){
        for(var i=0; i<arr.length/2; i++){
            if(arr[i] === num){
                return i;
            }
        }
    }

    if(arr[(arr.length-1)/2] < num){
        for(var x=(arr.length-1)/2; x<arr.length; x++){
            if(arr[x] === num){
                return x;
            }
        }
    }
    if(arr[(arr.length-1)/2] === num){
      return (arr.length-1)/2;
    }
    return -1;

}
console.log(selector([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200],78));