var item1 = prompt("Name of item 1");
var item2 = prompt("Name of item 2");
var price1 = +prompt("Price of item 1");
var price2 = +prompt("Price of item 2");
var quantity1 = +prompt("Order quantity of item 1");
var quantity2 = +prompt("Order quantity of item 2");
var shippingCharges = +prompt("Enter shipping charges")
var totalCost = price1 * quantity1 + price2 * quantity2 + shippingCharges
var discount ;

if(totalCost >= 2000){
    discount = (totalCost / 100) * 10 ; 
}
var afterDiscount = totalCost - discount
document.write ( " <h1> Shopping Cart </h1> " + " </br> " + " </br> " + " Price of " + item1 + " is " + price1 + " </br> "
     + " Quantity of " + item1 + " is " + quantity1 + " </br> " + " Price of " + item2 + " is " + price2 + " </br> " +
     " Quantity of " + item2 + " is " + quantity2 + " </br> " + " </br> " + " Shipping charges " + shippingCharges +
     " </br> " + " </br> " + " Total cost of your order is " + totalCost + " PKR " + " </br> " + 
    " Discounted price is " + afterDiscount.toFixed(0) + " PKR " )