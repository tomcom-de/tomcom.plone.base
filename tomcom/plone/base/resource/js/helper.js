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
});