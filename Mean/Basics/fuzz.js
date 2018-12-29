function fuzzBuzz(n){
    if(typeof n != "number"){
        return false;
    }
    arr = []
    for(var i=1; i<=n; i++){
        flag = false;
        if(i%3 === 0 && i%5 === 0){
            arr.push("FizzBuzz");
            flag = true;
        }
        if(i%3 === 0 && i%5 !== 0){
            arr.push("Fizz");
            flag = true;
        }
        if(i%3 !== 0 && i%5 === 0){
            arr.push("Buzz");
            flag = true;
        }
        if(flag !== true){
            arr.push(i);
        }
    }
    return arr;
}