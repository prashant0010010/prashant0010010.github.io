// // Get all images with class "profile-photo"
// var images = document.querySelectorAll(".profile-photo");

// // Get the modal
// var modal = document.getElementById("photo-modal");

// // Get the modal content element
// var modalImg = document.getElementById("enlarged-photo");

// // Loop through each image and attach onclick event listener
// images.forEach(function(img) {
//     img.addEventListener("click", function() {
//         // Set the source of the modal image to the clicked image
//         modalImg.src = this.src;
//         // Open the modal
//         modal.style.display = "block";
//         // Center the modal
//         modal.style.top = "50%";
//         modal.style.left = "50%";
//         modal.style.transform = "translate(-50%, -50%)";
//         // Make the photo slightly bigger when clicked
//         modalImg.style.width = "auto";
//         modalImg.style.height = "80vh"; // Adjust as needed
//     });
// });

// // Close modal when clicking outside the image
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };

// // Close modal when clicking on the modal image (to restore its original size)
// modalImg.onclick = function(event) {
//     event.stopPropagation(); // Prevent the modal from closing when clicking on the image
//     modal.style.display = "none";
// };
