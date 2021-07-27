var slideIndex = 1;
showSlides1(slideIndex);

function plusSlides(n) {
  showSlides1(slideIndex += n);
}

function currentSlide(n) {
  showSlides1(slideIndex = n);
}


function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlidesfade1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides1, 4000); // Change image every 2 seconds
}

var slideIndex = 1;
showSlides2(slideIndex);

function plusSlides(n) {
  showSlides2(slideIndex += n);
}

function currentSlide(n) {
  showSlides2(slideIndex = n);
}


function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlidesfade2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides2, 4000); // Change image every 2 seconds
}


var slideIndex = 1;
showSlides3(slideIndex);

function plusSlides(n) {
  showSlides3(slideIndex += n);
}

function currentSlide(n) {
  showSlides3(slideIndex = n);
}


function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("mySlidesfade3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides3, 4000); // Change image every 2 seconds
}










// Alistair Click thing

function handleClick(element){
  element.style.transform = "scale(1)";
}


var image = doc.getElementsByClassName("g_img");
image.addEventListener("ontouchend", function(){
  image.style.transform = "scale(1)";
});
