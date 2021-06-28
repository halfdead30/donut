(function($) {

  window.onload = function() {

    const preloader = document.querySelector('.preloader');
    preloader.classList.add('loaded');

  }

  // Burger event
  const burger = document.querySelector('.hamburger');
  const menu = document.querySelector('.header-menu');

  burger.addEventListener('click', function(e) {
    this.classList.toggle('active');
    menu.classList.toggle('show');
  });

  // Swiper Slider
  const mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  // Add animation on scroll
  const wow = new WOW({
    animateClass: 'animated',
    offset: 0
  });

  wow.init();

  // Load More btn
  const works = document.querySelector('.works-item');
  const xhr = new XMLHttpRequest();
  const btnLoad = document.querySelector('.btn.btn-load');

  btnLoad.addEventListener('click', function(e) {

    xhr.onreadystatechange = function() {
      if ( this.readyState == 4 && this.status == 200 ) {
        works.innerHTML += this.responseText;
      }
    }
    
    xhr.open('GET', 'ajax-pages/works.html', true);
    xhr.send();

    this.remove();

  });

  // COUNTER
  $(document).scroll(function() {
    $('.odometer').each( function() {
      let parentSectionPostion = $(this).closest('section').position();
      let parentSectionTop = parentSectionPostion.top;
      if ($(document).scrollTop() > parentSectionTop - 300) {
        if ($(this).data('status') == 'yes') {
          $(this).html( $(this).data('count') );
          $(this).data('status', 'no')
        }
      }
    });
  });

  // Smooth scroll
  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const blockID = anchor.getAttribute('href').substr(1);
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      burger.classList.remove('active');
      menu.classList.remove('show');
    });
  });

})(jQuery);