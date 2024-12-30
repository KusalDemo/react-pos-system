export class Item{
    id:string
    name: string
    description: string
    price: number
    qtyOnHand: number
    constructor(id: string, name: string, description: string, price: number, qtyOnHand: number) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.qtyOnHand = qtyOnHand
    }
}