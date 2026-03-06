// Timer variable used to track inactivity timeout
let timer;

// Constant prices for each product
// Using constants prevents accidental modification later
const PRICE_MILK = 3.50;
const PRICE_BREAD = 2.25;
const PRICE_EGGS = 4.10;
const PRICE_RICE = 6.00;
const PRICE_APPLES = 2.80;
const PRICE_CHICKEN = 9.50;

// Function that starts or resets the inactivity timer
function startTimer() {

  // Clear any existing timer
  clearTimeout(timer);

  // After 15 seconds of inactivity, reset the cart
  timer = setTimeout(function () {
    resetCart("Cart reset due to inactivity.");
  }, 15000);
}
