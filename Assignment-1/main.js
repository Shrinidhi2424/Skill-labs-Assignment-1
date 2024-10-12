// Function to add an item to the cart
function addToCart(cakeName, price) {
    // Retrieve existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Create a new item object
    const cartItem = { name: cakeName, price: price };

    // Add the new item to the cart
    cartItems.push(cartItem);

    // Save the updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert(cakeName + " has been added to your cart.");
}

// Function to display cart items on cart.html
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartList = document.getElementById('cart-items'); 

    // Clear previous content
    cartList.innerHTML = '';

    // If there are no items, show a message
    if (cartItems.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty!</p>';
        document.getElementById('total-price').innerText = '0.00'; 
        return;
    }

    let totalPrice = 0; // Variable to calculate total price

    // Loop through cart items and display them
    cartItems.forEach(item => {
        const li = document.createElement('div'); // Changed to div for better layout control
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
        totalPrice += item.price; // Accumulate total price
    });

    // Update total price in the cart
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

// Example event listener for "Add to Cart" button (modify accordingly)
const addToCartButtons = document.querySelectorAll('.add-to-cart-button'); // Ensure these buttons exist in your cake detail pages

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cakeName = this.dataset.flavor; // Assuming buttons have data attributes for flavor
        const price = parseFloat(this.dataset.price); // Assuming buttons have data attributes for price
        addToCart(cakeName, price);
    });
});

// Call this function on your cart.html page to display items
if (window.location.pathname.endsWith("cart.html")) {
    displayCartItems(); // Call to display items in the cart
}
