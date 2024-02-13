document.addEventListener('DOMContentLoaded', (event) => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const myForm = document.getElementById('checkoutform');
    
    // GEtting the cart items from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Calculate total price and create HTML content for cart items
    let total = 0;
    //the items that they choose, so if they choose nothing this will be empty
    let itemsHTML = '';
    cart.forEach((item, index) => {

      total += item.price;

      itemsHTML += '<p>Item ' + (index + 1) + ': <strong>' + item.name + '</strong> - <em>$' + item.price.toFixed(2) + '</em></p>';


    });
  
    // Update the HTML
    cartItemsContainer.innerHTML = itemsHTML;
    //the TOTAL
    totalPriceContainer.innerHTML = `<h2> ** Total Price: $${total.toFixed(2)}</h2>`;


    myForm.addEventListener('submit', function(e){

        e.preventDefault()

        let isValid = true;

        //getting the the cards inputs
        const cardNumber = document.getElementById('card-number');
        const cardCVC = document.getElementById('card-cvc');
        const cardName = document.getElementById('card-name');
        const cardExp = document.getElementById('card-expiry');

        //getting the error messages
        const cardNumberError = document.getElementById('card-number-error');
        const cardCVCError = document.getElementById('card-cvc-error');
        const cardNameError = document.getElementById('card-name-error');
        const cardExpError = document.getElementById('card-expiration-error');

        //getting the shipping input
        const shipName = document.getElementById('shipping-name');
        const shipAddress = document.getElementById('shipping-address');
        const shipCity = document.getElementById('shipping-city');
        const shipPost = document.getElementById('shipping-postal-code');
        const shipProv = document.getElementById('shipping-province');
        const shipCount = document.getElementById('shipping-country');

        //gettong the error messages
        const shipNameError = document.getElementById('shipping-name-error');
        const shipAddressError = document.getElementById('shipping-address-error');
        const shipCityError = document.getElementById('shipping-city-error');
        const shipPostError = document.getElementById('shipping-postal-code-error');
        const shipProvError = document.getElementById('shipping-province-error');
        const shipCountError = document.getElementById('shipping-country-error');

        // Validate Card Number (regular expression) (16 digit)
        if (!cardNumber.value.match(/^\d{16}$/)) {
            cardNumberError.textContent = 'Card number must be 16 digits!';
            isValid = false;
        } else {
            cardNumberError.textContent = '';
        }

        // Validate CVC must be 3 digits
        if (!cardCVC.value.match(/^\d{3}$/)) {
            cardCVCError.textContent = 'CVC must be 3 digits!';
            isValid = false;
        } else {
            cardCVCError.textContent = '';
        }

        // Validate Name on Card 
        //
        if (!cardName.value.trim()) {
            cardNameError.textContent = 'Name on the card is required!';
            isValid = false;
        } else {
            cardNameError.textContent = '';
        }

        // Validate Card Expiration Date (regular expression) (MM/YY)
        if (!cardExp.value.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
            cardExpError.textContent = 'Expiration date must be in MM/YY format!';
            isValid = false;
        } else {
            cardExpError.textContent = '';
        }

        // Validate Shipping Name matches a string with letters
        if (!shipName.value.match(/^[a-zA-Z\s'-]+$/) ) {
            shipNameError.textContent = 'Shipping name is required!';
            isValid = false;
        } else {
            shipNameError.textContent = '';
        }

        // Validate Shipping Address  matches a string with at least 3 characters
        if (!shipAddress.value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/)) {
            shipAddressError.textContent = 'Invalid shipping address!';
            isValid = false;
        } else {
            shipAddressError.textContent = '';
        }

        // Validate Shipping City matches a string with at least 2 characters
        if (!shipCity.value.match(/^[a-zA-Z\s]{2,}$/)) {
            shipCityError.textContent = 'Invalid city name!';
            isValid = false;
        } else {
            shipCityError.textContent = '';
        }

        // Validate Postal Code (U.S. ZIP code format: 5dig-4dig)
        if (!shipPost.value.match(/^\d{5}(-\d{4})?$/)) {
            shipPostError.textContent = 'Invalid postal code the Format is 12345 or 12345-6789!';
            isValid = false;
        } else {
            shipPostError.textContent = '';
        }

        // Validate Province minimum 2 characters
        if (!shipProv.value.match(/^[a-zA-Z\s]{2,}$/)) {
            shipProvError.textContent = 'Invalid province name!';
            isValid = false;
        } else {
            shipProvError.textContent = '';
        }

        // Validate Country minumum 2 characters
        if (!shipCount.value.match(/^[a-zA-Z\s]{2,}$/)) {
            shipCountError.textContent = 'Invalid country name!';
            isValid = false;
        } else {
            shipCountError.textContent = '';
        }

        if (isValid) {
            console.log('Form is valid.');

            localStorage.clear();
            location.reload();
            alert("Thank you for shopping");
        }

    })

    //in case of clearinf the form
    const clearFormButton = document.getElementById('clear-form');
    clearFormButton.addEventListener('click', function() {
        // Clear  fields
        myForm.reset();
        // Clear error messages so i used the name of the class in html 
        const errorMessages = document.querySelectorAll('.input-message');
        errorMessages.forEach(function(message) {
            message.textContent = '';
        });

        localStorage.clear();
        // Clear the cart items and total price
        cartItemsContainer.innerHTML = '';
        totalPriceContainer.innerHTML = '<h2>** Total Price: $0.00</h2>';
    });
});
  