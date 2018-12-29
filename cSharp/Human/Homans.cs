using System;

namespace Human
{
    public class Humanoid
    { 
     public string name;
     public int strength = 3;
     public int intelligence = 3;
     public int dexterity = 3;
     public int health = 100;
    public Humanoid(string nam){
        name = nam;
    }

    public Humanoid(string nam, int stren, int intel, int dext, int  heal){
        name = nam;
        strength = stren;
        intelligence = intel;
        dexterity = dext;
        health = heal;
    }
    public void Attack(Humanoid attacked){
        attacked.health -= strength * 5;
    }
}
}