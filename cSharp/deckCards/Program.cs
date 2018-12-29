using System;
using System.Collections.Generic;

namespace deckCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck begDeck = new Deck();
            Console.WriteLine("----------------------");
            Player player1 = new Player("Tyler");
            player1.Draw(begDeck);
            player1.Draw(begDeck);
            player1.Draw(begDeck);
            player1.Draw(begDeck);
            player1.Draw(begDeck);
            player1.Draw(begDeck);
            player1.Draw(begDeck);
            player1.Draw(begDeck);
            player1.SeeHand();
        }
    }
}
