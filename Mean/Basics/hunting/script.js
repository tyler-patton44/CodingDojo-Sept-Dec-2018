$(document).ready(function(){
    var name;
    var myUrl;
    $.get("https://api.github.com/users/tyler-patton44", displayName)
    function displayName(data) {
    name = data['login'];
    myUrl = data['url'];
    }
    var flag = 0;
    $('#clicker').click(function(){
        if(flag === 0){
            $('#name').html("Username: "+name);
            $('#url').html("Url: "+myUrl);
            flag++;
        }
        else if(flag === 1){
            $('#name').html(" ");
            $('#url').html(" ");
            flag--;
        }    
    })
})