users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  function usersLangs(pips){
    for(var i=0; i<pips.length; i++){
        console.log(pips[i]["fname"]+" "+pips[i]["lname"]+ " knows "+ pips[i]["languages"]);
        var likes = [];
        for(var x in pips[i]["interests"]){
            for(var t=0; t<pips[i]["interests"][x].length; t++){
                likes.push(pips[i]["interests"][x][t]);
            }
        }
        console.log(pips[i]["fname"]+" also likes "+likes);
    }
    return;
  }
  usersLangs(users);