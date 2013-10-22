$(document).ready(function () {
    if(('.plone-toolbar').length){

        $('<div id="macro-globalactions-bar">&nbsp;</div>').insertAfter('.plone-toolbar #content-views');

        $.post('tc_toolbar', function(data) {
            $('#macro-globalactions-bar').html(data);
        });

    }

});