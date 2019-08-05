// Business Logic
var del = 20;
var PizzatotalPrice = [];
function Order (pizzaSize, crust) {
 this.pizzaSize = pizzaSize;
 this.crust = crust;
 this.Topping1 = 5;
 this.Topping2 = 10;
 this.Topping3 = 5;
 this.pizzaPrice = 0;
 this.pizzaNumber  = 1;
 this.pizzaNumbers = [];
}
Order.prototype.pizzaCost = function () {
 if (this.pizzaSize === "Small") {
   this.pizzaPrice += 20;
 } else if (this.pizzaSize === "Medium") {
   this.pizzaPrice += 30;
 } else if (this.pizzaSize === "Large") {
   this.pizzaPrice += 40;
 }
 if (this.crust === "crispy") {
   this.pizzaPrice += 10;
 } else if (this.crust === "stuffed") {
   this.pizzaPrice += 15;
 } else if (this.crust === "glutenFree") {
   this.pizzaPrice += 20;
 }
 for(var j = 1; j < this.pizzaNumbers.length; j++){
   pizzaNumber += pizzaNumbers[j];
     }
 this.pizzaPrice += this.Topping1;
 this.pizzaPrice += this.Topping2;
 this.pizzaPrice += this.Topping3;
 this.pizzaPrice *= this.pizzaNumber;
//   this.pizzaPrice *= this.pizzaNumbers;
 return this.pizzaPrice;
}
Order.prototype.finalCost = function () {
 var TotalPrice = 0;
 for (var i = 0; i < PizzatotalPrice.length; i ++) {
   TotalPrice += PizzatotalPrice[i];
 }
 return TotalPrice;
}
// Order.prototype.numberOfPizza = function () {
//     for(var j = 1; j < pizzaNumbers.length; j++){
//         var  pizzaNumber = finalCost() * pizzaNumber[j];
//     }
//         return pizzaNumber;
//       }
//User Interface Logic
$(document).ready(function() {
 $("form#pizzaOrder").submit(function(event) {
     event.preventDefault();
   var pizzaSize = $("select#size").val();
   var crust = $("select#crust").val();
   var Topping1 = $("select#Topping1").val();
   var Topping2 = $("select#Topping2").val();
   var Topping3 = $("select#Topping3").val();
   var pizzaNumbers = $("input#pizza-number").val();
   var pizzaDetails = (pizzaNumbers + " " + pizzaSize + ": " + crust + ", " + Topping1);
   var newPizzaOrder = new Order(pizzaSize, crust);
   newPizzaOrder.pizzaCost();
   PizzatotalPrice.push(newPizzaOrder.pizzaPrice);
   $("#pizzaDetails").show();
   $("#totalPizzaCost").text(newPizzaOrder.finalCost());
   $("#pizzaDetail").append("<p>" + pizzaDetails + "</p>");
   $("#size, #crust, #Topping1, #Topping2, #Topping3,#pizza-number").val("");
 });
 $("#pizzaDetails").click(function() {
   $("#pizzaDetail").toggle();
   $("#deliver").toggle();
   $("#pickup").toggle();
   $("#checkout").hide();
 });
$("button#deliver").click(function(event){
   event.preventDefault();
   alert("Delivery cost is" + " " + del);
   var location = prompt("Enter your address:");
   alert("We will deliver your order at" + " " + location);
   $("#checkout").show();
})
$("button#pickup").click(function(event){
   event.preventDefault();
   alert("Thank you for shopping with us!!!!!");
   $("#checkout").show();
})
$("button#checkout").click(function(event){
   event.preventDefault();
   var check = TotalPrice + del;
   $("#check").text(check);
   // console.log(check);
})
})