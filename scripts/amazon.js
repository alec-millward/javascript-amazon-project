let productsHTML = ``;

const template = document.getElementById('product-template');
products.forEach(product => {
  const clone = template.content.cloneNode(true);
  const button = clone.querySelector('.js-add-to-cart');
  
  button.dataset.productId = product.id;

  clone.querySelector('.product-image').src = product.image;
  clone.querySelector('.product-name').textContent = product.name;
  clone.querySelector('.product-price').textContent = `${(product.priceCents / 100).toFixed(2)}`
  clone.querySelector('.product-rating-stars').src = `images/ratings/rating-${product.rating.stars * 10}.png`;
  clone.querySelector('.product-rating-count').textContent = product.rating.count;

  document.querySelector('.js-products-grid').appendChild(clone);  
});


document.querySelectorAll('.js-add-to-cart')
        .forEach(b => {    
          b.addEventListener('click', () => {
            const container = b.closest('.product-container');
            const quantity = Number(container.querySelector('.product-quantity-container select').value);           
            const existingItem = cart.find(item => item.productId === b.dataset.productId);
            
            if (existingItem)
              existingItem.quantity += quantity;
            else 
              cart.push({ productId: b.dataset.productId, quantity: quantity });

            const numItems = cart.reduce((total, item) => total + item.quantity, 0);
          
            document.querySelector('.js-cart-quantity').textContent = numItems;
          }) 
        });
  


