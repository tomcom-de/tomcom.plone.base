$.status_message = function(msgstr_,type_) {
    html_='<div id="js-status-message" class="alert alert-'+type_+'"><button type="button" class="close" data-dismiss="alert">&times;</button>'+msgstr_+'</div>'
    $('body').prepend(html_);
    $('#js-status-message').css('margin-left','-'+($('#js-status-message').width()/2)+'px')
    $('#js-status-message').show('fast').delay(3000).hide('fast');
    setTimeout(function(){
        $("#js-status-message").remove();
    }, 3000);
};
