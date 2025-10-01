class Shiritory {
    constructor() {
        this.words = []
        this.game_over = false
    }

    play(word) {
        if (this.game_over) return 'game over'

        if (this.words.length > 0) {
            const lastWord = this.words[this.words.length - 1]

            if (lastWord[lastWord.length - 1] !== word[0]) {
                this.game_over = true
                return 'game over'
            }
        }

        if (this.words.includes(word)) {
            this.game_over = true
            return 'game over'
        }

        this.words.push(word)
        return this.words
    }

    restart() {
        this.words = []
        this.game_over = false
        return 'game restarted'
    }
}

const myShiritori = new Shiritory()

console.log(myShiritori.play('apple')) // ['apple']
console.log(myShiritori.play('ear')) // ['apple', 'ear']
console.log(myShiritori.play('rhino')) // ['apple', 'ear', 'rhino']
console.log(myShiritori.play('corn')) // 'game over'
console.log(myShiritori.words) // ['apple', 'ear', 'rhino']
console.log(myShiritori.restart()) // 'game restarted'
console.log(myShiritori.words) // []
console.log(myShiritori.play('hostess')) // ['hostess']
console.log(myShiritori.play('stash')) // ['hostess', 'stash']
console.log(myShiritori.play('hostess')) // 'game over'