function Ninja(name, health=100){
    this.name = name;
    this.health = health;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
       return "My ninja name is "+this.name;
    }

    this.showStats = function(){
        return "Name: "+this.name+" Health: "+this.health+" Speed:"+ speed+" Strength: "+strength;
    }

    this.drinkSake = function(){
        this.health += 10;
        return "Sip that drank";
    }

    this.punch = function(hit){
        if(!(hit instanceof Ninja)){
            return "Not a ninja"; 
        }
        else{
            hit.health -= 5;
            return this.name+" punched "+hit.name+" for 5 health";
        }
    }

    this.kick = function(hit){
        if(!(hit instanceof Ninja)){
            return "Not a ninja";
        }
        else{
            hit.health -= 5 * strength;
            return this.name+" kicked "+hit.name+" for "+ strength*5+" health";
        } 
    }
}