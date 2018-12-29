using System;

namespace WizardNinja
{
    public class Human
    { 
     public string name;
     public int strength = 3;
     public int intelligence = 3;
     public int dexterity = 3;
     public int health = 100;
     //=================
    public Human(string nam){
        name = nam;
    }
    //=================
    public Human(string nam, int stren, int intel, int dext, int  heal){
        name = nam;
        strength = stren;
        intelligence = intel;
        dexterity = dext;
        health = heal;
    }
    //=================
    public Human Attack(Human attacked){
        attacked.health -= strength * 5;
        return this;
    }
    //=================
}
//====================================================================================
    public class Wizard : Human{
        public Wizard(string name) : base(name){
            health = 50;
            intelligence = 25;
        }
        public void Heal(Human healing){
            healing.health += intelligence * 10;
        }
        public void Fireball(Human attacking){
            Random rand = new Random();
            attacking.health -= rand.Next(20,51);
        }
    }
    //====================================================================================
    public class Ninja : Human{
        public Ninja(string name) : base(name){
            dexterity = 175;
        }
        public Ninja Steal(Human attacked){
            Attack(attacked);
            health += 10;
            return this;
        }
        public void getAway(){
            health -= 15;
        }
    }
//====================================================================================
    public class Samuria : Human{
        public Samuria(string name) : base(name){
            health = 200;
        }
        public Samuria deathBlow(Human attacked){
            Attack(attacked);
            if(attacked.health <= 50){
                attacked.health = 0;
            }            
            return this;
        }
        public void meditate(){
            health = 200;
        }
    }
}