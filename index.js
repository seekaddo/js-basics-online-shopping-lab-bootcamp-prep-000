var cart = [];

function getRandom() {
    return Math.floor(Math.random() * 100);
}

function getCart() {
 return Object.keys(cart).length;
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
      sent += `{k[i]} at $${cart[k[i]]}${i === k.length-1?'.':
                `${cart.length === 2 ? ' and ': ', '}` }`;
    }
  }
  console.log(sent);

}

function total() {
  // write your code here
  //return Object.keys(cart).length;
  var counter = 0;
  for (var k in cart) {
    if (cart.hasOwnProperty(k)) {
      counter++;
     }
  }
  return counter;
}

function removeFromCart(item) {
  // write your code here
  if (!cart.hasOwnProperty(item)) {
    console.log("That item is not in your cart.");
    return cart;
  }

  // for (var k in cart) {
  //   if (cart.hasOwnProperty(k)) {
  //
  //     }
  // }
  delete cart[item];
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber === undefined ) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }

  console.log(`Your total cost is $${totalCost()}, which will be charged to the card ${cardNumber}.`);

  for (const prop of Object.keys(cart)) {
    delete cart[prop];
  }

}
