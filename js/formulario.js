

$( document ).ready( function () {
$( "#signupForm1" ).validate( {
    rules: {
        nombre:{
            required:true,
            minlength:2
        },
        apellido: {
            required:true,
            minlength:2
        },
        usuario: {
            required: true,
            minlength: 5
        },
        password: {
            required: true,
            minlength: 5
        },
        confirm_password: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        phonenumber:{
                required: true,
                minlength: 11
        },

        email: {
            required: true,
            email: true
        },
        email1_confirm:{
            required: true,
            email: true,
            equalTo: "#email1"
        },
        agree1: "required"
    },
    messages: {
        nombre:{ 
            required:"Por favor ingrese su nombre.",
            minlength:"Usuario debe poseer una longitud minima de 2 caracteres."
        },
        apellido:{
            required:"Por favor ingrese su apellido.",
            minlength:"Usuario debe poseer una longitud minima de 2 caracteres."
        } ,
        usuario: {
            required: "Por favor ingrese su usuario",
            minlength: "Usuario debe poseer una longitud minima de 5 caracteres."
        },
        password: {
            required: "Por favor ingrese su contrase&ntilde;a.",
            minlength: "Contraseña debe poseer una longitud minima de 5 caracteres."
        },
        confirm_password: {
            required: "Por favor ingrese su contrase&ntilde;a.",
            minlength: "Usuario debe poseer una longitud minima de 5 caracteres.",
            equalTo: "Las contraseñas no coinciden."
        },
        email1_confirm: {
            required: "Por favor ingrese un correo valido",
            equalTo: "Los correo no coinciden."
        },
        email1: "Por favor ingrese un correo valido",
        agree1: "Por favor acepte nuestras politicas."
    },
    errorElement: "em",
    errorPlacement: function ( error, element ) {
        // Add the `help-block` class to the error element
        error.addClass( "help-block" );

        // Add `has-feedback` class to the parent div.form-group
        // in order to add icons to inputs
        element.parents( ".form-group" ).addClass( "has-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.parent( "label" ) );
        } else {
            error.insertAfter( element );
        }

        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if ( !element.next( "span" )[ 0 ] ) {
            $( "<span class='  form-control-feedback'></span>" ).insertAfter( element );
        }
    },
    success: function ( label, element ) {
        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if ( !$( element ).next( "span" )[ 0 ] ) {
            $( "<span class='  form-control-feedback'></span>" ).insertAfter( $( element ) );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).parents( ".form-group" ).addClass( "has-error" );
    },
    unhighlight: function ( element, errorClass, validClass ) {
        $( element ).parents( ".form-group" ).removeClass( "has-error" );

    }
} );
} );