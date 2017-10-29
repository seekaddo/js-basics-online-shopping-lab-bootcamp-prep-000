var cart = [];

function getRandom() {
    return Math.floor(Math.random() * 100);
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  cart[item] = getRandom();
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  
  var sent = "In your cart, you have ";
  var k = Object.keys(cart);
  for (var i = 0; i < k.length; i++) {
    if(cart.hasOwnProperty(k[i])){
      sent += `{k[i]} at $${cart[k[i]]}${i === k.length-1?'.':', '}`;
    }
  }
  console.log(sent);

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
