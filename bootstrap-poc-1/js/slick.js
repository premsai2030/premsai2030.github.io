//$('.main_image').slick();
$('.image_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  draggable: true,
  dots: true,
  prevArrow: "<button class='slick-prev' ><i class='bi bi-chevron-left'></i></button>",
  nextArrow: "<button class='slick-next' ><i class='bi bi-chevron-right'></i></button>"
});
$(".twitter_posts").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  draggable: true,
  prevArrow: "<button class='slick-prev' ><i class='bi bi-chevron-left'></i> </button>",
  nextArrow: "<button class='slick-next' ><i class='bi bi-chevron-right'></i> </button>"
})

$(".sub_images").slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  speed: 2000,
  prevArrow: "<button class='slick-prev' ><i class='bi bi-chevron-left'></i> Previous</button>",
  nextArrow: "<button class='slick-next' ><i class='bi bi-chevron-right'></i> Next</button>",
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})