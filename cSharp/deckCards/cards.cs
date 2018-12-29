using System;
using System.Collections.Generic;

namespace deckCards
{
    public class Card
    { 
     public string stringVal;
     public string suit;
     public int val;

     public Card(string name, string kind, int value){
        stringVal = name;
        suit = kind;
        val = value;
     }
     
}
//===========================================================
    public class Deck{
        public List<Card> cards;
        public string[] suits = {"Heart","Diamond", "Club", "Spade"};
        public string[] values = {"Ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "Jack", "Queen", "King"};
        public Deck(){
            reset();
            shuffle();
            printdeck();
        }
        public Deck reset(){
            cards = new List<Card>();
            foreach(var suitVal in suits){
                for(int i=0; i<values.Length; i++){
                    cards.Add(new Card(values[i], suitVal, i+1));
                }
            }
            return this;
        }
        public Deck shuffle(){
            Random rand = new Random();
            for(int i=0; i<cards.Count; i++){
                int c = rand.Next(cards.Count - i);
                Card temp = cards[c];
                cards[c] = cards[i];
                cards[i] = temp;
            }
            return this;
        }

        public Card deal(){
            if(cards.Count != 0){
                Card temp = cards[0];
                cards.RemoveAt(0);
                return temp;
            }
            else{
                return null;
            }
        }
        public Deck printdeck(){
            foreach(var x in cards){
                Console.WriteLine(x.stringVal+"-"+x.suit);
            }
            return this;
        }
    }
    public class Player{
        public string name;
        public List<Card> hand;
        public Player(string nam){
            name = nam;
            hand = new List<Card>();
        }
        
        public void Draw(Deck shuffledDeck){
            hand.Add(shuffledDeck.cards[0]);
            shuffledDeck.deal();
        }
        public Card Discard(){
            if(hand.Count != 0){
                Card temp = hand[0];
                hand.RemoveAt(0);
                return temp;
            }
            else{
                return null;
            }
        }
        public void SeeHand(){
            foreach(var x in hand){
                Console.WriteLine(x.stringVal+"-"+x.suit);
            }
        }

    }
}