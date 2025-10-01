class CoffeShop {
    constructor(name, menu) {
        this.name = name
        this.menu = menu
        this.orders = []
    }

    addOrder(itemName) {
        const item = this.menu.find(menuItem => menuItem.item === itemName)

        if (item) {
            this.orders.push(item)
            return 'Order added'
        }

        return 'This item is currently unavailable!'
    }

    fulfillOrder() {
        if (this.orders.length > 0) {
            const item = this.orders.shift()
            return `The ${item} is ready`
        }

        return 'All orders have been fulfilled'
    }

    listOrders() {
        return this.orders
    }

    dueAmount() {
        if (this.orders.length > 0) {
            return this.orders.reduce((total, order) => total + order.price, 0)
        }
    }

    cheapestItem() {
        const cheapest = this.menu.reduce((prev, curr) =>
            curr.price < prev.price ? curr : prev
        )

        return cheapest.item
    }

    drinksOnly() {
        return this.menu.filter(menuItem => menuItem.type === 'drink').map(menuItem => menuItem.item)
    }

    foodsOnly() {
        return this.menu.filter(menuItem => menuItem.type === 'food').map(menuItem => menuItem.item)
    }
}

class MenuItem {
    constructor(item, type, price) {
        this.item = item
        this.type = type
        this.price = price
    }
}

const cs1 = new CoffeShop(
    'Coffe Shop 1',
    [
        new MenuItem('orange juice', 'drink', 2.5),
        new MenuItem('lemonade', 'drink', 0.85),
        new MenuItem('cranberry juice', 'drink', 3.0),
        new MenuItem('pineapple juice', 'drink', 2.25),
        new MenuItem('lemon iced tea', 'drink', 1.5),
        new MenuItem('vanilla chai latte', 'drink', 2.35),
        new MenuItem('hot chocolate', 'drink', 2.4),
        new MenuItem('iced coffee', 'drink', 1.32),
        new MenuItem('tuna sandwich', 'food', 2.5),
        new MenuItem('ham and cheese sandwich', 'food', 3.0),
        new MenuItem('bacon and egg', 'food', 3.25),
        new MenuItem('steak', 'food', 5.5),
        new MenuItem('hamburger', 'food', 3.0),
        new MenuItem('cinnamon roll', 'food', 0.85)
    ]
)

console.log(cs1.addOrder('hot cocoa')) // This item is currently unavailable
console.log(cs1.addOrder('iced tea')) // This item is currently unavailable
console.log(cs1.addOrder("cinnamon roll")) // Order added
console.log(cs1.addOrder("iced coffee")) // Order added
console.log(cs1.listOrders()) // ['cinnamon roll', 'iced coffee']
console.log(cs1.dueAmount()) // 2.17
console.log(cs1.fulfillOrder()) // The cinnamon roll is ready
console.log(cs1.fulfillOrder()) // The iced coffee is ready
console.log(cs1.fulfillOrder()) // All orders have been fulfilled
console.log(cs1.listOrders()) // []
console.log(cs1.cheapestItem()) // 'Lemonade'
console.log(cs1.drinksOnly()) // // ['orange juice', 'lemonade', 'cranberry juice', 'pineapple juice', 'lemon iced tea', 'vanilla chai latte', 'hot chocolate', 'iced coffee']
console.log(cs1.foodsOnly()) // ['tuna sandwich', 'ham and cheese sandwich', 'bacon and egg', 'steak', 'hamburger', 'cinnamon roll']