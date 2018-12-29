//#1

var myString: any;
myString = "Bee stinger";
myString = 9;
// myString was type string, change to any so i can be any type.
//=================================================================

//#2
function sayHello(name: string){
    return `Hello, ${name}!`;
}

console.log(sayHello("Kermit"));
console.log(sayHello("9"));
 // You can either change name type to any or make the #9 a string
//=================================================================

//#3
function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));

 //make middle name an optional paramater
//=================================================================

//#4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
 // This seems to work fine:
console.log(graduate(christine));
 // This one has problems:
console.log(graduate(jay));
//In jay you can make it belts instead of belt, it didnt match with students params
//=================================================================

//5
class Ninja2 {
    fullName: string;
    constructor(public firstName: string, public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja2("Tyler", "Patton");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    firstName: "Alan",
    lastName: "Turing"
 }
 const turingNinj = new Ninja2(turing.firstName, turing.lastName);
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja2){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turingNinj));

 //Shane didnt have a first and last name, make turing a Ninja
//=================================================================

//6 
var increment = (x) => x + 1;
// This works great:
console.log(increment(3));

var square = (x) => x * x;
// This is not showing me what I want:
console.log(square(4));

// This is not working:
var multiply = (x,y) => x * y;
console.log(multiply(2,5));

// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;    
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}
console.log(math);
// Take the brackets off square because it only does one thing, multiply need () 
// around x and y because there are two params, math needed brackets.
//=================================================================

//7
class Elephant {
    constructor(public age: number){
        this.age = age;
    }
    birthday = () => this.age++;
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 
 //you can either use arrow function on birthday or do .birthday()
//=================================================================