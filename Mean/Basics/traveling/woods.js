var tigger = { 
    name: "Tigger",
    greet: function(){
        console.log("What up homie it's tig tig");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }
}
var pooh = {
    name: "Winnie the Pooh",
    greet: function(){
        console.log("Don't steal my honey boi");
        },
    drop: function(){
        honey -= 1;
        console.log("The bag has been delivered");
        }
}
var bees = {
    name: "Bees",
    greet: function(){
        console.log("Keep pooh away from my honey");
        },
    pickup: function(){
        honey += 1;
        console.log("The bag has been secured");
    },
    drop: function(){
        console.log("Can't drop honey here");
        }
}
var piglet = {
    name: "Piglet",
    greet: function(){
        console.log("I stay away from mud don't get it twisted");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }
}
var robin = {
    name: "Christopher Robin",
    greet: function(){
        console.log("Steal from the rich give to the poor");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }
}
var owl = {
    name: "Owl",
    greet: function(){
        console.log("Hoot Hoot");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }
}
var rabbit = {
    name: "Rabbit",
    greet: function(){
        console.log("If you don't have something nice to say don't say it at all");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }   
}
var gopher = {
    name: "Gopher",
    greet: function(){
        console.log("I got holes, i got lotta holes");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }
}
var kango = {
    name: "Kango",
    greet: function(){
        console.log("Bingo bango");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }
}
var eeyore = {
    name: "Eeyore",
    greet: function(){
        console.log("I'm sad :(");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }
}
var heffalumps = {
    name: "Heffalumps",
    greet: function(){
        console.log("I can't even say my own name");
        },
    drop: function(){
        console.log("Can't drop honey here");
        }
}

tigger.north = pooh;
pooh.south = tigger;

pooh.west = piglet;
piglet.east = pooh;

pooh.east = bees;
bees.west = pooh;

piglet.north = owl;
owl.south = piglet;

pooh.north = robin;
robin.south = pooh;

bees.north = rabbit;
rabbit.south = bees;

owl.east = robin;
robin.west = owl;

robin.east = rabbit;
rabbit.west = robin;

rabbit.east = gopher;
gopher.west = rabbit;

robin.north = kango;
kango.south = robin;

kango.north = eeyore;
eeyore.south = kango;

eeyore.east = heffalumps;
heffalumps.west = eeyore;


var player = tigger;
var honey = 0;

//=======================================================================
function move(dir){
    try{
        if(dir != "north" && dir != "south" && dir != "east" && dir != "west"){
            console.log("Not a valid move, you are at "+player.name+"s house");
        }
        if(dir === "north"){
            console.log(player.name+" moved to "+player.north.name+"s house");
            player = player.north;
        }

        if(dir === "south"){
            console.log(player.name+" moved to "+player.south.name+"s house");
            player = player.south;
        }

        if(dir === "west"){
            console.log(player.name+" moved to "+player.west.name+"s house");
            player = player.west;
        }

        if(dir === "east"){
            console.log(player.name+" moved to "+player.east.name+"s house");
            player = player.east;
        }
    }
    catch{
        console.log("Cannot move there, at"+player.name+"s house");
    }
    if(player.greet != undefined){
        player.greet();
    }
    return;
}
//=======================================================================
function mission(){
    return "You are to get honey from Bees and give it to Pooh";
}

function Pickup(){
    if(player.pickup != undefined){
        player.pickup();
    }
    else{
        console.log("Cannot pickup honey here");
    }
    return;
}

function Drop(){
    if(honey > 0){
        player.drop();
    }
    else{
        console.log("No honey to drop");
    }
    return;
}



