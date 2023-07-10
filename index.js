const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


function HideShowList() {

  document.getElementById("car__list").classList.toggle('hide');

};

function HideShowQuest() {

  document.getElementById("answer").classList.toggle('hide');

};

function HideShowFooter__first() {

  document.getElementById("First").classList.toggle('hide');

};

function HideShowFooter__second() {

  document.getElementById("Second").classList.toggle('hide');

};

function HideShowFooter__third() {

  document.getElementById("Third").classList.toggle('hide');

};

function HideShowFooter__fourth() {

  document.getElementById("Fourth").classList.toggle('hide');

};


function ShowCars() {

  let card = document.getElementsByClassName("auto-list__card");
  for(let i = 0; i<card.length;i++) {
    card[i].style.display = "flex"
  }

  document.getElementById("micro-btn").classList.toggle('hide');

};

