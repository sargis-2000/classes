class Author {
    #name
    #email
    #gender

    constructor(name, email, gender) {
        this.#name = name
        this.#email = email
        this.#gender = gender
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }

    get gender() {
        return this.#gender.toLowerCase()
    }

    set name(name) {
        throw new Error('Cannot modify name')
    }

    toString() {
        if (this.gender === 'female') {
            return `Ms. ${this.name}`
        } else if (this.gender === 'male') {
            return `Mr. ${this.name}`
        }
    }
}

const author1 = new Author('J. K. Rowling', 'abc@gmail.com', 'fEmale')

console.log(author1.gender) // female
console.log(author1.name) // J. K. Rowling
console.log(author1.toString()) // Ms. J. K. Rowling

// author1.name = 12 // throws error: Cannot modify name

class Book {
    #title
    #author
    #price
    #quantity

    constructor(title, author, price, quantity) {
        this.#title = title
        this.#author = author
        this.#price = price
        this.#quantity = quantity
    }

    get title() {
        return this.#title
    }

    get author() {
        return this.#author
    }

    get price() {
        return this.#price
    }

    get quantity() {
        return this.#quantity
    }

    set title(title) {
        this.#title = title
    }

    set author(author) {
        this.#author = author
    }

    set price(price) {
        this.#price = price
    }

    set quntity(quantity) {
        this.#quantity = quantity
    }

    getProfit() {
        return this.price * this.quantity
    }

    toString() {
        return `${this.#title} by ${this.#author.toString()}`;
    }
}

const book = new Book('Harry Potter', author1, 20, 500)
console.log(book.title) // Harry Potter
console.log(book.author.name) // J. K. Rowling
console.log(book.getProfit()) // 10000
console.log(book.toString()) // Harry Potter by Ms. J. K. Rowling