export class Item{
    name: string
    description: string
    price: number
    qtyOnHand: number
    constructor(name: string, description: string, price: number, qtyOnHand: number) {
        this.name = name
        this.description = description
        this.price = price
        this.qtyOnHand = qtyOnHand
    }
}