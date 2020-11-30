$('.main .slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3500,
  dots: true,
  focusOnSelect: true
});

$('.sliderall').slick({
  dots: true,
  autoplay:true,
  fade: true,
  autoplaySpeed:5000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

AOS.init();

$(function(){
  $(window).on("scroll",function(){
      if($(window).scrollTop()>50){
        $('.counter').each(function(){
          var $this=$(this),
          countTo=$this.attr('data-count');
          $({countNum: $this.text()}).animate({
              countNum: countTo
          },
        
          {
              duration:2000,
              easing: 'linear',
              step: function() {
                  $this.text(Math.floor(this.countNum));          
              },
              complete: function() {
                  $this.text(this.countNum);          
              },
          });
        });
      }
  })
})

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
