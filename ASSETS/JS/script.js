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