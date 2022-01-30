export default class ShoppingCartOperations {

    static addProduct = (shoppingCartProducts, product) => {
        return shoppingCartProducts.push(product);
    };

}