document.querySelector('.nav-btn').addEventListener('click', function() {
    document.querySelector('.nav-bar').classList.toggle('responsive');
  });


window.onscroll = function() {
  const navHeader = document.getElementById("header")

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){

    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  }else{
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "100px";
    navHeader.style.lineHeight = "100px";
  }

}



function showContent(section) {
  // Hide all content divs
  let contentDivs = document.querySelectorAll('.content-div');
  contentDivs.forEach(div => div.style.display = 'none');

  // Show the selected content div
  document.getElementById(section).style.display = 'block';
}

// Show the 'skills' section by default on page load
document.addEventListener('DOMContentLoaded', () => {
  showContent('skills');
});


// var typingEffect = new Typed(".typed",{
//   strings : ["Software Developer", "Web Developer", "Illustrator"],
//   loop : true,
//   typeSpeed : 100,
//   backSpeed : 80,
//   backDelay : 2000
// })

document.addEventListener('DOMContentLoaded', () => {
  const strings = ["Software Developer.", "Web Developer.", "Illustrator."];
  let currentStringIndex = 0;
  let currentCharIndex = 0;
  const typingSpeed = 60; // Time in milliseconds between each character
  const pauseTime = 2000; // Time in milliseconds to pause between strings
  const typingElement = document.getElementById('typing');

  function type() {
    if (currentCharIndex < strings[currentStringIndex].length) {
      typingElement.textContent += strings[currentStringIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, pauseTime);
    }
  }

  function erase() {
    if (currentCharIndex > 0) {
      typingElement.textContent = typingElement.textContent.slice(0, -1);
      currentCharIndex--;
      setTimeout(erase, typingSpeed);
    } else {
      currentStringIndex = (currentStringIndex + 1) % strings.length;
      setTimeout(type, typingSpeed);
    }
  }

  // Start the typing effect
  type();
});