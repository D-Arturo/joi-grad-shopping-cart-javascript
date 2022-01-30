import Order from "../model/Order.js";

export default class ShoppingCartConsolidation {

    static checkout = (shoppingcart) => {
        let totalPrice = 0;
        let loyaltyPointsEarned = 0;

        for (const product of shoppingcart.products) {
            const discount10 = product.price * 0.1;
            const discount15 = product.price * 0.15;

            if (product.code.startsWith("DIS_10")) {
                loyaltyPointsEarned += product.price / 10;
                totalPrice += product.price - discount10;
                continue
            }
            if (product.code.startsWith("DIS_15")) {
                loyaltyPointsEarned += product.price / 15;
                totalPrice += product.price - discount15;
                continue
            }
            loyaltyPointsEarned += product.price / 5;
            totalPrice += product.price;
        }
        return new Order(totalPrice, loyaltyPointsEarned);
    };

    static displaySummary = (shoppingcart) => {
        return "Customer: " + shoppingcart.customer.name + "\n" +
            "Bought:  \n" + shoppingcart.products.map(p => "- " + p.name + ", " + p.price).join('\n');
    }
}