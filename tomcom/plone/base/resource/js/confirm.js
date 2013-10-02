$(document).ready(function () {
    jarn.i18n.loadCatalog('plone', 'de');
    _ = jarn.i18n.translate
    $("body").delegate( ".confirm-delete", "click", function(event) {
        msgstr = _(msgid = 'You really want to delete this content?', domain = 'plone');
        value=confirm(msgstr);
        if (value == false) {
            event.defaultPrevented();
            return false
        };
    });

    $("body").delegate( ".confirm-general", "click", function(event) {
        msgstr = _(msgid = 'Are you sure?',domain = 'plone');
        value=confirm(msgstr);
        if (value == false) {
            event.defaultPrevented();
            return false
        };

    });

});