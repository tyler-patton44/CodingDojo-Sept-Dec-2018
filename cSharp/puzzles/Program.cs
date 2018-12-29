using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        public static void randArray(){
            int[] numArray = new int[10];
            Random rand = new Random();
            int sum = 0;
            for(int i=0; i<numArray.Length; i++){
                numArray[i] = rand.Next(5,25);
                sum = sum + numArray[i];
                Console.WriteLine(numArray[i]);
            }
            int max = numArray[0];
            int min = numArray[0];
            for(int i=1; i<numArray.Length; i++){
                if(max<numArray[i]){
                    max = numArray[i];
                }
                if(min>numArray[i]){
                    min = numArray[i];
                }
            }
            Console.WriteLine(sum+", "+min +", "+ max);
        }
        //=================================================
        public static string coinFlip(){
            string done = "Play again!!";
            Random flip = new Random();
            int heads = 1;
            int tails = 2;
            int result = flip.Next(1,3);
            if(result == heads){
                Console.WriteLine("Heads");
            }
            if(result == tails){
                Console.WriteLine("Tails");
            }
            return done;        
        }
        //=================================================
        public static string TossMultipleCoins(int times){
            string done = "Play again!!";
            Random flip = new Random();
            int heads = 1;
            int tails = 2;
            for(int i=1; i<=times; i++){
            int result = flip.Next(1,3);
            if(result == heads){
                Console.WriteLine("Heads");
            }
            if(result == tails){
                Console.WriteLine("Tails");
            }
            }        
            return done;
        }
        //=================================================
        public static string[] Names(){
            string[] nameArray = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            string[] lengthArray = new string[nameArray.Length];
            Random rand = new Random(); 
            for(int i=0; i<nameArray.Length; i++){
                int mixer = rand.Next(0,i);
                string temp = nameArray[i];
                nameArray[i] = nameArray[mixer];
                nameArray[mixer] = temp;
                }
            for(int i=0; i<nameArray.Length; i++){
                Console.WriteLine(nameArray[i]);
                if(nameArray[i].Length >= 5){
                    lengthArray[i] = nameArray[i];
                }
            }
            return lengthArray;
            }
        //=================================================
        static void Main(string[] args)
        {
            // randArray();

            // string whatup = coinFlip();
            // Console.WriteLine(whatup);

            // string gang = TossMultipleCoins(10);
            // Console.WriteLine(gang);

            string[] tester = Names();
            Console.WriteLine("--------");
            foreach(var x in tester){
                Console.WriteLine(x);
            }
        }
    }
}
