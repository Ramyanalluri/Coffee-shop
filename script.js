document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const orderSummaryDiv = document.getElementById('order-summary');

    orderButton.addEventListener('click', () => {
        const espressoQuantity = parseInt(document.getElementById('espresso-quantity').value, 10);
        const latteQuantity = parseInt(document.getElementById('latte-quantity').value, 10);
        const cappuccinoQuantity = parseInt(document.getElementById('cappuccino-quantity').value, 10);
        const mochaQuantity = parseInt(document.getElementById('mocha-quantity').value, 10);

        if (isNaN(espressoQuantity) || isNaN(latteQuantity) || isNaN(cappuccinoQuantity) || isNaN(mochaQuantity)) {
            alert("Please enter valid quantities for all items.");
            return;
        }

        const orderSummary = `
            <h3>Order Summary</h3>
            <p>Espresso: ${espressoQuantity}</p>
            <p>Latte: ${latteQuantity}</p>
            <p>Cappuccino: ${cappuccinoQuantity}</p>
            <p>Mocha: ${mochaQuantity}</p>
        `;
        
        orderSummaryDiv.innerHTML = orderSummary;
    });

    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('newsletter-email').value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Thank you for subscribing with ${email}!`);
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
