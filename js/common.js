$(document).ready(function () {
    
        /*3depth 메뉴*/
    $(function () {
       // 태블릿, 모바일 토글메뉴효과
            function slideMenu() {
                var activeState = $("#m_header .allMenu").hasClass("active");
                $("#m_header .allMenu").animate({left: activeState ? "0%" : "-100%"}, 400);
            }
            $("#hamburger_wrapper").click(function(event) {
                event.stopPropagation();
                $("#hamburger_menu").toggleClass("open");
                $("#m_header .allMenu").toggleClass("active");
                slideMenu();
            
                $("body").toggleClass("overflow-hidden");
            });
            
            $(".allMenu").find(".accordion-toggle").click(function() {
                $(this).next().toggleClass("open").slideToggle("fast");
                $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
            
                $(".allMenu .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
                $(".allMenu .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
            });
            $("ul li:has(ul)").addClass("has-sub");
            $('.sideNav').find('li.has-sub>a').on('click', function(e){
                    // $(this).removeAttr('href');
                    //e.preventDefault();
                    var navlist = $(this).parent('li');
                    if (navlist.hasClass('open')) {
                        navlist.removeClass('open');
                        navlist.find('li').removeClass('open');
                        navlist.find('ul').slideUp(200);
                    }
                    else {
                        navlist.addClass('open');
                        navlist.children('ul').slideDown(200);
                        navlist.siblings('li').children('ul').slideUp(200);
                        navlist.siblings('li').removeClass('open');
                        navlist.siblings('li').find('li').removeClass('open');
                        navlist.siblings('li').find('ul').slideUp(200);
                    }
                });
            
            $('.sideNav>ul>li.has-sub>a').append('<i class="fa fa-chevron-down right--icon"></i>');
            $('.sideNav>ul>li>ul>li.has-sub>a').append('<i class="fa fa-chevron-down right--icon-sub"></i>');
            $('.sideNav>ul>li>ul>li>ul>li.has-sub>a').prepend('<span class="plus-minus"></span>');
            // $('.sideNav>ul>li>ul>li>ul>li.has-sub>a').prepend('<i class="fa fa-plus left--icon"></i><i class="fa fa-minus left--icon"></i>'); // 아이콘 사용시
            });
    
    
    $(function () {
        $('#head_wrap').mouseenter(function () {
            $('#head_back').addClass('active');
            $('#head_wrap').addClass('active');
            $('#gnb').addClass('active');

        });
        $('#head_wrap').mouseleave(function () {
            $('#head_back').removeClass('active');
            $('#head_wrap').removeClass('active');
            $('#gnb').removeClass('active');
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.main02 .cell').css('transform','translate(0, 0)');
            } else {
                $('.main02 .cell ').css('transform','translate(0, 0)');
            }
            
            if ($(this).scrollTop() > 600) {
                $('.main03 .cell').css('transform','translate(0, 0)');
            } else {
                $('.main03 .cell ').css('transform','translate(0, 0)');
            }
            
                     
        });
        
        $('.swiper-wrapper li').mouseenter(function () {
            var $main = $(this).closest('.main04');
            var $current = $main.find('>.swiper-wrapper >.swiper-slide.on');

            $current.removeClass('on');
            $(this).addClass('on');

            var index = $(this).index();

            $main.find('>.imgWrap.p_only > img.on').removeClass('on');
            $main.find('>.imgWrap.p_only > img').eq(index).addClass('on');
            $main.find('>.imgWrap.m_only > img.on').removeClass('on');
            $main.find('>.imgWrap.m_only > img').eq(index).addClass('on');

        });
        
        
    })

});
