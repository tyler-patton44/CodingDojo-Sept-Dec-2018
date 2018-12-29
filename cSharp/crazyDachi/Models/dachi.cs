using System;

namespace crazyDachi.Models
{
    public class dachi{
        public int happiness{get; set;}
        public int fullness{get; set;}
        public int energy{get; set;}
        public int meals{get; set;}
        public string status{get; set;}

        public dachi(){
            happiness = 20;
            fullness = 20;
            meals = 3;
            energy = 50;
            status = "Your bro say what's up!";
        }

        Random rand = new Random();
        public void feed(){
            if(meals == 0){
                status = "No meals to feed Dachi";
            }
            else{
                meals -= 1;
                if(rand.Next(1,5) == 3){
                    status = "Dachi no likey";
                }
                else{
                    status = "Dachi likey the food";
                    fullness += rand.Next(5,11);
                }
            }
        }    
        //================================================
        public void play(){
            if(energy<5){
                status = "Dachi to tired";
            }
            else{
                energy -= 5;
                if(rand.Next(1,5) == 3){
                    status = "Get outta here";
                }
                else{
                    status = "Dachi wanna fight";
                    happiness += rand.Next(5,11);
                }
            }
        }
        //================================================
        public void work(){
            if(energy<5){
                status = "Dachi can't move";
            }
            else{
                energy -= 5;
                meals += rand.Next(1,4);
                status = "Dachi making the bread";
            }
        }
        //================================================
        public void sleep(){
            fullness -= 5;
            happiness -= 5;
            energy += 15;
            status = "Nap time";
        }
    }
}