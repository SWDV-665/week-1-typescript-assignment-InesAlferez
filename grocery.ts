class Grocery{
    name: string;
    price: number;
    quantity: number;
    description: string;

    constructor(name: string, price: number, quantity: number, description: string){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;

    }
}

let item1 = new Grocery("Milk", 2.99, 1, "2% Milk");
let item2 = new Grocery("Eggs", 3.99, 1, "Eggs");
let item3 = new Grocery("Bread", 2.99, 1, "Bread");
let item4 = new Grocery("Cheese", 4.99, 1, "Cheese");
let item5 = new Grocery("Butter", 2.99, 1, "Butter");

let groceries: Grocery[] = [];

groceries.push(item1);
groceries.push(item2);
groceries.push(item3);
groceries.push(item4);
groceries.push(item5);

const tale = document.getElementById("groceries") as HTMLTableElement;

groceries.map(grocery => {
    const {name, price, quantity, description} = grocery;
    const row = tale.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${description}</td>`;
});

