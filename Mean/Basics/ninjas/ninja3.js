class Ninja{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName(){
        return "My ninja name is "+this.name;
     }
 
    showStats(){
         return "Name: "+this.name+", Health: "+this.health+", Speed:"+this.speed+", Strength: "+this.strength;
     }
 
    drinkSake(){
         this.health += 10;
         return "Sip that drank";
     }
 
    punch(hit){
         if(!(hit instanceof Ninja)){
             return "Not a ninja"; 
         }
         else{
             hit.health -= 5;
             return this.name+" punched "+hit.name+" for 5 health";
         }
     }
 
    kick(hit){
         if(!(hit instanceof Ninja)){
             return "Not a ninja";
         }
         else{
             hit.health -= 5 * this.strength;
             return this.name+" kicked "+hit.name+" for "+ this.strength*5+" health";
         } 
     }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        return "What one programmer can do in one month, two programmers can do in two months.";
    }
}