// function expandImage(element) {
//     element.classList.toggle("fullscreen"); // Toggle করলে বড়/ছোট হবে
// }
// function openFullscreen(imageSrc) {
//     let modal = document.getElementById("imageModal");
//     let fullImage = document.getElementById("fullImage");
//     fullImage.src = imageSrc;
//     modal.style.display = "block";
// }

// function closeFullscreen() {
//     document.getElementById("imageModal").style.display = "none";
// }

// function openFullscreen(imageSrc) {
//     const modal = document.getElementById("imageModal");
//     const fullImage = document.getElementById("fullImage");
//     fullImage.src = imageSrc;
//     modal.style.display = "block";
//   }

//   function closeFullscreen() {
//     document.getElementById("imageModal").style.display = "none";
//   }



function openFullscreen(imageSrc) {
  document.getElementById("fullImage").src = imageSrc;
  document.getElementById("imageModal").style.display = "block";
}

function closeFullscreen() {
  document.getElementById("imageModal").style.display = "none";
}