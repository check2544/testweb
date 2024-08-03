// Dummy product data
const products = [
    { id: 1, name: "Product 1", price: 29.99, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 39.99, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 49.99, img: "https://via.placeholder.com/150" },
];

// Display products on the home page
const productList = document.getElementById('product-list');
if (productList) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="h-40 w-full object-cover rounded-lg mb-4">
            <h3 class="text-lg font-bold text-gray-800">${product.name}</h3>
            <p class="text-gray-600 mb-4">$${product.price}</p>
            <a href="product.html?id=${product.id}" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">View Details</a>
            <button onclick="addToCart(${product.id})" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 mt-2">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Handle product details page
const productDetail = document.getElementById('product-detail');
if (productDetail) {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);
    if (product) {
        productDetail.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="h-96 w-full object-cover rounded-lg mb-4">
            <h2 class="text-2xl font-bold text-gray-800">${product.name}</h2>
            <p class="text-gray-600 mb-4">$${product.price}</p>
            <button onclick="addToCart(${product.id})" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400">Add to Cart</button>
        `;
    }
}

// Simple cart logic
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} added to cart`);
}

// Display cart items
const cartItems = document.getElementById('cart-items');
if (cartItems) {
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'mb-4');
        cartItemDiv.innerHTML = `
            <h3 class="text-lg font-bold text-gray-800">${item.name}</h3>
            <p class="text-gray-600">$${item.price}</p>
        `;
        cartItems.appendChild(cartItemDiv);
    });
}

// Checkout form submission (simple alert for this example)
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Order placed!');
    });
}
