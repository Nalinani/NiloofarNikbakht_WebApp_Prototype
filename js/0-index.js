document.addEventListener('DOMContentLoaded', function() {
  console.log('TEST');

  // Slider in 0-landing page ---------------------------------------------------------------------------
 // all the slides WILL BE given and savd in slides
  var slides = document.querySelectorAll('.slider .slide'); 
   // Start with the first slide
    var currentIndex = 0;
    // Show the first slide
    showSlide(currentIndex); 

    //  to reveal only the slide at currentIndex
    function showSlide(index) {
        // Ineed to hide all slides:
        slides.forEach(slide => slide.style.display = 'none'); 
        // Show the current slide
        slides[index].style.display = 'block'; 
    }

  // Function to change slide
  function changeSlide(moveStep) {
    // to calculate the new index
    currentIndex += moveStep; 

    if (currentIndex >= slides.length) {
      // Wrap around to the first slide
      currentIndex = 0; 
    } else if (currentIndex < 0) {
      // Wrap around to the last slide
      currentIndex = slides.length - 1; 
    }
    //new slide
    showSlide(currentIndex); 
  }

  // previous and next buttons
  document.querySelector('.prev').addEventListener('click', function() {

    // go to the previous slide
    changeSlide(-1); 

  });

  document.querySelector('.next').addEventListener('click', function() {
    // go to next slide
    changeSlide(1); 

  });

});