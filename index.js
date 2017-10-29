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
    var val = {};
    val[item] = getRandom();
    cart.push(val);
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    // write your code here
    if (cart.length === 0) {
        console.log("Your shopping cart is empty.");
        return;
    }

    var sent = "In your cart, you have ";

    for (var i = 0; i < cart.length; i++) {
        for(var key in cart[i]){
            if(cart[i].hasOwnProperty(key)){
              var bol = (cart.length-1) - i === 1 && cart.length > 2;
             var l = `${i === cart.length-1?'.': `${ bol ? ', and ':`${(cart.length-1) - i === 1 && !(cart.length > 2) ? ' and ': ', '}`}`}`;

             sent += `${key} at $${cart[i][key]}${l}`;
            }
        }

    }
    console.log(sent);

}
function total() {
    // write your code here
    //return Object.keys(cart).length;
    var counter = 0;

    for (var i = 0; i < cart.length; i++) {
        for(var key in cart[i]){
            if(cart[i].hasOwnProperty(key)){

                counter += cart[i][key];
            }
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
