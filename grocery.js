var Grocery = /** @class */ (function () {
    function Grocery(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
    return Grocery;
}());
var item1 = new Grocery("Milk", 2.99, 1, "2% Milk");
var item2 = new Grocery("Eggs", 3.99, 1, "Eggs");
var item3 = new Grocery("Bread", 2.99, 1, "Bread");
var item4 = new Grocery("Cheese", 4.99, 1, "Cheese");
var item5 = new Grocery("Butter", 2.99, 1, "Butter");
var groceries = [];
groceries.push(item1);
groceries.push(item2);
groceries.push(item3);
groceries.push(item4);
groceries.push(item5);
var tale = document.getElementById("groceries");
groceries.map(function (grocery) {
    var name = grocery.name, price = grocery.price, quantity = grocery.quantity, description = grocery.description;
    var row = tale.insertRow();
    row.innerHTML = "\n        <td>".concat(name, "</td>\n        <td>").concat(price, "</td>\n        <td>").concat(quantity, "</td>\n        <td>").concat(description, "</td>");
});
