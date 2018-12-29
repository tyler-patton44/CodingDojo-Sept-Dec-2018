using System;

namespace phone
{
    class Program
    {
        static void Main(string[] args)
        {
            Nokia threeHunna = new Nokia("300", 100, "Verizon", ".....Ring Ring somebody's on the phone");
            Galaxy s9 = new Galaxy("s9", 80, "US Cellular", ".....Ring Ring somebody's on the phone");
            s9.DisplayInfo();
            Console.WriteLine(s9.Ring());
            Console.WriteLine(s9.Unlock());
            threeHunna.DisplayInfo();
            Console.WriteLine(threeHunna.Ring());
            Console.WriteLine(threeHunna.Unlock());
        }
    }
}
