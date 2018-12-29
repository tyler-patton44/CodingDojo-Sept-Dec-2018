class Card{
    constructor(value, name, suit){
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
    show(){
        return this.suit+", "+this.name+", "+this.value;
    }
}
class Deck{
    constructor(){
    this.cards = [];
    this.deck();
    }
    deck(){
        this.reset();
        this.shuffle();
        this.printDeck();
    }
    //==============
    reset(){
        var suits = ["Heart","Diamond", "Club", "Spade"];
        var names = ["Ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "Jack", "Queen", "King"];
        for(var x=0; x<suits.length; x++){
            for(var i=0; i<names.length; i++){
                this.cards.push(new Card(i+1, names[i], suits[x]));
            }
        }
    }
    shuffle(){
        var j = 0;
        for (var i = this.cards.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        var temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
        }
    }

    deal(){
        if(this.cards.length != 0){
            var temp = this.cards[0];
            this.cards.shift();
            return temp;
        }
        else{
            return "All cards are dealt";
        }
    }

    printDeck(){
        for(var i=0; i<this.cards.length; i++){
            console.log(this.cards[i]);
        }
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    drawDeck(deck){
        if(deck instanceof Deck){
            this.hand.push(deck.cards[0]);
            deck.deal();
        }
        else{
            return "Not a valid deck";
        }
    }

    discard(){
        if(this.hand.length != 0){
            var temp = this.hand[0];
            this.hand.shift();
            return temp;
        }
        else{
            return "No cards in hand!";
        }
    }

    seeHand(){
        for(var i=0; i<this.hand.length; i++){
            console.log("Suit:"+this.hand[i]['suit']+" Name:"+this.hand[i]['name']);
        }
        return "Whatchu think!";
    }
}