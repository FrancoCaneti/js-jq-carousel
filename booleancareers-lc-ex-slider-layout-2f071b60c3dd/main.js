$(document).ready(function(){

//variabili

var btnR = $('.next');
var btnL = $('.prev');

//navigazione con muose a destra

btnR.click(function() {
     console.log('destra');
});
//navigazione con muose a sinistra

btnL.click(function(){
   console.log('sinistra');
});

});
/*FUNZIONI*/

/*Navigazione Slide*/

function leftRightSlide(direction) {
    console.log(direction);
    var imageActive = $('.images img.active');

    //remove active
    imageActive.removeClass('active');

    if(direction === 'next') {
        imageActive.next('img').addClass('active');
    }

}

