console.log('hola ani');
var i = -1;
var headerImage = document.querySelector('.header-imager');
var page = document.querySelector('.home');

function mouse(){
  headerImage.addEventListener('mousemove', _.debounce(function(){
    var imageContainer = document.querySelector('.header-image-container');
    var images = imageContainer.querySelectorAll('img');
    console.log(images);
    var random = Math.floor(Math.random() * images.length);
    if(!imageContainer.classList.contains('moving')) {
      imageContainer.classList.add('moving')
    }
    console.log('im moving', random);
    i ++
    console.log(i);
    if(i < (images.length)) {
      for(j=0; j<images.length; j++){
        images[j].classList.remove('visible');
      }
      console.log(images[i]);
      images[i].classList.add('visible');
      console.log('its less');
    }else {
      i = -1;
    }
    //random selection of image
    // for(i=0; i<images.length; i++){
    //   images[i].classList.remove('visible');
    //   images[random].classList.add('visible');
    // }
 },35));
 headerImage.addEventListener('mouseleave', _.debounce(function(){
   var imageContainer = document.querySelector('.header-image-container');
   if(imageContainer.classList.contains('moving')) {
     imageContainer.classList.remove('moving')
   }
   var images = imageContainer.querySelectorAll('img');
   for(i=0; i<images.length; i++){
     images[i].classList.remove('visible');
   }
 }, 50));
 page.addEventListener('click', function(){
   var imageContainer = document.querySelector('.header-image-container');
   if(imageContainer.classList.contains('moving')) {
     imageContainer.classList.remove('moving')
   }
 });
}

function topscroll() {
  console.log('top');
  document.addEventListener('scroll', function(){
    var tracker = document.querySelector('.tracker');
    var position = tracker.getBoundingClientRect().top;
    var toplink = document.querySelector('.top');
    console.log(position);
    if(position <= -300) {
      toplink.classList.add('visible');
    } else {
      toplink.classList.remove('visible');
    }
  })
}

function random() {
  document.addEventListener('DOMContentLoaded', function(e) {
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        // When the user is [modifier]px from the bottom, fire the event.
        let modifier = 0;
        if(currentScroll + modifier > documentHeight) {
            console.log('You are at the bottom!')
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'auto'
            });
        }
    })
})
}

function menu(){
  var menu = document.querySelector('.ad-mobile-menu');
  var hamburger = document.querySelector('.ad-hamburger');

  hamburger.addEventListener('click', function(){
    this.classList.toggle('clicked');
    menu.classList.toggle('clicked');
  });
}



function init(){
  if(document.querySelector('.header-imager')) {
    mouse();
    topscroll();
  }
  if(document.querySelector('.Loop')) {
    random();
  }
  menu();
}init();
