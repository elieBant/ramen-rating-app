document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenImg = document.getElementById("ramen-img");
    const ramenName = document.getElementById("ramen-name");
    const ramenRestaurant = document.getElementById("ramen-restaurant");
    const ramenRating = document.getElementById("ramen-rating");
    const ramenComment = document.getElementById("ramen-comment");
    const ramenForm = document.getElementById("ramen-form");

    let ramens = [
        {
            name: "Naruto Ramen",
            restaurant: "Naruto",
            rating: 10,
            Comment: "My absolute fave!",
            Image: "https://www.themealdb.com/media/meals/images/naruto.jpg"
        },
        {
            name: "shoyu Ramen",
            restaurant: "tokyo Ramen",
            rating: 4,
            Comment: "Great broth and toppings",
            image: "https://www.themealdb.com/media/meals/images/shoyu.jpg"
        }
    ];

    // Display all ramen images
    function displayRamens() {
        ramenMenu.innerHTML = "";
        ramens.forEach((ramen, index) => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.addEventListener("click", () => handleClick(index));
            ramenMenu.appendChild(img);

        });
        // Automatically display the first ramen details
        if (ramens.length > 0) handleClick(0);
    }

    // Display ramen details when clicked
    function handleClick(index) {
        const ramen = ramen[index];
        ramenImg.src = newRamen.image;
        ramenName.textContent = ramen.name;
        ramenRestaurant.textContent = ramen.restaurant;
        ramenRating.textContent = ramen.rating;
        ramenComment.textContent = ramen.Comment;
    }

    // Handle new ramen submission
    function addSubmitListener() {
        ramenForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const newRamen = {
                name: document.getElementById("new-name").value,
                restaurant: document.getElementById("new-restaurant").value,
                rating: document.getElementById("new-rating").value,
                Comment: document.getElementById("new-comment").value,
                image: document.getElementById("new-image.").value
            };

            ramens.push(newRamen);
            displayRamens();
            ramenForm.reset();
        });

    }

        // Initialize app
        function main() {
            displayRamens();
            addSubmitListener();
        }

        main();
    });