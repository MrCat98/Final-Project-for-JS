import '../scss/style.scss'

console.log('It works!')
let swiperInstance;

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      slidesPerView:'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  else if (window.innerWidth >= 768 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);

const box = document.getElementById('swiper-section')
const changeButton = document.getElementById("watch")
const buttonText = document.querySelector('.button-watch-text')

changeButton.addEventListener('click', () =>{
  box.classList.toggle('show-all');
  changeButton.classList.toggle('active');

  if(box.classList.contains('show-all')){
    buttonText.textContent ='Скрыть';
  } else {
    buttonText.textContent = 'Показать все';
  }

})
