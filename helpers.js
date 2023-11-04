export const elements = {
  menuArea: document.getElementById("menu-area"),
  buttonsArea: document.getElementById("buttons-area"),
};

//* Price Calculation Function
export function calculatePrice(price) {
  let newPrice = price * 1;
  newPrice = newPrice.toFixed(2);
  return newPrice;
}
