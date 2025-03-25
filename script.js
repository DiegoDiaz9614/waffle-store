document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    const cartDisplay = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const productName = product.getAttribute("data-name");
            const productPrice = product.getAttribute("data-price");
            
            cartCount++;
            cartDisplay.textContent = cartCount;
            alert(`${productName} added to cart for $${productPrice}!`);
        });
    });
});