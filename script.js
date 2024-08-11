document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    orderButton.addEventListener('click', () => {
        const espressoQuantity = document.getElementById('espresso-quantity').value;
        const latteQuantity = document.getElementById('latte-quantity').value;
        const cappuccinoQuantity = document.getElementById('cappuccino-quantity').value;
        const mochaQuantity = document.getElementById('mocha-quantity').value;

        alert(`Order Summary:
        Espresso: ${espressoQuantity}
        Latte: ${latteQuantity}
        Cappuccino: ${cappuccinoQuantity}
        Mocha: ${mochaQuantity}`);
    });
});
