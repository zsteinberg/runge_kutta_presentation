
var slides = [];
var currentSlide = 0;

window.onload = function(){
	//prepare slides
	slides = document.querySelectorAll('.slide');

	slides.forEach(function(el){

		el.hidden=true;
	});
	showSlide(0);
}

function showSlide(slideToShow){
	if(slideToShow < slides.length && currentSlide < slides.length){
	slides[currentSlide].hidden = true;
	slides[slideToShow].hidden = false;
	}
	currentSlide = slideToShow;
}

//change slide on key change

  window.onkeydown = function(e) {
    switch (e.keyCode) {
      case 33:
      case 37:
      case 38:
		if(index == 0) return;
		var present = mathbox.select("present");
		var index = present.get('index')
		showSlide(index-1);
        return present.set('index', index - 1);
      case 34:
      case 39:
      case 40:
		var present = mathbox.select("present");
		var index = present.get('index')
		showSlide(index+1)
        return present.set('index', index + 1);
    }
  }

