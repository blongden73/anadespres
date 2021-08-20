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
 },45));
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
 if(page){
   page.addEventListener('click', function(){
     var imageContainer = document.querySelector('.header-image-container');
     if(imageContainer.classList.contains('moving')) {
       imageContainer.classList.remove('moving')
     }
   });
 }
}

function lazy(){
  console.log('running');
  var lazy = document.querySelectorAll('.lazy');
  var screenHeight = window.innerHeight / 1.5;
  var belowFold = window.innerHeight * 2;
  console.log(lazy);
  var src1 = lazy[0].dataset.src;
  var src2 = lazy[1].dataset.src;
  lazy[0].setAttribute('src', src1);
  lazy[1].setAttribute('src', src2);
  document.addEventListener('scroll', function(){
    for(i=0; i<lazy.length; i++){
      if(lazy[i].classList.contains('image')){
        var position = lazy[i].getBoundingClientRect();
        var src = lazy[i].dataset.src;
        if(position.top <= belowFold && position.top >= -screenHeight) {
          if(!lazy[i].classList.contains('loaded')){
            lazy[i].setAttribute('src', src);
          }
          lazy[i].classList.add('loaded');
        }
        if(position.top <= screenHeight && position.top >= -screenHeight) {
          lazy[i].classList.add('inview');
        }
      } else if(lazy[i].classList.contains('video')) {
        var position = lazy[i].getBoundingClientRect();
        var source = lazy[i].querySelector('source');
        var src = source.dataset.src;
        if(position.top <= screenHeight && position.top >= -screenHeight) {
          if(!lazy[i].classList.contains('inview')){
            source.setAttribute('src', src);
            lazy[i].load();
          }
          lazy[i].play();
          lazy[i].classList.add('inview');
        } else {
          console.log('else');
          lazy[i].pause();
        }
      }
    }
  })
}lazy();

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
    lazy();
  }
  if(document.querySelector('.Loop')) {
    random();
  }
  menu();
}init();
