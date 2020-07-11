
// logic for the preloader
$(window).on('load', function () {
  $('#status').fadeOut()
  $('#preloader').delay(500).fadeOut()
  $('.navbar-brand').addClass('animate__animated animate__bounce')
})



// Animate on scroll logic
AOS.init({
  once: true,
  easing: 'ease-in-out',
  offset: 160,
  duration: 600,
});





// Slick Slider Configuration for my-work images
$(document).ready(function () {
  $('.slider-mobile').slick({
    slidesToShow: 3,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  })
});

// Slick Slider Configuration for my-work images
$(document).ready(function () {
  $('.slider-gallery').slick({
    slidesToShow: 4,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          arrows: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  })
});



// Logic for dropdown toggle on mobile
$(function(){
  $(".dropdown-menu li a").click(function(){
    $(".dropdown-toggles:first-child").text($(this).text());
     $(".dropdown-toggles:first-child").val($(this).text());
  });
});

// logic to change active tab pane for gallery section on mobile
$(document).ready(function(){
  $('.dropdown-menu li a').on('click', function(){
    $('.dropdown-menu li a').removeClass('active');
    $(this).addClass('active');
    var href = $(this).attr('href').substring(1);
    $('.tab-pane').removeClass('active show');
    $('.tab-pane[id="'+ href +'"]').toggleClass('active show');
  });
});


// Hover config for patners section svg images
$(".svg-hover").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});

      

// logic to insert clicked image into the modal
$('.image').on('click', (event) => {
  let src = event.target.src;
  $('.image_modal').attr('src', src);
});

// logic to insert texts and information on clicked image into modal
$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  var name = button.data('name') 
  var date = button.data('date')
  var modal = $(this)
  modal.find('.couple-name').text(name)
  modal.find('.wedding-date').text(date)
})


$('.magnify').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});



$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  console.log('heyyy')
  $('.slider-gallery').slick('setPosition', 0);
});





