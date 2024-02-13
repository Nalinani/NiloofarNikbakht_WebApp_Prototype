

document.addEventListener('DOMContentLoaded', (event) => {

  // Product details object for my pop up box:
  const productDetails = {
    '7.jpg': {   
      tags: [ 'silicon', 'airpod 1/2', 'solid'], 
      name: 'Silicon Case',
      description: 'Airpod 1/2',
      price: 'Price:  $10.99' 
    },

    '8.jpg': {  
      tags: ['green', 'airpod pro', 'flower'], 
      name: 'Green Case',
      description: 'Airpod Pro',
      price: 'Price:  $18.99' 
    },

    '9.jpg': {  
      tags: ['Beige', 'airpod 1/2', 'solid', 'chain'], 
      name: 'Beige Case',
      description: 'Airpod1/2',
      price: 'Price:  $10.99' 
    },
    '10.jpg': {
      tags: ['van gogh', 'starry night', 'airpod 1/2', 'sticker'], 
      name: 'Starry Night Sticker',
      description: 'Sticker for airpod case and airpods',
      price: 'Price:  $8.99' 
    },
    
  };
    
  // search:
  function searchProduct() {
    //get the value of the search bar
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    let found = false;
    //for loop for each of teh entry in the productDetails object
    for (const [imageName, details] of Object.entries(productDetails)) {
      if (details.tags.some(tag => tag.toLowerCase().includes(searchQuery)) || 
          details.name.toLowerCase().includes(searchQuery) || 
          details.description.toLowerCase().includes(searchQuery)) {
        //in case the items match w/ the search info tjen the item will be shown 
        openModal(imageName, details);
        //when they cleick on search the item will be shown and the search bar get cleared
        document.getElementById('search-bar').value = '';
        //break out of the loop
        found = true;
        break;
      }
    }
    if (!found) {
      alert('No product found with that name or description.');
    }
  }

  ////  opening the pop up modal with the info
  // imageName (1) //details (2)
  function openModal(imageName, details) {
    //getting the elements from airpod html 
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const productName = document.getElementById('product-name');
    const productDescription = document.getElementById('product-details');
    const productPrice = document.getElementById('product-price');

    //imageName (1) source of the photos for the modal:
    modalImage.src = `./media/AirpodCase/${imageName}`;
    //details (2): details of the product that will be shown in the modal:
    productName.textContent = details.name;
    productDescription.textContent = details.description;
    productPrice.textContent = details.price;
    //display style for modal :
    modal.style.display = 'block';
  }
            
  //  in order to perform the search
  document.getElementById('search-btn').addEventListener('click', searchProduct);

  // Hide the pop up modul when the close button is clicked
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });

});

// it didn't work inside of the curly bracet so i put it here
function goToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}