import '../scss/style.scss'


console.log('It works!')
let swiperFirst = null;
let swiperSecond = null;
let swiperThird = null;

function initSwipers() {
  if (window.innerWidth < 768 && !swiperFirst) {
    swiperFirst = new Swiper('.swiper-first', {
      slidesPerView:'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper__pagination--first',
        clickable: true,
      },
    });

  } else if (window.innerWidth >= 768 && swiperFirst) {
    swiperFirst.destroy(true, true);
    swiperFirst = null;
  }
  if (window.innerWidth < 768 && !swiperSecond) {
    swiperSecond = new Swiper('.swiper-second', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper__pagination--second',
        clickable: true,
      },
    });

  } else if (window.innerWidth >= 768 && swiperSecond) {
    swiperSecond.destroy(true, true);
    swiperSecond = null;
  }
   if (window.innerWidth < 768 && !swiperThird) {
    swiperSecond = new Swiper('.swiper-third', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper__pagination--third',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiperThird) {
    swiperSecond.destroy(true, true);
    swiperSecond = null;
  }
}

initSwipers();

window.addEventListener('resize', initSwipers);