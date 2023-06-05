(function ($) {
  "use strict";
    // mobile-menu
  $('#pricingPlanSwitcher').change(function(){
    if($('#pricingPlanSwitcher').is(':checked')){
        $('#mainPricingContent').addClass('plan-one');
        $('#mainPricingContent').removeClass('plan-two');
    } else {
      $('#mainPricingContent').addClass('plan-two');
      $('#mainPricingContent').removeClass('plan-one');
    }
  }).change();




	$('.mobile-menu-btn').on("click",function(){
		$('.main-nav').addClass('show-menu');
	  });
	
	  $('.menu-close-btn').on("click",function(){
		$('.main-nav').removeClass('show-menu');
	  });
	 // Odometer Counter

   $(".coundown").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });


	  // mobile-drop-down
	
	  $(".main-nav .bi").on('click', function (event) {
		var $fl = $(this);
		$(this).parent().siblings().find('.sub-menu').slideUp();
		$(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
		if ($fl.hasClass('bi-chevron-down')) {
			$fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
		} else {
			$fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
		}
		$fl.next(".sub-menu").slideToggle();
	  });
   
  // sticky header
window.addEventListener('scroll',function(){
	const header = document.querySelector('header.style-1,header.style-2, header.style-3,header.style-4,header.style-5,header.style-6');
	header.classList.toggle("sticky",window.scrollY > 0);
  });

// Menu Toggle button sidebar
var toggleIcon = document.querySelectorAll('.sidebar-button')
var closeIcon = document.querySelectorAll('.cross-icon')
var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')

toggleIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.add('show-sidebar')
        })
    })
})
closeIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.remove('show-sidebar')
        })
    })
})

 window.onclick = function(event){
    // Menu Toggle button sidebar
    searchWrap.forEach((el)=>{
      if(event.target === el){
        el.classList.remove('show-sidebar')
      }
    })
}

  /* ---------------------------------------------
     Mobile-search-area
     --------------------------------------------- */

$('.search-btn').on("click", function(){
	$('.mobile-search').addClass('slide');
  });
  
  $('.search-cross-btn').on("click", function(){
	$('.mobile-search').removeClass('slide');
  });
  
  // niceSelect
  $('select').niceSelect();

  var lgDownWidth = $(window).width();
  if ( lgDownWidth <= 991 ) {
    // mobile-drop-down
    $(".main-nav .bx").on('click', function (event) {
      var $fl = $(this);
      $(this).parent().siblings().find('.sub-menu').slideUp();
      $fl.next(".sub-menu").slideToggle();
    });
  
  }

  /* ---------------------------------------------
     Sliders
     --------------------------------------------- */
// wocom
var swiper = new Swiper(".wocom-slider", {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,
  loop: true,
      autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
  navigation: {
    nextEl: ".wocom-next",
    prevEl: ".wocom-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    386: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 4
    },
  }
});

var swiper = new Swiper(".tab-slider", {
  speed: 3000,
  spaceBetween: 0,
  loop: false,
      autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
  navigation: {
    nextEl: ".tab-next",
    prevEl: ".tab-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    386: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  }
});

// Home Three Testimonial
var swiper = new Swiper(".best-selling-plugin-slider", {
  slidesPerView: 1,
  loop: true,
  speed:1500,
  // autoplay: {
  //   delay: 3000,
  // },
  navigation: {
    nextEl: ".next-btn-plugin",
    prevEl: ".prev-btn-plugin",
  },
  breakpoints: {
    280:{
      slidesPerView: 1,
    },
    420:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 1
    },
    992:{
      slidesPerView: 1
    },
    // 1200:{
    //   slidesPerView: 2
    // },
    // 1400:{
    //   slidesPerView: 2
    // },
    // 1600:{
    //   slidesPerView: 2
    // },
  }
});

// Home Two testimonial Slider
var swiper = new Swiper(".h3-testimonial-slider", {
  spaceBetween: 24,
  slidesPerView: 2,
  loop: true,
  speed:2000,
  // autoplay: {
  //   delay: 3000,
  // },
  navigation: {
    nextEl: ".next-btn-5",
    prevEl: ".prev-btn-5",
  },
 
  breakpoints: {
    280:{
      slidesPerView: 1,
    },
    480:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 1
    },
    992:{
      slidesPerView: 2
    },
    1200:{
      slidesPerView: 2
    },
    1400:{
      slidesPerView:2
    },
    1600:{
      slidesPerView: 2
    },
  }
});

/// active  slider item
 $(".swiper-slide .nav-item .nav-link ").on("click",function(){  
        $('.swiper-slide .nav-item .nav-link').removeClass('active');
          $(this).addClass("active");
 })


 /// active sidebar item added active class
 
 $(".tab-category-container ul li ").on("click",function(){
            
  $('.tab-category-container ul li').removeClass('active');
   $(this).addClass("active");
})



 $(".tab-prev").hide();



 $(".tab-next.swiper-next-arrow").on('click', function(){
      let self = $(this);
      if(self.hasClass('swiper-button-disabled')){
            $(this).hide();
      }

  $(".tab-prev").show();
     
      
 })


 $(".tab-prev.swiper-prev-arrow").on('click', function(){
 
      let self = $(this);
      if(self.hasClass('swiper-button-disabled')){
            $(this).hide();
           
      }
      $(".tab-next.swiper-next-arrow").fadeIn().fadeIn("slow").fadeIn(1000);
 })
})(jQuery);