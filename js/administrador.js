
function toggle(elemento) {
    if(elemento.value=="opcion_1") {
       
           $('#content_opcion1').removeClass('hidden-xl-down');
            $('#content_opcion2').addClass('hidden-xl-down');
            $('#content_opcion3').addClass('hidden-xl-down');

            $('#content-cat').addClass('hidden-xl-down');
            $('#content-pro').addClass('hidden-xl-down');
            $('#pedidos').addClass('hidden-xl-down');
            $('#historial').addClass('hidden-xl-down');
    }
       
    if(elemento.value=="op-cat") {
        $('#content_opcion1').addClass('hidden-xl-down');
        $('#content_opcion2').removeClass('hidden-xl-down');
        $('#content_opcion3').addClass('hidden-xl-down');

        $('#content-cat').removeClass('hidden-xl-down');
        $('#content-pro').addClass('hidden-xl-down');
        $('#pedidos').addClass('hidden-xl-down');
        $('#historial').addClass('hidden-xl-down');}

    if(elemento.value=="op-pro") {
        $('#content_opcion1').addClass('hidden-xl-down');
        $('#content_opcion2').removeClass('hidden-xl-down');
        $('#content_opcion3').addClass('hidden-xl-down');

        $('#content-cat').addClass('hidden-xl-down');
        $('#content-pro').removeClass('hidden-xl-down');
        $('#pedidos').addClass('hidden-xl-down');
        $('#historial').addClass('hidden-xl-down');}

    if(elemento.value=="op-or") {
        $('#content_opcion1').addClass('hidden-xl-down');
        $('#content_opcion2').addClass('hidden-xl-down');
        $('#content_opcion3').removeClass('hidden-xl-down');

        $('#content-cat').addClass('hidden-xl-down');
        $('#content-pro').addClass('hidden-xl-down');
        $('#pedidos').removeClass('hidden-xl-down');
        $('#historial').addClass('hidden-xl-down');}

        if(elemento.value=="op-hi") {
        $('#content_opcion1').addClass('hidden-xl-down');
        $('#content_opcion2').addClass('hidden-xl-down');
        $('#content_opcion3').removeClass('hidden-xl-down');
        
        $('#content-cat').addClass('hidden-xl-down');
        $('#content-pro').addClass('hidden-xl-down');
        $('#pedidos').addClass('hidden-xl-down');
        $('#historial').removeClass('hidden-xl-down');}
}
