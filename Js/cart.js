 const cartIcon = document.getElementById('cart-icon');
  if (cartIcon)
  {
    cartIcon.addEventListener('click', () => {window.location.href = 'cart.html';});
  }
  const proceedToPayButton = document.getElementById('checkout');
  if (proceedToPayButton) 
  {
    proceedToPayButton.addEventListener('click', () => {window.location.href = 'payment.html';});
  }
  /*<p id="cart-total-label">Total:<span id="cart-total-amount">$0.00</span></p>
        <button id="proceed-to-pay">Proceed to Pay</button>
        <div id="cart-container">
            <ul id="cart-items"></ul>
        </div>
        <div class="cart-items" id="shopping-cart"></div>*/
      /*<i style="font-size: 25px;font-weight: bold;color:black;" class="bi bi-list"></i>*/