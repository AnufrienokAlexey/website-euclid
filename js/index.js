//Swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  // навигация
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
  }
})

//Как мы работаем

document.querySelectorAll('.how__item').forEach(function(el) {
  el.addEventListener('click', function(e) {

    const path = e.currentTarget.dataset.path

    document.querySelectorAll('.how__sub-wrapper').forEach(function(el) {
      el.classList.remove('how__sub-wrapper--active')
    })

    e.currentTarget.classList.add('how__sub-wrapper--active')

    document.querySelectorAll('.how__sub-wrapper').forEach(function(el) {
      el.classList.remove('how__sub-wrapper--active')
    })

    document.querySelector(`[data-target="${path}"]`).classList.add('how__sub-wrapper--active')

  })
})

document.querySelectorAll('.how__item-link').forEach(function(el) {
  el.addEventListener('click', function(el) {

    document.querySelectorAll('.how__item-link').forEach(function(el) {
      el.classList.remove('how__item-link--active')
    })

    el.target.classList.add('how__item-link--active')
  })
})

//Аккордион

$(function() {
  $(".accordion").accordion({
    heightStyle: "content",
    active: "false",
    collapsible: "true"});
})


// Бургер

document.querySelector('.header__burger').addEventListener('click', function() {
  document.querySelector('.burger').classList.toggle('is-active')
})

document.querySelector('.burger__close').addEventListener('click', function() {
  document.querySelector('.burger').classList.toggle('is-active')
})

//Поиск

document.querySelector('.nav__search-button').addEventListener('click', function() {
  document.querySelector('.modal-search').classList.remove('modal-search__active')
});

document.querySelector('.search__img-close').addEventListener('click', function() {
  document.querySelector('.modal-search').classList.add('modal-search__active')
});

