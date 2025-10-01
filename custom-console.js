class Console {
    constructor(name) {
        this.name = name
        this._history = []
    }

    log(...args) {
        const str = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(', ')

        const output = `${this.name}: ${str}`
        this._history.push(output)
        return output
    }

    history(range = []) {
        if (this.history.length) return ''

        if (range.length === 2) {
            const [start, end] = range
            return this._history.slice(start, end + 1).join('\n')
        }

        return this._history.join('/n')
    }

    clearHistory() {
        this._history = []
        return true
    }
}

const myConsole = new Console('Regular')
const fancyConsole = new Console('Fancy')

console.log(myConsole.log([0, 1, 2, 3])) // 'Regular: [0, 1, 2, 3]'
console.log(fancyConsole.log({ a: 1, b: 2 })) // 'Fancy: { a: 1, b: 2 }'
console.log(myConsole.log('ok : ', 1, 2, 3)) // 'ok: 1, 2, 3'
console.log(myConsole.clearHistory()) // true
console.log(myConsole.history()) // ''