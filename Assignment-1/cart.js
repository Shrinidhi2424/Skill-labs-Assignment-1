let totalPrice = 0;

// Function to add a cake to the cart
function addToCart(flavor, size) {
    const price = size === 'small' ? 20 : size === 'medium' ? 30 : 40;

    // Create a cake object to add to the cart
    const cake = {
        flavor: flavor,
        size: size,
        price: price
    };

    // Retrieve existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(cake); // Add new item to the cart
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Save back to localStorage

    totalPrice += price; // Update total price
    updateCart(); // Update the display
}

// Function to update the cart display
function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    // Loop through cart to display each item
    cartItems.forEach(cake => {
        const item = document.createElement('div');
        item.innerHTML = `Flavor: ${cake.flavor}, Size: ${cake.size}, Price: ₹${cake.price}`;
        cartItemsContainer.appendChild(item);
    });

    // Update total price in the cart
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

// Function to handle checkout
function checkout() {
    alert('Proceeding to checkout!');
}

// Optional: Function to clear the cart
function clearCart() {
    localStorage.removeItem('cartItems'); // Clear cart items from localStorage
    totalPrice = 0; // Reset total price
    updateCart(); // Update the cart display
}

// Call this function on your cart.html page to display items
if (window.location.pathname.endsWith("cart.html")) {
    updateCart(); // Call the update function to display items when the page loads
}
