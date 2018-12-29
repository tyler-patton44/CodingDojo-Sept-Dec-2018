using System;

namespace boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            object[] randArray;
            randArray = new object[] {7, 28, -1, true, "chair"};
            int sum = 0;
            foreach(var x in randArray){
                Console.WriteLine(x);
                if(x is int){
                    int num = (int)x;
                    sum = sum + num;
                }
            }
            Console.WriteLine(sum);

        }
    }
}
