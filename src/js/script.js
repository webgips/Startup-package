$(function() {
	new WOW().init();
	// var width = $(document).width();

	//text letter-by-letter
	var text = $('.talk__text').text(),
		length = text.length,
	 	timeOut,
	 	character = 0;

	(function typeWriter() { 
	    timeOut = setTimeout(function() {
	        character++;	        
	        var type = text.substring(0, character);
	        $('.talk__text').text(type);
	        typeWriter();
	        if (character == length) {
	            // clearTimeout(timeOut);
	            character = 0;	            
	        }	        
	    }, 100);
	}());


	//circles 
	 $("#circle1").circliful({
	 	chel: true,
        animation: 1,
        foregroundColor: '#F44336',
        backgroundColor: '#42A5F5',
        foregroundBorderWidth: 9,
        backgroundBorderWidth: 7,
        animateInView: true, 
        animationStep: 5,
        fontColor: '#f44336',
        percentageTextSize: '24',
        textAdditionalCss: 'line-height: 1;font-family:FiraSansBold',
        textSize: 91,
        textStyle: 'font-size: 12px;',
        textColor: '#666',
        multiPercentage: 1,
        percentages: [10, 20, 30]
      });	 
	 $("#circle2").circliful({
        animation: 1,
        foregroundColor: '#ff5722',
        backgroundColor: '#42A5F5',
        foregroundBorderWidth: 9,
        backgroundBorderWidth: 7,
        animateInView: true, 
        animationStep: 5,
        fontColor: '#ff5722',
        percentageTextSize: '24',
        textAdditionalCss: 'line-height: 1;font-family:FiraSansBold',
        textSize: 28,
        textStyle: 'font-size: 12px;',
        textColor: '#666',
        multiPercentage: 1,
        percentages: [10, 20, 30]
      });
	 $("#circle3").circliful({
        animation: 1,
        foregroundColor: '#e91e63',
        backgroundColor: '#42A5F5',
        foregroundBorderWidth: 9,
        backgroundBorderWidth: 7,
        animateInView: true, 
        animationStep: 5,
        fontColor: '#e91e63',
        percentageTextSize: '24',
        textAdditionalCss: 'line-height: 1;font-family:FiraSansBold',
        textSize: 28,
        textStyle: 'font-size: 12px;',
        textColor: '#666',
        multiPercentage: 1,
        percentages: [10, 20, 30]
     });

	//instagram feed
    var token = '210891886.ba4c844.144f90c5bf0442f1810d05f50f489555',
        username = 'amiran495',
        num_photos = 30;

    $.ajax({ // the first ajax request returns the ID
        url: 'https://api.instagram.com/v1/users/search',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, q: username}, // actually it is just the search by username
        success: function(data){
            console.log(data);
            $.ajax({
                url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
                dataType: 'jsonp',
                type: 'GET',
                data: {access_token: token, count: num_photos},
                success: function(data2){
                    console.log(data2);
                    for(x in data2.data){
                        $('.insta__photos-list').append('<li class="insta__photos-item"><a class="insta__photos-link" target="_blank" href="'+data2.data[x].link+'"><img class="insta__photos-img" src="'+data2.data[x].images.low_resolution.url+'"></a></li>');
                    }
                },
                error: function(data2){
                    console.log(data2);
                }
            });
        },
        error: function(data){
            console.log(data);
        }
    });

    //feedback img slider
    // s
    $('.feedback__list').slick({
        prevArrow: $('.feedback__arrow.arrow-prev'),
        nextArrow: $('.feedback__arrow.arrow-next'),
        dots: true,
        swipe: false,
        customPaging : function(slider, i) {
            return '<div class="feedback__dots-link"></div>';
        },
        dotsClass: 'feedback__dots'
    });
    //feedback slider
    $(".feedback__photo-wrap").twentytwenty();


    // $('.feedback__list').on('init', function(event, slick, currentSlide){
    //     console.log(currentSlide)
    //     // var current = $('.your-element').slick('slickCurrentSlide');
    //     var photoSlider = document.querySelector('.slick-current').querySelector('.feedback__js-slider');
    //     // var prevSlide = document.querySelector('.slick-current').previousElementSibling.querySelector('.feedback__js-slider');
    //     // var disable = new Powerange(prevSlide, { disable: true});
    //     var init  = new Powerange(photoSlider, { callback: setOpacity,  decimal: true, min: 0, max: 1, start: 0 });
    //     $('.range-min').text('До');
    //     $('.range-max').text('После');
    //     function setOpacity() {
    //         console.log(photoSlider.value);
    //         $('.photo-before').css('opacity', photoSlider.value? 1-photoSlider.value : 1);
    //         $('.photo-after').css('opacity', photoSlider.value);
    //     }
    // });
    // $('.feedback__list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     console.log(currentSlide);
    //     console.log(nextSlide);
    // });





    //delivery cart flip
    $('.delivery__switch-btn').on('click', function (e) {
        e.preventDefault();
        var cart = $(this).closest('.delivery__cart'),
            btnWrap = cart.find('.delivery__switch-wrap'),
            activeBtn = btnWrap.children('.delivery__switch-btn').filter('.active');

        if(!$(this).hasClass('active')){
            cart.toggleClass('flip');
        }
    });
    //form more inputs
    $('.delivery__show-more-inpts').on('click', function(e){
        e.preventDefault();
        var labels = $(this).siblings('.delivery__order-more-labels');
        $(this).toggleClass('open');
        labels.slideToggle()
    });


	
});

