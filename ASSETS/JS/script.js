// page scrool up function 

const btn =   document.querySelector('.scroll-up-btn');
btn.addEventListener('click', function() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
);

// show and hide section

function myFunction() {
    var expressDelevery = document.getElementById("ExD");
    if (expressDelevery.style.display === "none") {
      expressDelevery.style.display = "block";
    } else {
      expressDelevery.style.display = "none";
    }
  }

//   typring effect

document.addEventListener('DOMContentLoaded', function() {
    // Array of words to be typed
    const words = [
        "packages on time.",
        "to 200+ countries.",
        "with care and security.",
        "business solutions.",
        "peace of mind."
    ];
    
    // Get the typing text element
    const typingTextElement = document.getElementById('typing-text');
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Base typing speed in milliseconds
    
    function type() {
        // Current word being processed
        const currentWord = words[wordIndex];
        
        // Set typing speed based on whether we're deleting or typing
        if (isDeleting) {
            typingSpeed = 50; // Delete faster
        } else {
            typingSpeed = 100 + Math.random() * 50; // Vary the typing speed slightly
        }
        
        // If deleting, remove a character
        // If typing, add a character
        if (isDeleting) {
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // If word is complete, start deleting after pause
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at the end of the word
        } 
        // If word is deleted, move to next word
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word, loop back at the end
            typingSpeed = 500; // Pause before starting new word
        }
        
        // Call the function again after the specified typing speed
        setTimeout(type, typingSpeed);
    }
    
    // Start the typing effect
    setTimeout(type, 1000);
});



//carousel section function

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });