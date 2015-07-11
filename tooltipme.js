
;(function ( $, window, document, undefined ) {

    $.fn.toolTipMe = function(options) {

        var defaults = {
            position: "absolute",
            margin: '8px',
            padding: '8px',
            border: '1px solid blue',
            backgroundColor: 'yellow'
        };

        var settings = $.extend( {}, defaults, options );

        var showTipMe = function(event) {
           $('div.ttm-style').remove();
           var nome = $(this).attr("data-tooltipme");
           $('<div class="ttm-style">'+nome+'</div>')
             .appendTo('body');

            $('div.ttm-style').css(settings);
        };

        var hideTipMe = function() {
            $('div.ttm-style').remove();
        };

        return this.each(function() {
            $(this).on({
                mouseenter: showTipMe,
                mouseleave: hideTipMe
            });
        });
    };


})( jQuery, window, document );