
;(function ( $, window, document, undefined ) {

    $.fn.toolTipMe = function(options) {
 
        var defaults = {
          
        };
 
        var settings = $.extend( {}, defaults, options );
 
        return this.each(function() {
            $(this).on({
                mouseenter: showTipMe,
                mouseleave: hideTipMe
            });            
        });
 
    }; 

    var showTipMe = function(event) {
       $('div.tooltip').remove();
       var nome = $(this).attr("data-tooltipme");
       $('<div class="tooltip">'+nome+'</div>')
         .appendTo('body');
       changeTooltipPosition(event);
    };

    var hideTipMe = function() {
        $('div.tooltip').remove();
    };

})( jQuery, window, document );