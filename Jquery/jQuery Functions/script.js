$(document).ready(function(){
    $(".class1").click(function(){
        $( this ).fadeOut()
    });
    $(".class3").click(function(){
        $( this ).append('frank')
        if ( $( ".class2" ).is( ":hidden" ) ) {
            $( ".class2" ).slideDown( "slow" );
          } else {
            $( ".class2" ).slideUp( "fast");
        }
    });
});