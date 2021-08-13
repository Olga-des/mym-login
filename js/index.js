$(document).ready(function(){
    $("body.fade").fadeIn(1500);
      
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutGrid").offset().top
        }, 1000);
    });

    $("#work").click(function() {
        $('html, body').animate({
            scrollTop: $("#workGrid").offset().top
        }, 1000);  
    });

    function fade(){
        $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 2000);

  });
