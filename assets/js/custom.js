function openFullscreen(imageSrc) {
  document.getElementById("fullImage").src = imageSrc;
  document.getElementById("imageModal").style.display = "block";
}

function closeFullscreen() {
  document.getElementById("imageModal").style.display = "none";
}



document.getElementById("myForm").addEventListener("submit", function (event) {
  setTimeout(() => {
    event.target.reset(); 
  }, 1000); 
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
}

window.onscroll = () =>  {
  sections.forEach( sec => {
    let top = window.scrollY;
    let offest = sec.offestTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offest && top < offest + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*='+ id + ']').classList.add('active')
      })
    }
  })

}