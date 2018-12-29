var world = [
  [1,1,1,1,0,0,0,3,2,2,2,2,2,2,2],
  [1,0,0,0,1,0,0,3,3,3,3,3,3,3,3],
  [0,2,2,0,1,0,0,0,0,0,0,0,0,0,0],
  [0,2,2,0,1,1,1,1,1,0,0,0,0,0,0],
  [0,2,2,0,1,0,0,0,0,3,0,0,0,0,0],
  [0,2,2,0,1,0,0,3,3,3,0,0,0,0,0],
  [0,0,0,0,1,0,0,3,3,3,0,0,0,0,0]];
  var mapping = {
    0: 'white',
    1: 'red',
    2: 'yellow',
    3: 'blue',
    4: 'green'
  }
  function drawWorld()
  {
    var output = '';
    for(var i=0; i<world.length; i++)
    {
      output += '<div class="row">';
      for(var j=0; j<world[i].length; j++)
      {
        output += "<div class='"+mapping[world[i][j]]+"'></div>";
      }
      output += '</div>';
    }
    document.getElementById('container').innerHTML = output;
    // console.log(output);
  }
  document.onclick = function(e)
  {
    var x = Math.floor(e.x/50);
    var y = Math.floor(e.y/50);
    console.log('Replace color', mapping[world[y][x]], ' with color 4 starting from x:', x, 'y:', y);
    fill(x, y, world[y][x],4);
  }
  function fill(x,y,original_color, color){
    console.log(world[y][x]);

    if(y>0 || y>=world.length || x>0 || x>=15){
      return false;
    }
    if(world[y][x] = original_color){
      return false;
    }

    //your recursion codes here
    world[y][x] = color;
    fill(x, y-1, original_color, color);
    fill(x, y+1, original_color, color);
    fill(x-1, y, original_color, color);
    fill(x+1, y, original_color, color);
    console.log(world)
    // your recursion codes here
    drawWorld();
    
  }
  drawWorld();