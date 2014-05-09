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

    $( "body" ).delegate( ".form-post-button", "click", function(event) {
        form_=$($(event.target).attr('data-form'));
        $(form_).attr('action',$(event.target).attr('data-action'));
        $(form_).submit();
    });

    var userLang = $('html').attr('lang');
    if(userLang=='de'){
        datepickerDE();
    }
    else{
        datepickerEN();
    }
});

function datepickerDE(){

    $.datepicker.regional['de'] = {clearText: 'löschen', clearStatus: 'aktuelles Datum löschen',
            closeText: 'schließen', closeStatus: 'ohne Änderungen schließen',
            prevText: '<zurück', prevStatus: 'letzten Monat zeigen',
            nextText: 'Vor>', nextStatus: 'nächsten Monat zeigen',
            currentText: 'heute', currentStatus: '',
            monthNames: ['Januar','Februar','März','April','Mai','Juni',
            'Juli','August','September','Oktober','November','Dezember'],
            monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
            'Jul','Aug','Sep','Okt','Nov','Dez'],
            monthStatus: 'anderen Monat anzeigen', yearStatus: 'anderes Jahr anzeigen',
            weekHeader: 'Wo', weekStatus: 'Woche des Monats',
            dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
            dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
            dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
            dayStatus: 'Setze DD als ersten Wochentag', dateStatus: 'Wähle D, M d',
            dateFormat: 'dd.mm.yy', firstDay: 1,
            initStatus: 'Wähle ein Datum', isRTL: false};
    $.datepicker.setDefaults($.datepicker.regional['de']);

};
function datepickerEN(){

    $.datepicker.regional['en'] = {
            closeText: 'Done',
            prevText: 'Prev',
            nextText: 'Next',
            currentText: 'Today',
            monthNames: ['January','February','March','April','May','June',
            'July','August','September','October','November','December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
            weekHeader: 'Wk',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['en']);

};

