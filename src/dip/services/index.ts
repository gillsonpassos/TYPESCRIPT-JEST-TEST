/*
Modulos de alto nivel não devem dependder de baixo nivel.
Ambos devem depender der abstrações,
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nivel são classes que execultam tarefas (os detalhes)
Classes de alto nivel são classes que gerenciam as classes de baixo nivel.
*/

import { ShoppingCart } from '../classes/shopping-cart';
import { Order } from '../classes/order';
import { Messaging } from './messaging';
import { Persistency } from './persistency';
import { Product } from '../classes/product';
import { NoDiscount } from '../classes/discount';
import { EnterpriseCustomer } from '../classes/customer';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
//const individualCustomer = new IndividualCustomer(
//  'Molusco',
//  'sirigueijo',
// '111.111.111-90',
//);

const enterpriselCustomer = new EnterpriseCustomer(
  'Empresa Submarina',
  '22222222222222222',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriselCustomer,
);

shoppingCart.addItem(new Product('camiseta', 49.91));
shoppingCart.addItem(new Product('caderno', 9.9123));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
