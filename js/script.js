let but = document.querySelector(".burger__menu-btn");
let burgerlist = document.querySelector(".burger__nav");
let burgerlink = document.querySelectorAll(".burger__nav-item");
let playbutton = document.querySelector(".vidbutton");
let myVideo = document.querySelector(".video__player");
let mouseIcon = document.querySelector(".hero__mouse-icon");
but.addEventListener('click',function(event){
  but.classList.toggle('burger-active');
  document.body.classList.toggle('no-scroll');
  mouseIcon.classList.toggle('hero__mouse-hidden');
  burgerlist.classList.toggle('burger-active');
});
document.addEventListener('click',function(event){
  if(event.target.closest('.burger__nav-link')){
    but.classList.toggle('burger-active');
    document.body.classList.toggle('no-scroll');
    burgerlist.classList.toggle('burger-active');
  }
  if(event.target.closest('.video__player')){
    playbutton.classList.toggle('visually-hidden');
    if (myVideo.paused) {
      myVideo.play();
    }
    else {
      myVideo.pause(); 
    }
  }
});
let swiper = new Swiper('.apartments__slider', {
  loop: true,                         //loop
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
let header = document.querySelector(".header")
window.onscroll = function(){      
  if(window.scrollY > 1){
    header.style.background = "rgb(45,52,60,0.9)"
  }
  else{
    header.style.background = "transparent" 
  }
}