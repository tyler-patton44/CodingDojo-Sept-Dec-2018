class Bike{
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo(){
        console.log("Price:"+this.price+", Max Speed:"+this.max_speed+", Miles:"+this.miles);
        return this;
    }
    ride(){
        this.miles += 10;
        console.log("Riding... You have gone"+this.miles);
        return this;
    }
    reverse(){
        if(this.miles < 5){
            console.log("Can't lose any more miles");
            return this;
        }
        this.miles -= 5;
        console.log("Reversing... You have just lost 5 miles");
        return this;
    }

}