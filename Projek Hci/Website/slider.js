var Sliders = 1;
showSlides(Sliders);
function plusSlides(n) {
  showSlides(Sliders += n);
}
function currentSlide(n) {
  showSlides(Sliders = n);
}
function showSlides(n) {
  var j;
  var slides = 
  document.getElementsByClassName("sliderr");
  var bulet = 
  document.getElementsByClassName("titik");
  if (n > slides.length) {Sliders = 1}
  if (n < 1) {Sliders = slides.length}
  for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
  }
  for (j = 0; j < bulet.length; j++) {
      bulet[j].className = bulet[j].className.replace(" Replace", "");
  }
  slides[Sliders-1].style.display = "block";
  bulet[Sliders-1].className += " Replace";
}