$(document).ready(function (){
    var socket = io();
    $('#post_survey').submit(function(e){
        e.preventDefault();
        socket.emit('formInfo', { 
            name: $('#name').val(),
            location: $('#location').val(),
            language: $('#language').val(),
            comment: $('#comment').val()
        });
    });

    socket.on('sendForm', function (data) {
        console.log(data.response);
        $('.info').css('background-color', 'lightgreen');
        $('#information').html("Here is the user info:<br>"+JSON.stringify(data.response));
    })

    socket.on('randomNum', function (data) {
        console.log(data.randNum);
        $('#numInfo').html(JSON.stringify(data.randNum));
    })
    
 })