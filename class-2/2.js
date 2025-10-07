class Account {
    #id
    #name
    #balance

    constructor(id, name, balance) {
        this.#id = id
        this.#name = name
        this.#balance = balance
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get balance() {
        return this.#balance
    }

    set name(name) {
        this.#name = name
    }

    set balance(balance) {
        this.#balance = balance
    }

    credit(amount) {
        this.balance += amount
        return this.balance
    }

    debit(amount) {
        if (amount < this.balance) {
            this.balance -= amount
            return this.balance
        }

        return 'Amount exceeded balance'
    }

    transferTo(anotherAccount, amount) {
        if (amount < this.balance) {
            this.balance -= amount
            anotherAccount.balance += amount
            return this.balance
        }

        return 'Amount exceeded balance'
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst === accountSecond
    }

    toString() {
        return `${this.name}'s account balance is ${this.balance}`
    }
}

const savingAcc = new Account(1, "Saving account", 2000)
const cardAcc = new Account(2, "Card account", 1000);

console.log(savingAcc.balance) // 2000
console.log(savingAcc.credit(400)) // 2400
console.log(savingAcc.balance) // 2400
console.log(savingAcc.debit(9000)) // Amount exceeded balance
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance) // 1400
console.log(cardAcc.balance) // 2000

const anotherAcc = savingAcc
console.log(Account.identifyAccounts(savingAcc, anotherAcc)) // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)) // false