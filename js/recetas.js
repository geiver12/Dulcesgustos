 
    (function($){

        // Initiate the paginator on the .items-container element.
        var paginator = new $('.items-container').joldPaginator({
            'perPage': 9,
            'items': '.item',
            'paginator': '.pagination-container',
            'indicator': {
                'selector': '.pagination-indicator',
                'text': 'Showing item item-visible {start}-{end} of {total}',
            }
        });
        
        
        // Toggle items
        $('body').on('change', '.js-toggle-items', function(e) {
        
            e.preventDefault();
        
            var checked = this.checked;
        
            $('.items-container').find('.item')
                .removeClass('item-hidden')
                .addClass('item-visible');
        
            // Include historical reports (invalid)
            if ( checked == true ) {
                $('.items-container').find('.item-toggleable')
                    .removeClass('item-hidden')
                    .addClass('item-visible');
            }
        
            // Exclude historical reports (invalid)
            if ( checked == false ) {
                $('.items-container').find('.item-toggleable')
                    .removeClass('item-visible')
                    .addClass('item-hidden');
            }
        
            // Reset the paginator
            paginator.init();
        
        });
        
        })(jQuery);