/*
Opem/closed principle
Entidades devem estar abertas para extenção, mas fechadas para modificação.
*/

import { ShoppingCart } from '../classes/shopping-cart';
import { Order } from '../classes/order';
import { Messaging } from './messaging';
import { Persistency } from './persistency';
import { Product } from '../classes/product';
import { NoDiscount } from '../classes/discount';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('camiseta', 49.91));
shoppingCart.addItem(new Product('caderno', 9.9123));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
