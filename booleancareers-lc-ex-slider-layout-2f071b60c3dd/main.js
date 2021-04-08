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

  //Navigazione da Tastiera

 $(document).keydown(function(e){
     console.log(e);
     console.log(e.keyCode);

     if(e.keyCode ==37) {
         nextPrevSlide('prev');
     } else if (e.keyCode == 39) {
         nextPrevSlide('next');
     
    
    }
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

      //next

    if(direction === 'next') {
       if(activeImage.hasClass('last')) {
          $('.images img.first').addClass('active');
          $('nav i.first').addClass('active');
        } else {
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }

    }

        //Prev

        else if (direction === 'prev') {
          if(activeImage.hasClass('first')) {
            $('images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else { 
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }
}
