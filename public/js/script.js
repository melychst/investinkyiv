(function($){
    console.log('Load');
    forumTabs();
    mobileNavigation();

    function forumTabs(){
        $('.tab-title').on('click', function(){
            var tabId = $(this).data('tab-title');
            if( $(this).hasClass('active') ) {
                return;
            }

            $('.tab-content').removeClass('active');
            $('.tab-title').removeClass('active');
            $(this).addClass('active');
            $('[data-tab-content='+ tabId +']').addClass('active');

        })
    }

    function mobileNavigation(){
        $('.btn-mobile-nav').on('click', function(){
            console.log('Burger');
            $(this).css('display', 'none');
            if(  $(this).hasClass('open-burger') ){ 
               $('.close-burger').css('display', 'block'); 
            } else {
                $('.open-burger').css('display', 'block');
            } 
        })
    }

})(jQuery);