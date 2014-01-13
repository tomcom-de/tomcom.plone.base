$.fn.tcpb_update_toolbar = function() {
    if(('.plone-toolbar').length){

        $('<div id="macro-globalactions-bar">&nbsp;</div>').insertAfter('.plone-toolbar #content-views');
        $.post($('base').attr('href')+'/tc_toolbar', function(data) {
            $('#macro-globalactions-bar').html(data);
        });

    }
};

$(document).ready(function () {
   $.fn.tcpb_update_toolbar();
});