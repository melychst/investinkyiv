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
            let parent = $(this).parent();

            $(this).css('display', 'none');
            if(  $(this).hasClass('open-burger') ){ 
               $('.close-burger', parent).css('display', 'block'); 
            } else {
                $('.open-burger', parent).css('display', 'block');
            } 

            let burgerPosition = $(parent).data('burger-position');

            $('.'+ burgerPosition +'-mobile-navigation').toggleClass('active');
    
        })

        $('.mobile-navigation').on('click', function(){
            $(this).toggleClass('active');

                let navPosition = $(this).data('navigation-position');
                $('[data-burger-position='+ navPosition +'] .close-burger').css('display', 'none');
                $('[data-burger-position='+ navPosition +'] .open-burger').css('display', 'block');
                console.log(navPosition);

            });
    }

})(jQuery);