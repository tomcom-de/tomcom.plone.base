$(document).ready(function () {

    $("body").delegate( ".no-click", "click", function(event) {
        event.preventDefault();
    });
    $('.custom-overlay-ajax').prepOverlay({
        subtype: 'ajax'
    });

    $('.link-overlay').prepOverlay({
        subtype: 'ajax'
    });

});