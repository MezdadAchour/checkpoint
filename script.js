// Sélectionner les éléments du DOM
const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.getElementById('total-price');

// Initialiser le prix total à 0
let totalPrice = 0;

// Boucle de declaration
cartItems.forEach(item => {
  const decrementButton = item.querySelector('.decrement');
  const incrementButton = item.querySelector('.increment');
  const quantityElement = item.querySelector('.qty');
  const likeButton = item.querySelector('.like-btn');
  const removeButton = item.querySelector('.remove-btn');

  let quantity = parseInt(quantityElement.textContent);

  // bouton "-"
  decrementButton.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }
  });

  // bouton "+"
  incrementButton.addEventListener('click', () => {
    quantity++;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  });

  // bouton "like"
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
  });

  // bouton "Remove"
  removeButton.addEventListener('click', () => {
    item.remove();
    updateTotalPrice();
  });
});

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
  totalPrice = 0;
  cartItems.forEach(item => {
    const quantityElement = item.querySelector('.qty');
    const quantity = parseInt(quantityElement.textContent);
    totalPrice += 100 * quantity;
  });
  totalPriceElement.textContent = `$${totalPrice}`;
}

updateTotalPrice();