console.log('hola ani');
var i = -1;
var headerImage = document.querySelector('.header-imager');

function mouse(){
  headerImage.addEventListener('mousemove', _.debounce(function(){
    var imageContainer = document.querySelector('.header-image-container');
    var images = imageContainer.querySelectorAll('img');
    console.log(images);
    var random = Math.floor(Math.random() * images.length);
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
 },50));
}

function init(){
  mouse();
}init();
