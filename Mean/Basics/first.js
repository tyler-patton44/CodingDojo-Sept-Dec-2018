function maxMinAvg(arr){
    max = arr[0];
    min = arr[0];
    sum = arr[0];
    for(var i=1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum/arr.length;
    return "Max:"+max + " Min:"+min+ " Avg:"+avg;
}