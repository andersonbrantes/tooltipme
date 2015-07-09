
;(function ( $, window, document, undefined ) {

    $.fn.toolTipMe = function(options) {

        this.each(function(){

            var defaults = {
                el: this,
                position: "bottom"
            };

            var settings = $.extend( {}, defaults, options );

            // return this.each(function() {
            //     $(this).on({
            //         mouseenter: showTipMe,
            //         mouseleave: hideTipMe
            //     });
            // });

            var showTipMe = function(event) {
               $('div.ttm-style').remove();
               var nome = $(this).attr("data-tooltipme");
               $('<div class="ttm-style">'+nome+'</div>').appendTo('body');

               //changeTooltipPosition(event);
            };

            var hideTipMe = function() {
                $('div.ttm-style').remove();
            };

            settings.el.on('mouseenter', showTipMe);
            settings.el.on('mouseleave', hideTipMe);

        });

    };

})( jQuery, window, document );