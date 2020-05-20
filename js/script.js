// automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var one;
  var slides = document.getElementsByClassName("mySlides");
  for (one = 0; one < slides.length; one++) {
    slides[one].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// this a typing effect

const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["hard", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;

        setTimeout(type, typingDelay);
    } else {
        // erase
        setTimeout(erase, newTextDelay);

    }
}

// erasing the entire word
function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex -1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }else {
        // typing
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, newTextDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, newTextDelay + 250);
    // type();
}); 
// type();

