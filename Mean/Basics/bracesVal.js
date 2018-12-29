function validBraces(string){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    var braces = [];
    for(var i=0; i<string.length; i++){
        if(string[i] === "(" || string[i] === "[" || string[i] === "{"){
            braces.push(string[i]);
        }
        else if(pairs[string[i]] !== undefined){
            if(braces[braces.length-1] !== pairs[string[i]]){
                return false;
            }
            else{
                braces.pop;
            }
        }
    }
    return braces.length === 0;
}
console.log(validBraces("{(())}"));
console.log(validBraces("{(({)})}"));