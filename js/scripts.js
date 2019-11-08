//---Business Logic
var priceArr = [];
function Order (size) {
  this.size = size;
  this.veggie1 = 0.5;
  this.veggie2 = 0.5;
  this.veggie3 = 0.5;
  this.meat1 = 1;
  this.meat2 = 1;
}
Order.prototype.pizzaCost = function () {
  if (this.size === "Medium") {
    this.pizzaPrice += 8;
  } else if (this.size === "Large") {
    this.pizzaPrice += 10;
  }
  this.pizzaPrice += this.veggie1;
  this.pizzaPrice += this.veggie2;
  this.pizzaPrice += this.veggie3;
  this.pizzaPrice += this.meat1;
  this.pizzaPrice += this.meat2;
  return this.pizzaPrice;
};
Order.prototype.totalCost = function () {
  var orderTotal = 0;
  for (var arrayElement = 0; arrayElement < priceArr.length; arrayElement ++) {
    orderTotal += priceArr[arrayElement];
}
return orderTotal;
};

//---User End Logic
$(document).ready(function(event) {
  var size = $("select#sizeSelect").val();
  var veggie1 = $("select#veggieSelect1").val();
  var veggie2 = $("select#veggieSelect2").val();
  var veggie3 = $("select#veggieSelect3").val();
  var meat1 = $("select#meatSelect1").val();
  var meat2 = $("select#meatSelect2").val();


});
