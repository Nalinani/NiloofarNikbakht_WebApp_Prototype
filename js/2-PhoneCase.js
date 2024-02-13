
document.addEventListener('DOMContentLoaded', (event) => {

  // Product details object for my pop up box:
  const productDetails = {
    '1.jpg': {    
      name: 'black and white',
      description: 'Halloween case',
      price: 'Price:  $19.99' 
    },
    '2.jpg': {  
      name: 'Transparent black and white',
      description: 'Cat case',
      price: 'Price:  $15.99' 
    },
    '3.jpg': {  
      name: 'Transparent black and white',
      description: 'Star case',
      price: 'Price:  $15.99' 
    },
    '4.jpg': {
      name: 'Black and flowers',
      description: 'Flower case',
      price: 'Price:  $22.99' 
    },
    '5.jpg': {
      name: 'pink',
      description: 'Shark case',
      price: 'Price:  $20.99' 
    },
    '6.jpg': {
      name: 'Orange',
      description: 'Peanut case',
      price: 'Price:  $27.99' 
    },

  };

  // Get all the elements from html document
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const productName = document.getElementById('product-name');
  const productDetailsParagraph = document.getElementById('product-details');
  const productPrice = document.getElementById('product-price');
  const closeSpan = document.querySelector('.close');
  const images = document.querySelectorAll('.gallery-image');
  const addToCartButtons = document.querySelectorAll('#cart-btn');

  // open the modal:
  function openModal(image) {
    const imageName = image.getAttribute('src').split('/').pop();
    const details = productDetails[imageName];
    if (details) {

      modalImage.src = image.src;
      productName.textContent = details.name;
      productDetailsParagraph.textContent = details.description;
      productPrice.textContent = details.price;
      
      modal.style.display = "block";
      // Hide the Go to the Top button when the POP UP is open
      // goToTopButton.style.visibility = 'hidden';
    }
  }

  // Attach click event to each image
  images.forEach(image => {
      image.addEventListener('click', () => openModal(image));
  });



  // Close the modal when the close button is clicked
  closeSpan.addEventListener('click', () => {
      modal.style.display = "none";
      // Show the Go to the Top button when pOP up is closed
      // goToTopButton.style.visibility = 'visible';
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
      
  });

  //adding to cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imageName = button.getAttribute('src').split('/').pop();
    const details = productDetails[imageName];
    if (details) {
      const item = {
        name: details.name,
        price: parseFloat(details.price.replace(/\$/g, '')),
      };

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));

    }
  });
});


});

// it didn't work inside of the curly bracet so i put it here
function goToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}