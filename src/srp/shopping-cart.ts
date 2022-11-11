type CartItem = { name: string; price: number };
type orderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: orderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): orderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('seu carrinho esta vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('Seu Pedido foi recebido.');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Menssagem Enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    console.log('Carrinho de compras Foi limpo...');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'caderno', price: 9.9123 });
shoppingCart.addItem({ name: 'Lapis', price: 1.59 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
