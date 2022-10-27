
function AddQuantity() {
  var quantity = parseInt(document.forms.ShoppingList.quantity.value) + 1;
  document.forms.ShoppingList.quantity.value = quantity;
}
function SubtractQuantity() {
  var quantity = parseInt(document.forms.ShoppingList.quantity.value) - 1;
  document.forms.ShoppingList.quantity.value = quantity;
}
function ClearAll() {
    document.forms.ShoppingList.name.value = null;
    document.forms.ShoppingList.quantity.value = null;
    document.forms.ShoppingList.price.value = null;

  localStorage.clear();
  doShowAll();
}
function like () {
document.getElementById("heart").style.color= "red";
}
function totalPrice() {
    var totalPrice = parseInt(document.forms.ShoppingList.quantity.value) *parseInt(document.forms.ShoppingList.price.value);
    alert("Total price is " + totalPrice );
}

