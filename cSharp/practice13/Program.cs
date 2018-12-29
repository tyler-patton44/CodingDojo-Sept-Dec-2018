using System;

namespace practice13
{
    class Program
    {
        public static void num1(){
            for(int i=1; i<=255; i++){
                Console.WriteLine(i);
            }
        }
        //===========================================
        public static void num2()
        {
            for(int x=1; x<=255; x++){
                if(x%2 != 0){
                    Console.WriteLine(x);
                }
            }
        }
        //===========================================
        public static void num3()
        {
            int sum = 0;
            for(int x=0; x<=255; x++){
                Console.WriteLine(x);
                sum = sum + x;
                Console.WriteLine(sum);
                    
            }
        }
        //===========================================
        public static void num4(int[] x)
        {
            for(int i=0; i<x.Length; i++){
                Console.WriteLine(x[i]);
            }
        }
        //===========================================
         public static void num5(int[] x)
        {
            int max = x[0];
            for(int i=1; i<x.Length; i++){
                if(max<x[i]){
                    max = x[i];
                }
            }
            Console.WriteLine(max);
        }
        //===========================================
        public static void num6(int[] x)
        {
            double sum = x[0];
            double avg = 0;
            for(int i=1; i<=x.Length-1; i++){
                sum = sum + x[i];
                avg = sum/x.Length;
            }
            Console.WriteLine(sum);
            Console.WriteLine(avg);
        }
        //===========================================
        public static void num7(int[] x, int y){
            for(int i=0; i<x.Length; i++){
                if(x[i]>y){
                    Console.WriteLine(x[i]);
                }
            }
        }
        //===========================================
        public static void num8(int[] x)
        {
            for(int i=0; i<x.Length; i++){
                x[i] = x[i] * x[i];
                Console.WriteLine(x[i]);
            }
        }
        //===========================================
        public static void num9(int[] x)
        {
            for(int i=0; i<x.Length; i++){
               if(x[i]<0){
                   x[i] = 0;
               }
               Console.WriteLine(x[i]);
            }
        }
        //===========================================
        public static void num10(int[] x)
        {
            double sum = x[0];
            double avg = 0;
            int min = x[0];
            int max = x[0];
            for(int i=1; i<=x.Length-1; i++){
                sum = sum + x[i];
                avg = sum/x.Length;
                if(max<x[i]){
                    max = x[i];
                }
                if(min>x[i]){
                    min = x[i];
                }
            }
            Console.WriteLine(min);
            Console.WriteLine(max);
            Console.WriteLine(avg);
        }
        //===========================================
        public static void num11(int[] x)
        {
            for(int i=0; i<x.Length; i++){
                if(x[i] == x[x.Length-1]){
                    x[i] = 0;
                }
                else{
                x[i] = x[i+1];
                }
                Console.WriteLine(x[i]);
            }
        }
        //===========================================
        public static object[] num12(int[] x)
        {
            object[] newArray = new object[x.Length];
            for(int i=0; i<x.Length; i++){
               if(x[i]<0){
                   newArray[i] = "Dojo";
               }
               else{
                   newArray[i] = x[i];
               }
               Console.WriteLine(newArray[i]);
            }
            return newArray;
        }
        public static void Main(string[] args)
        {
            //num1();
            //num2();
            //num3();
            int[] numArray = {-1,3,15,7,9,-2};
            //num4(numArray);
            //num5(numArray);
            //num6(numArray);
            //num7(numArray, 6);
            //num8(numArray);
            //num9(numArray);
            //num10(numArray);
            //num11(numArray);
            object[] newArray2 = num12(numArray);

        }
    }
}
