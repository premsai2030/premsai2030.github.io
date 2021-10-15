//$('.main_image').slick();
$('.image_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    dots:true,
  });
  $(".photography_images").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    //dots:true,
  })

  $(".sub_images").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
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