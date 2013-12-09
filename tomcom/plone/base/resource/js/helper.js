$(document).ready(function () {

    $("body").delegate( ".no-click", "click", function(event) {
        event.preventDefault();
    });

    $('.custom-overlay-ajax').prepOverlay({
        subtype: 'ajax',
    });

    $('.select-all').live("click",
        function(event){
            class_='.'+$(event.target).attr('rel');
            if ($(event.target).is(':checked')) {
                $(class_).attr('checked', true);
            } else {
                $(class_).attr('checked', false);
            }
    });

});





