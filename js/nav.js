$(function(){
    var boton=$('#btn-menus');
    var fondo_enlace=$('#fondo-enlace');

    boton.on('click',function(e){
        fondo_enlace.toggleClass('active');
        $('#navs').toggleClass('active');
        e.preventDefault();
    });

    fondo_enlace.on('click',function(e){
        fondo_enlace.toggleClass('active');
        $('#navs').toggleClass('active');
        e.preventDefault();
    });

}())


$(document).ready(function(){
    var y=200;
    var w=768;
    var prueba=$("#prueba1").offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop()>=prueba && $(window).width()>w){
            $("#navs").css({"background":"#9b030a"});
        }

        if($(window).width()<w)
        {
            $("#navs").css({"background":"#6271b3"});
        }

        if($(window).scrollTop()<prueba){
            $("#navs").css({"background":"transparent"});
            
        }
    });
    
});
