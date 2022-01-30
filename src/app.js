import ShoppingCart from "./model/ShoppingCart.js";
import Product from "./model/Product.js";
import Customer from "./model/Customer.js";
import ShoppingCartConsolidation from "./services/ShoppingCartConsolidation.js";
import ShoppingCartAddProduct from "./services/ShoppingCartAddProduct.js";

const productsList = [
    new Product(10.0, "DIS_10_PRODUCT1", "Product 1"),
    new Product(180.0, "DIS_15_PRODUCT2", "Product 2")
];

const customer = new Customer("John Doe");

const shoppingCart = new ShoppingCart(customer, productsList);
const productThree = new Product(30.0, "PRODUCT3", "Product 3");

ShoppingCartAddProduct.addProduct(productsList, productThree)
// shoppingCart.addProduct(productThree);
// const shoppingCartConsolidation = new ShoppingCartConsolidation()

console.log(ShoppingCartConsolidation.displaySummary(shoppingCart))

const order = ShoppingCartConsolidation.checkout(shoppingCart);

console.log(order.displaySummary())
