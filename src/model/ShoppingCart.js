export default class ShoppingCart {
    constructor(customer, products) {
        this.customer = customer;
        this.products = products;
    };

    // addProduct = (product) => {
    //     this.products.push(product);
    // };
    //
    // removeProduct = (product) => {
    //    _.remove(this.products, product);
    // };

    // checkout = () => {
    //     let totalPrice = 0;
    //     let loyaltyPointsEarned = 0;
    //
    //     this.products.forEach(product => {
    //         let discount = 0;
    //         if (product.code.startsWith("DIS_10")) {
    //             discount = product.price * 0.1;
    //             loyaltyPointsEarned += product.price / 10;
    //         } else if (product.code.startsWith("DIS_15")) {
    //             discount = product.price * 0.15;
    //             loyaltyPointsEarned += product.price / 15;
    //         } else {
    //             loyaltyPointsEarned += product.price / 5;
    //         }
    //
    //         totalPrice += product.price - discount;
    //     });
    //
    //     // this.products.map(product => {
    //     //     if (product.code.startsWith("DIS_10")){
    //     //         loyaltyPointsEarned += product.price / 10;
    //     //         totalPrice += product.price - (product.price * 0.1);
    //     //         return
    //     //     }
    //     //     if (product.code.startsWith("DIS_15")) {
    //     //         loyaltyPointsEarned += product.price / 15;
    //     //         totalPrice += product.price - (product.price * 0.15);
    //     //         return
    //     //     }
    //     //     loyaltyPointsEarned += product.price / 5;
    //     //     totalPrice += product.price
    //     // });
    //
    //     return new Order(totalPrice, loyaltyPointsEarned);
    // };
    //
    // displaySummary = () =>  {
    //     return "Customer: " + this.customer.name + "\n" +
    //         "Bought:  \n" + this.products.map(p => "- " + p.name + ", " + p.price).join('\n');
    // }
};
