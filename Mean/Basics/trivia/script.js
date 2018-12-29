$(document).ready(function(){
    var results;
    $.get("https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple", displayName)
    function displayName(data) {
        results = data['results'];
    }
//======================================================
    var point = 0;
    $('h1').html("Total Points: "+point);

    $('#clicker').one('click', function(){
        $('#points').css('display', 'none');
        $('#clicker:hover').css('background-color', 'black');
        $('#question').css('display', 'block');
        $('#incorrect').css('display', 'block');

        $('#question').html("Question: "+ results[0]['question']);
        console.log(results[0]['correct_answer']);
        $('#incorrect').append('<li class="1">'+results[0]['correct_answer']+'</li>');

        for(var i=0; i<results[0]['incorrect_answers'].length; i++){
                $('#incorrect').append('<li class="1">'+results[0]['incorrect_answers'][i]+'</li>');
        }
            shuffleElements( $('.1') );
    })

    $(document).on("click",".1", function () {
        if($(this).text() === results[0]['correct_answer']){
            $('#results').css({'color': 'green', 'display': 'block'});
            $('#results').html("Correct");
            point += 100;
            $('h1').html("Total Points: "+point);
        }
        else{
            $('#results').css({'color': 'red', 'display': 'block'});
            $('#results').html("Incorrect");
        }
    })



    $('#clicker2').one('click', function(){
        $('#points2').css('display', 'none');
        $('#clicker2:hover').css('background-color', 'black');
        $('#question2').css('display', 'block');
        $('#incorrect2').css('display', 'block');

        $('#question2').html("Question: "+ results[1]['question']);
        console.log(results[1]['correct_answer']);
        $('#incorrect2').append('<li class="2">'+results[1]['correct_answer']+'</li>');

        for(var i=0; i<results[1]['incorrect_answers'].length; i++){
                $('#incorrect2').append('<li class="2">'+results[1]['incorrect_answers'][i]+'</li>');
        }
            shuffleElements( $('.2') );
    })

    $(document).on("click",".2", function () {
        if($(this).text() === results[1]['correct_answer']){
            $('#results2').css({'color': 'green', 'display': 'block'});
            $('#results2').html("Correct");
            point += 200;
            $('h1').html("Total Points: "+point);
        }
        else{
            $('#results2').css({'color': 'red', 'display': 'block'});
            $('#results2').html("Incorrect");
        }
    })

})
//======================================================
function shuffleElements($elements) {
    var i, index1, index2, temp_val;

    var count = $elements.length;
    var $parent = $elements.parent();
    var shuffled_array = [];


    // populate array of indexes
    for (i = 0; i < count; i++) {
        shuffled_array.push(i);
    }

    // shuffle indexes
    for (i = 0; i < count; i++) {
        index1 = (Math.random() * count) | 0;
        index2 = (Math.random() * count) | 0;

        temp_val = shuffled_array[index1];
        shuffled_array[index1] = shuffled_array[index2];
        shuffled_array[index2] = temp_val;
    }

    // apply random order to elements
    $elements.detach();
    for (i = 0; i < count; i++) {
        $parent.append( $elements.eq(shuffled_array[i]) );
    }
}