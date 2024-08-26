const products = [
    {
        name: "adnan arvi",
        price: 1099,
        image: "img/adnan.jpg" // Replace with actual image URL
      },
      {
        name: "hussain morud",
        price: 999,
        image: "img/morud.jpg"
      },
      {
        name: "hussain chuna",
        price: 799,
        image: "img/chuna.jpg"
      },
      {
        name: "hussain Amin",
        price: 899,
        image: "img/amin.jpg"
      },
      {
        name: "Luvai saifee",
        price: 999,
        image: "img/luvai.jpg"
      },
      {
        name: "Mufaddal dalal",
        price: 599,
        image: "img/dallo.jpg"
      },
      {
        name: "Mustafa rangwala",
        price: 329,
        image: "img/rang.jpg"
      },
      {
        name: "Murtaza Madar",
        price: 1299,
        image: "img/madar.jpg"
      },
      {
        name: "abdeali kheri",
        price: 999,
        image: "img/kheri.jpg"
      },
      {
        name: "Shabbir hakimji",
        price: 399,
        image: "img/shab.jpg"
      }
  ];
  
  const productGrid = document.querySelector('.product-grid');
  productGrid.style.display = 'grid';
  productGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
  productGrid.style.gap = '20px';
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;
  
    productGrid.appendChild(productCard);
  });
  
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Handle adding product to cart here
      console.log('Adding', product.name, 'to cart');
      // Implement your cart logic here (e.g., store products in localStorage)
    });
  });