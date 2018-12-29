using System;

namespace WizardNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            // Human myHuman = new Human("Tyler", 20, 10, 7, 100);
            // Human myHuman2 = new Human("Gang", 10, 8, 7, 100);
            // Console.WriteLine($"Attributes: {myHuman.name} {myHuman.strength} {myHuman.intelligence} {myHuman.dexterity} {myHuman.health}");
            // Console.WriteLine($"Attributes: {myHuman2.name} {myHuman2.strength} {myHuman2.intelligence} {myHuman2.dexterity} {myHuman2.health}");
            // Wizard mywizard1 = new Wizard("Bitch");
            // Wizard mywizard2 = new Wizard("Ass");
            // Console.WriteLine($"Attributes: {mywizard1.name} {mywizard1.strength} {mywizard1.intelligence} {mywizard1.dexterity} {mywizard1.health}");
            // Console.WriteLine($"Attributes: {mywizard2.name} {mywizard2.strength} {mywizard2.intelligence} {mywizard2.dexterity} {mywizard2.health}");
            // mywizard1.Heal(mywizard1);
            // Console.WriteLine($"Attributes: {mywizard1.name} {mywizard1.strength} {mywizard1.intelligence} {mywizard1.dexterity} {mywizard1.health}");
            // mywizard1.Fireball(mywizard2);
            // Console.WriteLine($"Attributes: {mywizard2.name} {mywizard2.strength} {mywizard2.intelligence} {mywizard2.dexterity} {mywizard2.health}");
            // Ninja myNinja = new Ninja("Joe");
            // Ninja myNinja2 = new Ninja("Rogan");
            // Console.WriteLine($"Attributes: {myNinja.name} {myNinja.strength} {myNinja.intelligence} {myNinja.dexterity} {myNinja.health}");
            // Console.WriteLine($"Attributes: {myNinja2.name} {myNinja2.strength} {myNinja2.intelligence} {myNinja2.dexterity} {myNinja2.health}");
            // myNinja.Steal(myNinja2);
            // myNinja.getAway();
            // Console.WriteLine("------------------------------------");
            // Console.WriteLine($"Attributes: {myNinja.name} {myNinja.strength} {myNinja.intelligence} {myNinja.dexterity} {myNinja.health}");
            // Console.WriteLine($"Attributes: {myNinja2.name} {myNinja2.strength} {myNinja2.intelligence} {myNinja2.dexterity} {myNinja2.health}");

            Samuria sammy1 = new Samuria("Jackie");
            Samuria sammy2 = new Samuria("Chan");
            Console.WriteLine($"Attributes: {sammy1.name} {sammy1.strength} {sammy1.intelligence} {sammy1.dexterity} {sammy1.health}");
            Console.WriteLine($"Attributes: {sammy2.name} {sammy2.strength} {sammy2.intelligence} {sammy2.dexterity} {sammy2.health}");
            sammy1.deathBlow(sammy2);
            sammy1.Attack(sammy2);
            sammy1.deathBlow(sammy2);
            sammy1.deathBlow(sammy2);
            sammy1.deathBlow(sammy2);
            sammy1.deathBlow(sammy2);
            sammy1.deathBlow(sammy2);
            sammy1.deathBlow(sammy2);
            sammy1.deathBlow(sammy2);
            sammy1.deathBlow(sammy2);
            Console.WriteLine("------------------------------------");
            Console.WriteLine($"Attributes: {sammy2.name} {sammy2.strength} {sammy2.intelligence} {sammy2.dexterity} {sammy2.health}");
            sammy2.meditate();
            Console.WriteLine($"Attributes: {sammy2.name} {sammy2.strength} {sammy2.intelligence} {sammy2.dexterity} {sammy2.health}");
        }
    }
}
