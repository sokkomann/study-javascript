// 마켓에서 판매하는 상품은 단 1개이다.
// 상품명, 가격, 재고
// 판매하기: 고객마다 쿠폰 할인율이 다르다.
//          구매한 고객의 쿠폰 할인율을 적용해서 판매한다.

// 고객 객체를 2개 정의한다.
// 이름, 잔고, 쿠폰 할인율
// 고객 2명은 서로 할인율을 다르게 설정한다.

const market = {
    name: "홈플러스",
    productName: "물",
    price: 1000,
    stock: 24,
};
const customer1 = {};
const customer2 = {};

customer1.name = "망고";
customer1.money = 2000;
customer1.discountPercentage = 10;

customer2.name = "참깨";
customer2.money = 15000;
customer2.discountPercentage = 20;

market.sell = function (customer1) {
    this.stock--;
    let customerPrice = this.price * (1 - customer1.discountPercentage / 100);
    customer1.money -= customerPrice;
};

market.sell(customer1);
console.log(customer1);
console.log(market.stock);

market.sell = function (customer2) {
    this.stock--;
    let customerPrice = this.price * (1 - customer2.discountPercentage / 100);
    customer2.money -= customerPrice;
};

market.sell(customer2);
console.log(customer2);

// 마켓에서 판매하는 상품은 단 1개이다.
// 이름, 상품명, 가격, 재고
// 판매하기: 고객마다 쿠폰 할인율이 다르다.
//          구매한 고객의 쿠폰 할인율을 적용해서 판매한다.

// const market = {};

// market.name = "이마트";
// market.productName = "고등어";
// market.productPrice = 9900;
// market.stock = 12;
// market.sell = function (customer) {
//     let discount = 1 - customer.coupon / 100;
//     customer.money -= this.productPrice * discount;
//     this.stock--;
// };

// // 고객 객체를 2개 정의한다.
// // 이름, 잔고, 쿠폰 할인율
// // 고객 2명은 서로 할인율을 다르게 설정한다.
// const lee = {};
// const hong = {};

// lee.name = "이순신";
// lee.money = 10000;
// lee.coupon = 30;

// hong.name = "홍길동";
// hong.money = 25000;
// hong.coupon = 80;

// market.sell(lee);
// console.log(market);
// console.log(lee);
