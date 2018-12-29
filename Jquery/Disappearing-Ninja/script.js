$(document).ready(function(){
    
    $('.ninja').click(function(){
        $(this).fadeOut("slow");
    })
    $('button').click(function(){
        $('.ninja').fadeIn("fast");
    })
})