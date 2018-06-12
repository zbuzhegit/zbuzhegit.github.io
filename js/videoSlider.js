var slideIndex2 = 1;
showSlides2(slideIndex);

// Next/previous controls
function nextSlides(b) {
  showSlides2(slideIndex2 += b);
}

// Thumbnail image controls
function thisSlide(b) {
  showSlides2(slideIndex2 = b);
}

function showSlides2(b) {
  var i;
  var slides = document.getElementsByClassName("bonus__slider_video");
  var dots = document.getElementsByClassName("bonus__slider_dott");
  if (b > slides.length) {slideIndex2 = 1}
  if (b < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "flex";
  dots[slideIndex2-1].className += " active";
}
