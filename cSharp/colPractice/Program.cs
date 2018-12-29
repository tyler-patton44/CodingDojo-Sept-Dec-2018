using System;
using System.Collections.Generic;

namespace colPractice
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[] numArray;
            numArray = new int[] {0,1,2,3,4,5,6,7,8,9};
            string[] nameArray;
            nameArray = new string[] {"Tim", "Martin", "Nikki", "Sara"};
            bool[] array3 = new bool[10];
            for(int i=0; i<array3.Length; i++){
                if(i%2 == 0){
                    array3[i]=true;
                }
                else{
                    array3[i]=false;
                }
            }
            //=======================

            List<string> flavors = new List<string>();

            flavors.Add("Vanilla");
            flavors.Add("Chocolate");
            flavors.Add("Strawberry");
            flavors.Add("Cofee");
            flavors.Add("Banna");
            Console.WriteLine(flavors.Count);
            Console.WriteLine(flavors[2]);
            flavors.Remove("Strawberry");
            Console.WriteLine(flavors.Count);


            //=======================
            Random rand = new Random();
            Dictionary<string,string> users = new Dictionary<string,string>();
            for(int x=0; x<nameArray.Length; x++){
                users.Add(nameArray[x], null);
                users[nameArray[x]] = flavors[rand.Next(0,4)];
            }
            foreach (var entry in users){
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
        }
    }
}
