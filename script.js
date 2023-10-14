const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}



let cart = []; // Initialize an empty cart array to store selected products

function addToCart(product) {
    cart.push(product); // Add the selected product to the cart
}

function updateCartTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price; // Assuming each product has a 'price' property
    }

    return total;
}

// Example usage
let product1 = { name: "Product 1", price: 10 };
let product2 = { name: "Product 2", price: 20 };

addToCart(product1);
addToCart(product2);

let totalCost = updateCartTotal();

console.log("Total Cost:", totalCost);

/* style.css */

/* ... (your existing styles) ... */

.header-image {
    border-radius: 50%;
    width: 150px; /* Adjust the size as needed */
    height: 150px; /* Adjust the size as needed */
    margin-left: 20px;
}





// JavaScript (script.js)

// Define an array to store the cart items
let cart = [];

// Function to add an item to the cart
function addToCart(productName, price) {
    let item = {
        productName: productName,
        price: price
    };
    cart.push(item);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    let cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.innerText = cart.length;
    }
}

// Attach event listeners to the "Add to Cart" buttons
let addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        let productName = button.parentElement.querySelector('h5').innerText;
        let price = button.parentElement.querySelector('h4').innerText;
        addToCart(productName, price);
    });
});

