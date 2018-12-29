using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Humanoid myHuman = new Humanoid("Tyler", 20, 10, 7, 100);
            Humanoid myHuman2 = new Humanoid("Gang", 10, 8, 7, 100);
            Console.WriteLine($"Attributes: {myHuman.name} {myHuman.strength} {myHuman.intelligence} {myHuman.dexterity} {myHuman.health}");
            Console.WriteLine($"Attributes: {myHuman2.name} {myHuman2.strength} {myHuman2.intelligence} {myHuman2.dexterity} {myHuman2.health}");
            myHuman.Attack(myHuman2);
            Console.WriteLine($"Attributes: {myHuman2.name} {myHuman2.health}");

        }
    }
}
