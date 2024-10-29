// Form Validation
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});

// Image Slideshow
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById('slideshow-image').src = images[index];
}

setInterval(changeImage, 3000);

// Toggle Button
document.getElementById('toggle-button').addEventListener('click', function() {
    const featuredJobs = document.getElementById('featured-jobs');
    if (featuredJobs.style.display === "none") {
        featuredJobs.style.display = "block";
    } else {
        featuredJobs.style.display = "none";
    }
});
