import { CartItem } from '../srp/entities/interfaces/cart-itens';
import { orderStatus } from '../srp/entities/interfaces/order-status';

export class ShoppingCartLegacy {
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
