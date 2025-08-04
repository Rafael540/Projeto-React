/* eslint-disable @typescript-eslint/no-unused-vars */
export { }; // Isso transforma o arquivo em um módulo ES válido


export class OrderDTO {
    id?: number;
    items: OrderItemDTO[] = [];

    get total(): number {
        let sum = 0;
        this.items.forEach(item => {
            sum += item.subTotal;
        })
        return sum;
    }
}
export class OrderItemDTO {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    constructor(
        public productId: number,
        public quantity: number,
        public name: string,
        public price: number,
        public imgUrl: string
    ) { }

    get subTotal(): number {
        return this.price * this.quantity;
    }
}