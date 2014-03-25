$(document).ready(function () {

    $('body').delegate( '.no-click', 'click', function(event) {
        event.preventDefault();
    });
    if ($('.custom-overlay-ajax').length) {
        $('.custom-overlay-ajax').prepOverlay({
            subtype: 'ajax'
        });
    }
    if ($('.custom-select2').length) {
        if ($('.custom-select2')['select2'] != undefined) {
            $('.custom-select2').select2();
        }
    }
    if ($('.datepicker').length) {
        $( '.datepicker' ).datepicker();
    }

    $( "body" ).delegate( ".int-only", "keyup", function(event) {
        value_=$(event.target).attr('value');
        value_=value_.replace(/[^\d]/g, "");
        $(event.target).attr('value',value_);
    });

    $( "body" ).delegate( ".select-all", "click", function(event) {
        if ($(event.target).attr('checked')=='checked') {
            $('.'+$(event.target).attr('rel')).attr('checked','checked');
        } else {
            $('.'+$(event.target).attr('rel')).attr('checked',null);
        }
    });

});