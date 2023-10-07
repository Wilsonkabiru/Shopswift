let ShoppingCart = document.getElementById('shopping-cart');
let label = document.getElementById('label');
let cart = JSON.parse(localStorage.getItem("data")) || [];
  let Calculation =()=>{
    let cartIcon = document.getElementById("cart-count");
    cartIcon.innerHTML = cart.map((x)=>x.item).reduce((x,y)=>x+y,0);
   };
   Calculation();
   
   let GenerateCartItems =()=>{
    if (cart.length !==0){
      return (ShoppingCart.innerHTML = cart.map((y)=>{
        console.log(y);
        let {id,item}= y;
        let search = shopItemsData.find((y)=>y.id===id) || [];
        let { img, price, name } = search;
        return `
        <div class="cart-item">
        <img width="100" src=${img} alt="" />
        <div class="details">
        <div class="title-price-y">
            <h4 class="title-price">
              <p style="color: black">${name}</p>
              <p class="cart-item-price" style="color: red; font-weight:bold;">$ ${price}</p>
            </h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
        </div>
        <div class="cart-buttons">
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${item}</div>
            <i onclick="increment(${id})" class="bi bi-plus"></i>
          </div>
        </div>

          <h3 style="color: black;" >$ ${item * price}</h3>
        
        </div>
        </div>
        `;
      }).join(""));
    }
    else{
      ShoppingCart.innerHTML = "";
      label.innerHTML = `
      <h2 style="margin-left: 190px">Cart is Empty</h2>
      <a href="index.html">
      <button class="HomeBtn">Back to home</button>
      </a>
      `;
    }
   };
   GenerateCartItems();
   let increment = (id) => {
    let selectedItem = id;
    let search = cart.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    GenerateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(cart));
  };
  let decrement = (id) => {
    let selectedItem = id;
    let search = cart.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
  
    update(selectedItem.id);
    cart = cart.filter((x) => x.item !== 0);
    GenerateCartItems();
    localStorage.setItem("data", JSON.stringify(cart));
  };
  let update = (id) => {
    let search = cart.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    Calculation();
    TotalAmount();
  };
  let removeItem = (id) => {
    let selectedItem = id;
    cart = cart.filter((x) => x.id !== selectedItem.id);
    Calculation();
    GenerateCartItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(cart));
  };
  let TotalAmount = () => {
    if (cart.length !== 0) {
      let amount = cart
        .map((x) => {
          let { id, item } = x;
          let filterData = shopItemsData.find((x) => x.id === id);
          return filterData.price * item;
        })
        .reduce((x, y) => x + y, 0);
  
      return (label.innerHTML = `
      <h2 style="margin-left: 120px" class="total">Total Bill : $ ${amount}</h2>
      <a href="payment.html"><button id="checkout" class="checkout">Proceed to Pay</button></a>
      <button style= "background-color:red;" onclick="clearCart()" class="removeAll">Clear Cart</button>
      `);
    } else return;
  };
  
  TotalAmount();
  let clearCart = () => {
    cart = [];
    GenerateCartItems();
    Calculation();
    localStorage.setItem("data", JSON.stringify(cart));
  };