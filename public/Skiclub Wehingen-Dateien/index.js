document.addEventListener('scroll', function () {
    const stickyElement = document.getElementById('sticky');
    const triggerHeight = 10; // The height after which the sticky element should appear

    if (window.scrollY > triggerHeight) {
        stickyElement.classList.remove('hidden');
        stickyElement.classList.add('visible');
    } else {
        stickyElement.classList.remove('visible');
        stickyElement.classList.add('hidden');
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("pictures");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function scrollup() {
    document.getElementById('scrollup').scrollIntoView({
        behavior: 'smooth'
    });
    setTimeout(function() {
        location.reload()
    }, 500);
};


document.addEventListener('DOMContentLoaded', function() {
    const flyInElement = document.getElementById('fly-in');
    
    // Add the class to start the animation
    setTimeout( function() {
      flyInElement.classList.add('fly-in-visible');
    }, 500); // Delay to see the transition effect clearly
  });
  
function scrolldown() {
    document.getElementById('arrow-scroll-into').scrollIntoView({
        behavior: 'smooth',

    });
};

function redirect(page) {
    window.location.href = page;
};