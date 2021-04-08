$(document).ready(function(){

//variabili

var btnR = $('.next');
var btnL = $('.prev');

//navigazione con muose a destra

  btnR.click(function() {
    nextPrevSlide('next');
  });
//navigazione con muose a sinistra

  btnL.click(function(){
    nextPrevSlide('prev');
  });

});

/*FUNZIONI*/

/*Navigazione Slide*/

function nextPrevSlide(direction) {
    console.log(direction);
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');

    //remove active
   activeImage.removeClass('active');
    activeCircle.removeClass('active');

    if(direction === 'next') {
       if(activeImage.hasClass('last')){
          $('.image img.first').addClass('active');
          $('nav i.first').addClass('active');
        }


        activeImage.next('img').addClass('active');
        activeCircle.next('i').addClass('active');
    }

}

