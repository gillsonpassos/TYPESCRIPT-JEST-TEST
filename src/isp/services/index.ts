/*
Interface segregation principle (Principio da segregação de Interface) -
os clientes não devem ser forçados a depender de types,
 interfaces ou Membros abstratos que não utilizam.
*/

import { ShoppingCart } from '../classes/shopping-cart';
import { Order } from '../classes/order';
import { Messaging } from './messaging';
import { Persistency } from './persistency';
import { Product } from '../classes/product';
import { NoDiscount } from '../classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from '../classes/customer';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const individualCustomer = new IndividualCustomer(
  'Molusco',
  'sirigueijo',
  '111.111.111-90',
);

const enterpriselCustomer = new EnterpriseCustomer(
  'Empresa Submarina',
  '22222222222222222',
);

const persistency = new Persistency();
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
