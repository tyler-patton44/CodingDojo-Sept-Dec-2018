$(document).ready(function(){

  var flag = 0;
  $('#1').click(function(){
    if(flag === 0){
    $(this).attr("src", "./images/ninja0.png");
    flag++;
    }
    else if(flag === 1){
      $(this).attr("src", "./images/cat0.png");
      flag--;
      }    
})
$('#2').click(function(){
  if(flag === 0){
  $(this).attr("src", "./images/ninja1.png");
  flag++;
  }
  else if(flag === 1){
    $(this).attr("src", "./images/cat1.png");
    flag--;
    }
})
$('#3').click(function(){
  if(flag === 0){
  $(this).attr("src", "./images/ninja2.png");
  flag++;
}
  else if(flag === 1){
    $(this).attr("src", "./images/cat2.png");
    flag--;
    }
})
$('#4').click(function(){
  if(flag === 0){
    $(this).attr("src", "./images/ninja3.png");
    flag++;
  }
  else if(flag === 1){
    $(this).attr("src", "./images/cat3.png");
    flag--;
    }
})
$('#5').click(function(){
  if(flag === 0){
  $(this).attr("src", "./images/ninja4.png");
  flag++;
}
  else if(flag === 1){
    $(this).attr("src", "./images/cat4.png");
    flag--;
    }
})
})