console.log('hola ani');

function mouse(){
  document.addEventListener('mousemove', _.debounce(function(){
    var imageContainer = document.querySelector('.header-image-container');
    var images = imageContainer.querySelectorAll('img');
    console.log(images);
    var random = Math.floor(Math.random() * images.length);
    console.log('im moving', random);
    for(i=0; i<images.length; i++){
      images[i].classList.remove('visible');
      images[random].classList.add('visible');
    }
 },50));
}

function init(){
  mouse();
}init();
