// Initialize products variable with an empty array which will store the product data fetched from the json file 
let products =[];

// this code block fetches data from  the file named product.json use API fetch 
fetch("product.json")
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })

//once the data is retrieved the fetched data is assigned to a variable call products
//.then calls renderProducts function to display the items on the page  
//If there's any error during the fetch process, it catches the error and logs it to the console.
  .then(data => {
    products = data;
   
    renderProducts();
  })
  .catch(error => console.error('Error fetching products:', error));


//create a div element for each product 
//add a class to the productElement AKA div elememnt <div product-item> + index + 1
function createProductElement(product, index) {
  const productElement = document.createElement('div');
  productElement.classList.add('product-item' + (index + 1));
  

  //Now within that div element/ ProductElement I want to create a inner html to display it to the user 
  //and return the product element which is the Div with the inner HTML included 
  productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name} <i onclick="heartFill()" id="hearty" class="fa-regular fa-heart"></i> </h3>
      <p>${product.product_description}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button class="addCart" id="cart2" onClick="addToCart()">Add to Cart</button>
  `;
  
  return productElement;
}




// Function to render products on the page
//render is showing data so that it can be displayed 
function renderProducts() {
  const productList = document.getElementById('product-list');
  
  // Check if products is defined
  //if the conditional is true the forEach method iterates over each element 
  //for each product in the array the forEach method executes the provided function  AKA renderProducts passing the current products and its index 
  //array as arguments 
  if (products) {
    products.forEach((product, index) => {
      const productElement = createProductElement(product, index);
      //productElemetn its appended as a child to the productlist which means that each product will be added to the product list container 
      productList.appendChild(productElement);
    });
  } else {
    console.error('No products to render');
  }
}

// Call the function to render products when the page loads
window.addEventListener('load', renderProducts);





// Function for adding items to the cart
function addToCart() {
    const size = prompt("What is your size? X-Large, Large, Medium, Small");
    if (size) {
        alert("Added To Your Cart!");
    } else {
        alert("Please enter a size.");
    }
}


// Function to show sidebar
function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

// Function to show/hide search box when the hamburger menu us clicked 
function showSearchBox() {
    const searchBox = document.querySelector(".searchBoxCon");
    const searchIcon = document.querySelector(".nav_search");
    if (searchBox.style.display === "flex") {
        searchBox.style.display = "none";
        searchIcon.style.display = "flex";
    } else {
        searchBox.style.display = "flex";
        searchIcon.style.display = "none";
    }

}



//function for when you push the cart icon it will pop on the empty cart section that says your car is empty 
const emptyCartSection = document.getElementById('emptyCartSection');
const cartIcon = document.getElementById('cartAdd'); 

cartAdd.addEventListener('click', function() {
    emptyCartSection.style.display = 'block';
});

document.getElementById('goBackButton').addEventListener('click', function() {
    emptyCartSection.style.display = 'none';
});





// Function to search for and filter items
function searchForItem() {
  // Get what the user typed and make it lowercase
  const searchText = document.getElementById('searchBox').value.trim().toLowerCase();
  
  // Find where search results will show
  const productListContainer = document.getElementById('product-list');
  
  // Clear any old search results
  productListContainer.innerHTML = '';
  
  // Filter products based on the search text
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchText) || 
    product.product_description.toLowerCase().includes(searchText)
  );

  // If no search results, show a message
  if (filteredProducts.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No results found.';
    productListContainer.appendChild(noResultsMessage);
  } else {
    // Otherwise, display the filtered products
    filteredProducts.forEach(product => {
      const productElement = createProductElement(product);
      productListContainer.appendChild(productElement);
    });
  }
}




