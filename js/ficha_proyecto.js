$(document).ready(function() {
    /* active description tabs main description*/
    $( "#pg-describe-proyect-specs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#pg-describe-proyect-specs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    /*Init main gallery*/
    $('#lightgallery').lightGallery();

    /* active properties types tabs*/
    $( "#pg-property-types" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#pg-property-types > ul > li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    /* active stage one properties tabs*/
    $( "#pg-stage-one" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "ul.pg-property-types-controlls > li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});