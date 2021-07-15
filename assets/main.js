console.log('hola ani');

function mouse(){
  document.addEventListener('mousemove', function(){
    var imageContainer = document.querySelector('.header-image-container');
    var images = imageContainer.querySelectorAll('img');
    console.log(images);
    var random = Math.floor(Math.random() * images.length);
    console.log('im moving', random);
    for(i=0; i<images.length; i++){
      // setTimeout(function(){
      // }, 500, images)
      images[i].classList.remove('visible');

    }
    setTimeout(function(){
      images[random].classList.add('visible');
    }, 1000)
  })
}

function init(){
  mouse();
}init();
