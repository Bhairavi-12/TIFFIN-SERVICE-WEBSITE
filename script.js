const navbar = document.querySelector(".navbar");
const header = document.querySelector('.header');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)');
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const slider = document.querySelector(".slider");
const formSection = document.querySelector(".form-section");
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewText = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("reviews");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navbar.classList.remove('show');
  });
});


stars.forEach((star) => {
    star.addEventListener("click", () => {
        const value = parseInt(star.getAttribute("data-value"));
        rating.innerText = value;
 
        // Remove all existing classes from stars
        stars.forEach((s) => s.classList.remove("one", 
                                                "two", 
                                                "three", 
                                                "four", 
                                                "five"));
 
        // Add the appropriate class to 
        // each star based on the selected star's value
        stars.forEach((s, index) => {
            if (index < value) {
                s.classList.add(getStarColorClass(value));
            }
        });
 
        // Remove "selected" class from all stars
        stars.forEach((s) => s.classList.remove("selected"));
        // Add "selected" class to the clicked star
        star.classList.add("selected");
    });
});
 
submitBtn.addEventListener("click", () => {
    const review = reviewText.value;
    const userRating = parseInt(rating.innerText);
 
    if (!userRating || !review) {
        alert(
"Please select a rating and provide a review before submitting."
             );
        return;
    }
 
    if (userRating > 0) {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = 
`<p><strong>Rating: ${userRating}/5</strong></p><p>${review}</p>`;
        reviewsContainer.appendChild(reviewElement);
 
        // Reset styles after submitting
        reviewText.value = "";
        rating.innerText = "0";
        stars.forEach((s) => s.classList.remove("one", 
                                                "two", 
                                                "three", 
                                                "four", 
                                                "five", 
                                                "selected"));
    }
});
 
function getStarColorClass(value) {
    switch (value) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        default:
            return "";
    }
}

const orderButtons = document.querySelectorAll('.order-now');

// Add a click event listener to each button
orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.parentElement.querySelector('h3').textContent;
    const itemPrice = button.parentElement.querySelector('.price').textContent;

    // Replace with your actual logic to add the item to the order
    console.log('Adding item to order:', itemName, itemPrice);
  });
});