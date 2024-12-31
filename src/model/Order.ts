export class Order{
    id:string
    customerId:string
    itemId:string
    qty:number
    totalPrice:number
    constructor(id: string, customerId: string, itemId: string, qty: number, totalPrice: number) {
        this.id = id
        this.customerId = customerId
        this.itemId = itemId
        this.qty = qty
        this.totalPrice = totalPrice
    }
}