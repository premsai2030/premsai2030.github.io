//$('.main_image').slick();
$('.image_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  draggable: true,
  dots: true,
});
$(".twitter_posts").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  draggable: true,
})

$(".sub_images").slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: true,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: true,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
})