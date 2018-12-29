using System;

namespace phone{
    public abstract class Phones{
        private string versionNum;
        private int batteryPerc;
        private string carrier;
        private string ringTone;
        public Phones(string _versionNum, int _batteryPerc, string _carrier, string _ringTone){
            versionNum = _versionNum;
            batteryPerc = _batteryPerc;
            carrier = _carrier;
            ringTone = _ringTone;
        }

        public abstract void DisplayInfo();

        public string _versionNum{
            get{
                return versionNum;
            }
        }
        public int _batteryPerc{
            get{
                return batteryPerc;
            }
        }
        public string _carrier{
            get{
                return carrier;
            }
        }
        public string _ringTone{
            get{
                return ringTone;
            }
        }
    }
} 