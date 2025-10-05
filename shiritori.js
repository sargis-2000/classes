/**
 * Represents a Shiritori (word chain) game.
 * In this game, each new word must start with the last letter of the previous word.
 * The game ends if a rule is broken or a word is repeated.
 */

class Shiritory {
    /**
     * @type {boolean}
     * @private
     * Indicates whether the game has ended.
     */

    #game_over

    /**
     * Creates a new Shiritori game instance.
     * Initializes an empty list of words and sets the game state to active.
     */

    constructor() {
        /**
         * @type {string[]}
         * A list of all words played in the current game.
         */

        this.words = []

        this.#game_over = false
    }

    /**
     * Plays a new word in the game.
     * 
     * @param {string} word - The word to be played.
     * @returns {string[] | 'game over'} 
     * Returns the updated list of words if the move is valid, 
     * or `'game over'` if the move breaks a rule or the game has already ended.
     * 
     * @example
     * const game = new Shiritory()
     * game.play('apple') // ['apple']
     * game.play('ear') // ['apple', 'ear']
     * game.play('rock') // ['apple', 'ear', 'rock']
     * game.play('kite') // ['apple', 'ear', 'rock', 'kite']
     * game.play('elephant') // 'game over' (last letter mismatch)
     */

    play(word) {
        if (this.words.length > 0) {
            const lastWord = this.words[this.words.length - 1]

            if (lastWord[lastWord.length - 1] !== word[0] || this.words.includes(word)) {
                this.#game_over = true
                return 'game over'
            }
        }

        this.words.push(word)
        return this.words
    }

    /**
     * Restarts the game, clearing all previously played words and resetting the game state.
     * 
     * @returns {'game restarted'} A message confirming the game has been restarted.
     * 
     * @example
     * const game = new Shiritory()
     * game.play('apple')
     * game.restart() // 'game restarted'
     */

    restart() {
        this.words = []
        this.#game_over = false
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