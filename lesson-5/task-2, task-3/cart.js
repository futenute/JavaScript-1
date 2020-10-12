class CartProduct {
    constructor(product, count) {
        this.product = product;
        this.count = count;
    }

    getPrice() {
        return this.product.price * this.count;
    }
}

class Cart {
    constructor() {
        this.goods = [];
    }

    addToCart(product) {
        this.goods.push(product);
    }

    getTotalPrice() {
        let sum = 0;

        for (let i = 0; i < this.goods.length; i++) {
            sum += this.goods[i].getPrice();
        }
        return sum;
    }

    generateCart (container) {

        if (this.goods.length == 0) {
            container.innerHTML = 'Корзина пуста';
        } else {
            
            let totalCount = 0;
            for (let i = 0; i < this.goods.length; i++) {
                totalCount += this.goods[i].count;
            }

            let totalPrice = this.getTotalPrice();
            container.innerHTML = 'Товаров в корзине: ' + totalCount + '.' + ' Сумма: ' + totalPrice + ' рублей.'
        }

    }

}