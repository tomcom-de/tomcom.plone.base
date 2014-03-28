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

    $( "body" ).delegate( ".form-post-button", "click", function(event) {
        form_=$($(event.target).attr('data-form'));
        $(form_).attr('action',$(event.target).attr('data-action'));
        $(form_).submit();
    });

});





