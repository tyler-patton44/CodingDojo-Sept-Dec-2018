using System;

namespace practiceLoop
{
    class Program
    {
        static void Main(string[] args)
        {
           for(int i = 1; i<=255; i++){
               Console.WriteLine(i);
           }
           for(int x=1; x<=1000; x++){
               if(x%5 == 0 || x%3 == 0){
                   if(x%5 == 0){
                       Console.WriteLine("Buzz");
                   }
                   else if(x%3 == 0){
                       Console.WriteLine("Fuzz");
                   }
                   Console.WriteLine(x);
               }
           }
           int example = 1;
           while(example <= 1000){
               if(example%5 == 0 || example%3 == 0){
                   if(example%5 == 0){
                       Console.WriteLine("Buzz");
                   }
                   else if(example%3 == 0){
                       Console.WriteLine("Fuzz");
                   }
                   Console.WriteLine(example);
               }
               example = example + 1;
           }  
        }
    }
}
