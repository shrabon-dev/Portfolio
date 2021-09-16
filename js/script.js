$('.service-slider').slick({
   slidesToShow:3,
   arrows: true,
   prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
   nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
   responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
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

$('.testi-slider').slick({
   slidesToShow: 2,
   arrows: true,
   autoplay: true,
   prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
   nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
   responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
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
var mixer = mixitup('.portfolio');


$(".red").click(function(){
   $(".style").attr("href","css/red.css")
});
$(".white").click(function(){
  $(".style").attr("href","css/style.css")
});