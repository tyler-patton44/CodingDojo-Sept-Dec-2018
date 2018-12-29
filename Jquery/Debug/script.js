$(document).ready(function(){
  $('button').click(function(){
    alert("we don't actually serve pizza.");
  })
  
  $('img').click(function(){
    $(this).slideUp("slow");
  })
  $('h5').click(function(){
    $('img').slideDown("fast");
  })

  $('#left_content h3, p, ul, a').hover(function(){
    $(this).css("color","white")
  }, function(){
    $(this).css("color", "black")
  })

  $('#left_content a').click(function(){
    alert("Give me your MONEY!!")
  })
})

