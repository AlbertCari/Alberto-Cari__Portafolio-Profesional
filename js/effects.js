// JavaScript Document

       $(function() {
    
              function loop(){
               $('.pivoteUp')
                 .animate({marginTop:120},1000)
                 .animate({marginTop:40},2000, loop);
              }
              loop(); 
            });

            $(function() {
    
              function loop(){
               $('.pivoteDown')
                 .animate({marginTop:170},1000)
                 .animate({marginTop:300},3000, loop);
              }
              loop(); 
            });

            $(function() {
    
              function loop(){
               $('.pivoteBack')
                 .animate({marginTop:200},2000)
                 .animate({marginTop:600},7000, loop);
              }
              loop(); 
            });

            $(function() {
    
              function loop(){
               $('.pivoteEnd')
                 .animate({marginTop:350},3000)
                 .animate({marginTop:800},8000, loop);
              }
              loop(); 
            });

/***-**********************************************************/


          $(document).ready(function() {
            $('.button').click(function() {
                type = $(this).attr('data-type');
                $('.overlay-container').fadeIn(function() {
                window.setTimeout(function(){
                    $('.window-container.'+type).addClass('window-container-visible');
                }, 100);
                });
            });
            $('.close').click(function() {
                $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
            });
        });



/***********************************************************************/



function slideSwitch() {
    var $active = $('#slideshow div.active');

    if ( $active.length == 0 ) $active = $('#slideshow div:last');

    // use this to pull the divs in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow div:first');

    // uncomment below to pull the divs randomly
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 2000 );
});
