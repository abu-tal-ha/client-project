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