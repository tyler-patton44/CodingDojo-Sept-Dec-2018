using System;

namespace phone{
    public class Nokia : Phones, IRingable{
        public Nokia(string _versionNum, int _batteryPerc, string _carrier, string _ringTone) 
        : base(_versionNum, _batteryPerc, _carrier, _ringTone){}

            public string Ring(){
                string gang = $"...{this._ringTone}...";
                return gang;
            }
            public string Unlock(){
                string returnUnlock = $"...{this._versionNum} unlocked";
                return returnUnlock;
            }
            public override void DisplayInfo(){
            Console.WriteLine("----------------------------");
            Console.WriteLine($"{this._versionNum}");
            Console.WriteLine($"{this._batteryPerc}");
            Console.WriteLine($"{this._carrier}");
            Console.WriteLine($"{this._ringTone}");
            Console.WriteLine("----------------------------");
        }
        }
}